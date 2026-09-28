"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { attendanceSeries, paymentStatus } from "@/data/dashboard";

/**
 * Charts are split into their own module and imported with `next/dynamic`
 * (ssr: false) so Recharts never runs during SSR — that avoids hydration
 * mismatches and keeps the charting library out of the initial page bundle.
 */

export function AttendanceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={attendanceSeries}
        margin={{ top: 4, right: 4, left: -24, bottom: 0 }}
      >
        <defs>
          <linearGradient id="hadir-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--brand)" stopOpacity={0.28} />
            <stop offset="100%" stopColor="var(--brand)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 6" stroke="var(--border)" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          width={40}
          tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
        />
        <Tooltip
          contentStyle={{
            borderRadius: 12,
            border: "1px solid var(--border)",
            fontSize: 12,
          }}
          labelStyle={{ color: "var(--foreground)" }}
        />
        <Area
          type="monotone"
          dataKey="hadir"
          name="Hadir (%)"
          stroke="var(--brand)"
          strokeWidth={2}
          fill="url(#hadir-fill)"
        />
        <Area
          type="monotone"
          dataKey="terlambat"
          name="Terlambat (%)"
          stroke="var(--qrion-warning)"
          strokeWidth={2}
          fillOpacity={0}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function PaymentChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={paymentStatus}
        margin={{ top: 4, right: 4, left: -24, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 6" stroke="var(--border)" vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          width={40}
          tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
        />
        <Tooltip
          cursor={{ fill: "var(--soft)" }}
          contentStyle={{
            borderRadius: 12,
            border: "1px solid var(--border)",
            fontSize: 12,
          }}
        />
        <Bar dataKey="value" name="Persentase (%)" radius={[6, 6, 0, 0]}>
          {paymentStatus.map((entry) => (
            <Cell key={entry.name} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
