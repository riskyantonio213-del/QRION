"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { chartPalette, type LiveSlice } from "@/data/live-preview";

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid var(--qrion-border)",
  fontSize: 12,
  color: "var(--qrion-indigo)",
} as const;

/** Trend of the active module's headline metric. */
export function ModuleTrendChart({
  series,
  label,
}: {
  series: { label: string; value: number }[];
  label: string;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={series} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 6" stroke="var(--qrion-border)" vertical={false} />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 11, fill: "var(--qrion-text-muted)" }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          width={40}
          tick={{ fontSize: 11, fill: "var(--qrion-text-muted)" }}
        />
        <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: "var(--qrion-indigo)" }} />
        <Bar dataKey="value" name={label} radius={[6, 6, 0, 0]} fill="var(--qrion-chart-1)" />
      </BarChart>
    </ResponsiveContainer>
  );
}

/** Composition of the active module, restricted to the brand palette. */
export function ModuleBreakdownChart({ data }: { data: LiveSlice[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius="58%"
          outerRadius="86%"
          paddingAngle={3}
          stroke="var(--qrion-background)"
          strokeWidth={2}
        >
          {data.map((slice) => (
            <Cell key={slice.name} fill={chartPalette[slice.slot]} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: "var(--qrion-indigo)" }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
