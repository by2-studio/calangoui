import type { ReactNode } from 'react';
import styled, { useTheme } from 'styled-components';
import type { CalangoUITheme } from '../../theme/themes';
import {
  ResponsiveContainer,
  BarChart as ReBarChart,
  Bar,
  LineChart as ReLineChart,
  Line,
  AreaChart as ReAreaChart,
  Area,
  PieChart as RePieChart,
  Pie,
  Cell,
  RadarChart as ReRadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBarChart as ReRadialBarChart,
  RadialBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ReTooltip,
  Legend,
} from 'recharts';

// ─── Shared ─────────────────────────────────────────────────

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
  [key: string]: unknown;
}

const ChartWrapper = styled.div<{ $h?: string }>`
  width: 100%;
  height: ${({ $h }) => $h || '300px'};
`;

const TooltipBox = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 10px 14px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const TooltipLabel = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 4px;
`;

const TooltipValue = styled.div<{ $color?: string }>`
  color: ${({ $color, theme }) => $color || theme.colors.mutedForeground};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
`;

function CalangoTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <TooltipBox>
      <TooltipLabel>{label}</TooltipLabel>
      {payload.map((p: any, i: number) => (
        <TooltipValue key={i} $color={p.color}>
          {p.name}: {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}
        </TooltipValue>
      ))}
    </TooltipBox>
  );
}

function useChartTheme() {
  const theme = useTheme() as CalangoUITheme;
  return {
    theme,
    grid: theme.colors.border,
    text: theme.colors.mutedForeground,
    primary: theme.colors.primary,
    bg: theme.colors.background,
    fontSize: 11,
    fontFamily: theme.typography.fontFamily.sans,
  };
}

// ─── BarChart ───────────────────────────────────────────────

export interface BarChartProps {
  data: ChartDataPoint[];
  height?: string;
  color?: string;
  colors?: string[];
  horizontal?: boolean;
  showGrid?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  radius?: number;
  dataKeys?: { key: string; color: string; name?: string }[];
}

export function BarChart({
  data, height, color, colors, horizontal = false, showGrid = true,
  showTooltip = true, showLegend = false, radius = 4, dataKeys,
}: BarChartProps) {
  const ct = useChartTheme();
  const hasMultipleKeys = dataKeys && dataKeys.length > 0;

  return (
    <ChartWrapper $h={height}>
      <ResponsiveContainer width="100%" height="100%">
        <ReBarChart
          data={data}
          layout={horizontal ? 'vertical' : 'horizontal'}
          margin={{ top: 8, right: 8, bottom: 4, left: horizontal ? 40 : 0 }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke={ct.grid} vertical={!horizontal} horizontal={horizontal || true} />}
          {horizontal ? (
            <>
              <XAxis type="number" tick={{ fill: ct.text, fontSize: ct.fontSize }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="label" tick={{ fill: ct.text, fontSize: ct.fontSize }} axisLine={false} tickLine={false} width={50} />
            </>
          ) : (
            <>
              <XAxis dataKey="label" tick={{ fill: ct.text, fontSize: ct.fontSize }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: ct.text, fontSize: ct.fontSize }} axisLine={false} tickLine={false} width={40} />
            </>
          )}
          {showTooltip && <ReTooltip content={<CalangoTooltip />} cursor={{ fill: `${ct.primary}08` }} />}
          {showLegend && <Legend wrapperStyle={{ fontSize: ct.fontSize, fontFamily: ct.fontFamily }} />}
          {hasMultipleKeys ? (
            dataKeys!.map((dk) => (
              <Bar key={dk.key} dataKey={dk.key} name={dk.name || dk.key} fill={dk.color} radius={[radius, radius, radius, radius]} />
            ))
          ) : (
            <Bar dataKey="value" radius={[radius, radius, radius, radius]}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color || (colors ? colors[i % colors.length] : color || ct.primary)} />
              ))}
            </Bar>
          )}
        </ReBarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

// ─── LineChart ───────────────────────────────────────────────

export interface LineChartProps {
  data: ChartDataPoint[];
  height?: string;
  color?: string;
  showGrid?: boolean;
  showDots?: boolean;
  showTooltip?: boolean;
  curved?: boolean;
  strokeWidth?: number;
  dataKeys?: { key: string; color: string; name?: string; dashed?: boolean }[];
}

export function LineChart({
  data, height, color, showGrid = true, showDots = true,
  showTooltip = true, curved = true, strokeWidth = 2, dataKeys,
}: LineChartProps) {
  const ct = useChartTheme();
  const hasMultipleKeys = dataKeys && dataKeys.length > 0;

  return (
    <ChartWrapper $h={height}>
      <ResponsiveContainer width="100%" height="100%">
        <ReLineChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke={ct.grid} />}
          <XAxis dataKey="label" tick={{ fill: ct.text, fontSize: ct.fontSize }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: ct.text, fontSize: ct.fontSize }} axisLine={false} tickLine={false} width={40} />
          {showTooltip && <ReTooltip content={<CalangoTooltip />} />}
          {hasMultipleKeys ? (
            dataKeys!.map((dk) => (
              <Line
                key={dk.key}
                dataKey={dk.key}
                name={dk.name || dk.key}
                stroke={dk.color}
                strokeWidth={strokeWidth}
                strokeDasharray={dk.dashed ? '5 5' : undefined}
                type={curved ? 'monotone' : 'linear'}
                dot={showDots ? { r: 3, fill: ct.bg, stroke: dk.color, strokeWidth: 2 } : false}
                activeDot={{ r: 5 }}
              />
            ))
          ) : (
            <Line
              dataKey="value"
              stroke={color || ct.primary}
              strokeWidth={strokeWidth}
              type={curved ? 'monotone' : 'linear'}
              dot={showDots ? { r: 3, fill: ct.bg, stroke: color || ct.primary, strokeWidth: 2 } : false}
              activeDot={{ r: 5 }}
            />
          )}
        </ReLineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

// ─── AreaChart ───────────────────────────────────────────────

export interface AreaChartProps {
  data: ChartDataPoint[];
  height?: string;
  color?: string;
  showGrid?: boolean;
  showTooltip?: boolean;
  stacked?: boolean;
  dataKeys?: { key: string; color: string; name?: string }[];
}

export function AreaChart({
  data, height, color, showGrid = true, showTooltip = true, stacked = false, dataKeys,
}: AreaChartProps) {
  const ct = useChartTheme();
  const hasMultipleKeys = dataKeys && dataKeys.length > 0;

  return (
    <ChartWrapper $h={height}>
      <ResponsiveContainer width="100%" height="100%">
        <ReAreaChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke={ct.grid} />}
          <XAxis dataKey="label" tick={{ fill: ct.text, fontSize: ct.fontSize }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: ct.text, fontSize: ct.fontSize }} axisLine={false} tickLine={false} width={40} />
          {showTooltip && <ReTooltip content={<CalangoTooltip />} />}
          {hasMultipleKeys ? (
            dataKeys!.map((dk) => (
              <Area
                key={dk.key}
                dataKey={dk.key}
                name={dk.name || dk.key}
                stroke={dk.color}
                fill={dk.color}
                fillOpacity={0.15}
                strokeWidth={2}
                type="monotone"
                stackId={stacked ? 'stack' : undefined}
              />
            ))
          ) : (
            <Area
              dataKey="value"
              stroke={color || ct.primary}
              fill={color || ct.primary}
              fillOpacity={0.15}
              strokeWidth={2}
              type="monotone"
            />
          )}
        </ReAreaChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

// ─── DonutChart / PieChart ──────────────────────────────────

export interface DonutChartProps {
  data: ChartDataPoint[];
  height?: string;
  donut?: boolean;
  innerRadius?: number;
  showTooltip?: boolean;
  showLegend?: boolean;
  showLabels?: boolean;
}

const defaultColors = ['#FFFFFF', '#A1A1AA', '#71717A', '#3F3F46', '#22C55E', '#3B82F6', '#F59E0B', '#EF4444', '#A855F7', '#EC4899'];

export function DonutChart({
  data, height, donut = true, innerRadius = 60, showTooltip = true, showLegend = true, showLabels = false,
}: DonutChartProps) {
  const ct = useChartTheme();

  return (
    <ChartWrapper $h={height}>
      <ResponsiveContainer width="100%" height="100%">
        <RePieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            innerRadius={donut ? innerRadius : 0}
            outerRadius={80}
            paddingAngle={donut ? 2 : 0}
            label={showLabels ? ({ label, percent }: any) => `${label} ${(percent * 100).toFixed(0)}%` : false}
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color || defaultColors[i % defaultColors.length]} stroke="transparent" />
            ))}
          </Pie>
          {showTooltip && <ReTooltip content={<CalangoTooltip />} />}
          {showLegend && <Legend wrapperStyle={{ fontSize: ct.fontSize, fontFamily: ct.fontFamily, color: ct.text }} />}
        </RePieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

// ─── RadarChart ─────────────────────────────────────────────

export interface RadarChartProps {
  data: ChartDataPoint[];
  height?: string;
  color?: string;
  showTooltip?: boolean;
  dataKeys?: { key: string; color: string; name?: string }[];
}

export function RadarChart({ data, height, color, showTooltip = true, dataKeys }: RadarChartProps) {
  const ct = useChartTheme();
  const hasMultipleKeys = dataKeys && dataKeys.length > 0;

  return (
    <ChartWrapper $h={height}>
      <ResponsiveContainer width="100%" height="100%">
        <ReRadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke={ct.grid} />
          <PolarAngleAxis dataKey="label" tick={{ fill: ct.text, fontSize: ct.fontSize }} />
          <PolarRadiusAxis tick={{ fill: ct.text, fontSize: 9 }} axisLine={false} />
          {showTooltip && <ReTooltip content={<CalangoTooltip />} />}
          {hasMultipleKeys ? (
            dataKeys!.map((dk) => (
              <Radar key={dk.key} dataKey={dk.key} name={dk.name || dk.key} stroke={dk.color} fill={dk.color} fillOpacity={0.2} />
            ))
          ) : (
            <Radar dataKey="value" stroke={color || ct.primary} fill={color || ct.primary} fillOpacity={0.2} />
          )}
        </ReRadarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

// ─── RadialBarChart ─────────────────────────────────────────

export interface RadialBarChartProps {
  data: ChartDataPoint[];
  height?: string;
  showLegend?: boolean;
  showTooltip?: boolean;
}

export function RadialBarChartComponent({ data, height, showLegend = true, showTooltip = true }: RadialBarChartProps) {
  const ct = useChartTheme();
  const formatted = data.map((d, i) => ({
    ...d,
    name: d.label,
    fill: d.color || defaultColors[i % defaultColors.length],
  }));

  return (
    <ChartWrapper $h={height}>
      <ResponsiveContainer width="100%" height="100%">
        <ReRadialBarChart
          data={formatted}
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="90%"
          barSize={12}
        >
          <RadialBar dataKey="value" background={{ fill: `${ct.grid}44` }} cornerRadius={6} />
          {showTooltip && <ReTooltip content={<CalangoTooltip />} />}
          {showLegend && <Legend wrapperStyle={{ fontSize: ct.fontSize, fontFamily: ct.fontFamily, color: ct.text }} />}
        </ReRadialBarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

// ─── SparkLine ──────────────────────────────────────────────

export interface SparkLineProps {
  data: number[];
  width?: string;
  height?: string;
  color?: string;
  area?: boolean;
}

export function SparkLine({ data, width = '120px', height = '32px', color, area = false }: SparkLineProps) {
  const ct = useChartTheme();
  const c = color || ct.primary;
  const chartData = data.map((value, i) => ({ value, i }));

  return (
    <div style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        {area ? (
          <ReAreaChart data={chartData} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
            <Area dataKey="value" stroke={c} fill={c} fillOpacity={0.15} strokeWidth={1.5} type="monotone" dot={false} />
          </ReAreaChart>
        ) : (
          <ReLineChart data={chartData} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
            <Line dataKey="value" stroke={c} strokeWidth={1.5} type="monotone" dot={false} />
          </ReLineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}

// ─── StatCard ───────────────────────────────────────────────

const StatRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatLbl = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const StatVal = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.foreground};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
`;

const StatTrend = styled.span<{ $positive?: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ $positive, theme }) => ($positive ? theme.colors.success.DEFAULT : theme.colors.error.DEFAULT)};
`;

export interface StatCardProps {
  label: string;
  value: string;
  trend?: { value: string; positive: boolean };
  sparkData?: number[];
  sparkColor?: string;
  icon?: ReactNode;
}

export function StatCard({ label, value, trend, sparkData, sparkColor, icon }: StatCardProps) {
  return (
    <StatRoot>
      <StatHeader>
        <StatLbl>{label}</StatLbl>
        {icon}
      </StatHeader>
      <StatVal>{value}</StatVal>
      <StatHeader>
        {trend && (
          <StatTrend $positive={trend.positive}>
            {trend.positive ? '↑' : '↓'} {trend.value}
          </StatTrend>
        )}
        {sparkData && <SparkLine data={sparkData} color={sparkColor} area />}
      </StatHeader>
    </StatRoot>
  );
}
