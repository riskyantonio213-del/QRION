"use client";

import { useEffect, useRef, useState } from "react";
import {
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

/**
 * Marquee loop satu salinan penuh (0 → -lebar) yang bisa di-drag.
 *
 * Posisi disimpan sebagai motion value dalam piksel dan digerakkan oleh
 * useAnimationFrame, sehingga bisa dijeda lalu digeser manual lewat pointer
 * tanpa konflik dengan CSS animation. Saat pointer dilepas, arah auto-scroll
 * mengikuti arah drag terakhir (drag kanan → terus ke kanan). Wrap modulo
 * setengah lebar track memakai sifat track dua salinan identik.
 */

type DragState = {
  pointerId: number;
  startX: number;
  startP: number;
  lastDelta: number;
};

function wrap(p: number, half: number): number {
  if (half <= 0) return p;
  return (((p % half) + half) % half) - half;
}

export function useDragMarquee({
  duration,
  pauseOnHover = false,
}: {
  /** Detik untuk satu putaran penuh (sama dengan durasi loop lama). */
  duration: number;
  /** Jeda auto saat kursor di atas container (hover). */
  pauseOnHover?: boolean;
}) {
  const x = useMotionValue(0);
  const dirRef = useRef<1 | -1>(-1);
  const hoverRef = useRef(false);
  const dragRef = useRef<DragState | null>(null);
  const halfRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const reduced = useReducedMotion() ?? false;

  const measure = () => {
    const w = trackRef.current?.offsetWidth ?? 0;
    halfRef.current = w > 0 ? w / 2 : 0;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    measure();
    const ro = new ResizeObserver(() => measure());
    ro.observe(track);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useAnimationFrame((_time, deltaMs) => {
    if (reduced || dragRef.current) return;
    if (pauseOnHover && hoverRef.current) return;
    const half = halfRef.current;
    if (half <= 0) {
      measure();
      return;
    }
    const step = dirRef.current * (half / Math.max(duration, 1)) * (deltaMs / 1000);
    if (step !== 0) x.set(wrap(x.get() + step, half));
  });

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    measure();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startP: x.get(),
      lastDelta: 0,
    };
    setDragging(true);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const delta = event.clientX - drag.startX;
    drag.lastDelta = delta;
    x.set(wrap(drag.startP + delta, halfRef.current));
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    // Threshold kecil: klik/geser remah tak mengubah arah auto-scroll.
    if (Math.abs(drag.lastDelta) > 6) {
      dirRef.current = drag.lastDelta > 0 ? 1 : -1;
    }
    dragRef.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handlers = {
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
    // Cegah drag native <img> di dalam kartu agar tidak berebut pointer.
    onDragStart: (event: React.DragEvent<HTMLDivElement>) =>
      event.preventDefault(),
    onMouseEnter: () => {
      hoverRef.current = true;
    },
    onMouseLeave: () => {
      hoverRef.current = false;
    },
  };

  return { containerRef, trackRef, x, dragging, handlers };
}
