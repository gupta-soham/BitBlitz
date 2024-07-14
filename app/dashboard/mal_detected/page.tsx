"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
const chartData = [
  { scans: "Total Scans", count: 275, fill: "var(--color-total_scans)" },
  { scans: "Malicious", count: 200, fill: "var(--color-malicious)" },
];

const chartConfig = {
  total_scans: {
    label: "Total Scans",
    color: "hsl(var(--accent))",
  },
  malicious: {
    label: "Malicious",
    color: "hsl(var(--foreground))",
  },
} satisfies ChartConfig;

export default function Component() {
  return (
    <Card className="flex flex-col bg-bar-graph">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Scans Vs Total Malware Detected</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[750px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="count" />
            <ChartLegend
              content={<ChartLegendContent nameKey="scans" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
