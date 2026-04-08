import {
  useTheme, BarChart, LineChart, AreaChart, DonutChart, RadarChart, RadialBarChart,
  SparkLine, StatCard, Flex, Stack, Grid, Text, Box,
  HiCurrencyDollar, HiUsers, HiShoppingCart,
} from 'calangoui';
import { Section, SectionTitle, SectionDesc, SubTitle, DemoWithCode } from './DocSection';

const barData = [
  { label: 'Mon', value: 45 },
  { label: 'Tue', value: 72 },
  { label: 'Wed', value: 58 },
  { label: 'Thu', value: 90 },
  { label: 'Fri', value: 65 },
  { label: 'Sat', value: 38 },
  { label: 'Sun', value: 52 },
];

const lineData = [
  { label: 'Jan', value: 30 },
  { label: 'Feb', value: 45 },
  { label: 'Mar', value: 38 },
  { label: 'Apr', value: 65 },
  { label: 'May', value: 55 },
  { label: 'Jun', value: 78 },
  { label: 'Jul', value: 85 },
  { label: 'Aug', value: 72 },
];

const multiLineData = [
  { label: 'Jan', value: 0, revenue: 40, costs: 24, profit: 16 },
  { label: 'Feb', value: 0, revenue: 55, costs: 28, profit: 27 },
  { label: 'Mar', value: 0, revenue: 48, costs: 30, profit: 18 },
  { label: 'Apr', value: 0, revenue: 72, costs: 32, profit: 40 },
  { label: 'May', value: 0, revenue: 65, costs: 35, profit: 30 },
  { label: 'Jun', value: 0, revenue: 88, costs: 38, profit: 50 },
];

const stackedAreaData = [
  { label: 'Jan', value: 0, mobile: 40, desktop: 60, tablet: 20 },
  { label: 'Feb', value: 0, mobile: 45, desktop: 55, tablet: 22 },
  { label: 'Mar', value: 0, mobile: 52, desktop: 50, tablet: 25 },
  { label: 'Apr', value: 0, mobile: 58, desktop: 48, tablet: 28 },
  { label: 'May', value: 0, mobile: 62, desktop: 52, tablet: 24 },
  { label: 'Jun', value: 0, mobile: 68, desktop: 55, tablet: 30 },
];

const donutData = [
  { label: 'Desktop', value: 45, color: '#FFFFFF' },
  { label: 'Mobile', value: 30, color: '#71717A' },
  { label: 'Tablet', value: 15, color: '#3F3F46' },
  { label: 'Other', value: 10, color: '#22C55E' },
];

const radarData = [
  { label: 'Speed', value: 85 },
  { label: 'Reliability', value: 92 },
  { label: 'Comfort', value: 70 },
  { label: 'Safety', value: 95 },
  { label: 'Efficiency', value: 78 },
  { label: 'Design', value: 88 },
];

const radialData = [
  { label: 'React', value: 85, color: '#61DAFB' },
  { label: 'TypeScript', value: 72, color: '#3178C6' },
  { label: 'Node.js', value: 65, color: '#68A063' },
  { label: 'Python', value: 55, color: '#FFD43B' },
];

const sparkSamples = [12, 18, 14, 22, 19, 28, 25, 32, 29, 35, 30, 38];

export function ChartsSection() {
  const { theme } = useTheme();

  return (
    <Section id="charts">
      <SectionTitle>Charts & Data Viz</SectionTitle>
      <SectionDesc>
        Graficos interativos baseados em Recharts, com tema calangoui automatico.
        BarChart, LineChart, AreaChart, DonutChart, RadarChart, RadialBarChart, SparkLine e StatCard.
      </SectionDesc>

      <SubTitle>StatCard — KPI Cards</SubTitle>
      <DemoWithCode code={`<StatCard
  label="Revenue"
  value="$45,231"
  trend={{ value: "+20.1%", positive: true }}
  sparkData={[12, 18, 14, 22, 19, 28]}
  sparkColor={theme.colors.success.DEFAULT}
  icon={<HiCurrencyDollar />}
/>`}>
        <Grid $columns="repeat(auto-fill, minmax(220px, 1fr))" $gap="16px">
          <StatCard
            label="Revenue"
            value="$45,231"
            trend={{ value: '+20.1%', positive: true }}
            sparkData={sparkSamples}
            sparkColor={theme.colors.success.DEFAULT}
            icon={<HiCurrencyDollar size={16} style={{ color: theme.colors.mutedForeground }} />}
          />
          <StatCard
            label="Users"
            value="2,350"
            trend={{ value: '+12.5%', positive: true }}
            sparkData={[8, 12, 10, 15, 18, 16, 22, 20, 25, 23, 28]}
            sparkColor={theme.colors.info.DEFAULT}
            icon={<HiUsers size={16} style={{ color: theme.colors.mutedForeground }} />}
          />
          <StatCard
            label="Orders"
            value="1,234"
            trend={{ value: '-3.2%', positive: false }}
            sparkData={[28, 25, 22, 24, 20, 18, 22, 19, 16, 18, 15]}
            sparkColor={theme.colors.error.DEFAULT}
            icon={<HiShoppingCart size={16} style={{ color: theme.colors.mutedForeground }} />}
          />
        </Grid>
      </DemoWithCode>

      <SubTitle>BarChart</SubTitle>
      <DemoWithCode code={`<BarChart
  data={[
    { label: 'Mon', value: 45 },
    { label: 'Tue', value: 72 },
  ]}
/>`}>
        <BarChart data={barData} />
      </DemoWithCode>

      <SubTitle>BarChart — Horizontal + Custom Colors</SubTitle>
      <DemoWithCode code={`<BarChart
  data={data}
  horizontal
  colors={['#61DAFB', '#42B883', '#FF3E00', '#DD0031']}
/>`}>
        <BarChart
          data={[
            { label: 'React', value: 85, color: '#61DAFB' },
            { label: 'Vue', value: 62, color: '#42B883' },
            { label: 'Svelte', value: 45, color: '#FF3E00' },
            { label: 'Angular', value: 38, color: '#DD0031' },
            { label: 'Solid', value: 28, color: '#4F88C6' },
          ]}
          horizontal
        />
      </DemoWithCode>

      <SubTitle>BarChart — Multi-series</SubTitle>
      <DemoWithCode code={`<BarChart
  data={data}
  dataKeys={[
    { key: 'revenue', color: '#FFFFFF', name: 'Revenue' },
    { key: 'costs', color: '#71717A', name: 'Costs' },
  ]}
  showLegend
/>`}>
        <BarChart
          data={multiLineData}
          dataKeys={[
            { key: 'revenue', color: '#FFFFFF', name: 'Revenue' },
            { key: 'costs', color: '#71717A', name: 'Costs' },
            { key: 'profit', color: '#22C55E', name: 'Profit' },
          ]}
          showLegend
        />
      </DemoWithCode>

      <SubTitle>LineChart</SubTitle>
      <DemoWithCode code={`<LineChart
  data={data}
  showGrid
  showDots
/>`}>
        <LineChart data={lineData} />
      </DemoWithCode>

      <SubTitle>LineChart — Multi-series</SubTitle>
      <DemoWithCode code={`<LineChart
  data={data}
  dataKeys={[
    { key: 'revenue', color: '#FFFFFF', name: 'Revenue' },
    { key: 'costs', color: '#EF4444', name: 'Costs', dashed: true },
  ]}
/>`}>
        <LineChart
          data={multiLineData}
          dataKeys={[
            { key: 'revenue', color: '#FFFFFF', name: 'Revenue' },
            { key: 'costs', color: '#EF4444', name: 'Costs', dashed: true },
            { key: 'profit', color: '#22C55E', name: 'Profit' },
          ]}
        />
      </DemoWithCode>

      <SubTitle>AreaChart</SubTitle>
      <DemoWithCode code={`<AreaChart data={data} color="#3B82F6" />`}>
        <AreaChart data={lineData} color={theme.colors.info.DEFAULT} />
      </DemoWithCode>

      <SubTitle>AreaChart — Stacked</SubTitle>
      <DemoWithCode code={`<AreaChart
  data={data}
  stacked
  dataKeys={[
    { key: 'mobile', color: '#3B82F6', name: 'Mobile' },
    { key: 'desktop', color: '#FFFFFF', name: 'Desktop' },
    { key: 'tablet', color: '#22C55E', name: 'Tablet' },
  ]}
/>`}>
        <AreaChart
          data={stackedAreaData}
          stacked
          dataKeys={[
            { key: 'mobile', color: '#3B82F6', name: 'Mobile' },
            { key: 'desktop', color: '#FFFFFF', name: 'Desktop' },
            { key: 'tablet', color: '#22C55E', name: 'Tablet' },
          ]}
        />
      </DemoWithCode>

      <SubTitle>DonutChart</SubTitle>
      <DemoWithCode code={`<DonutChart
  data={[
    { label: 'Desktop', value: 45, color: '#FFF' },
    { label: 'Mobile', value: 30, color: '#71717A' },
  ]}
/>`}>
        <Flex $gap="32px" $wrap="wrap" $align="flex-start">
          <div style={{ flex: 1, minWidth: '250px' }}>
            <DonutChart data={donutData} />
          </div>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <DonutChart
              data={[
                { label: 'Product', value: 42, color: '#3B82F6' },
                { label: 'Services', value: 28, color: '#22C55E' },
                { label: 'Subscriptions', value: 18, color: '#F59E0B' },
                { label: 'Ads', value: 8, color: '#EF4444' },
                { label: 'Other', value: 4, color: '#A855F7' },
              ]}
            />
          </div>
        </Flex>
      </DemoWithCode>

      <SubTitle>PieChart (donut=false)</SubTitle>
      <DemoWithCode code={`<DonutChart data={data} donut={false} />`}>
        <DonutChart
          data={[
            { label: 'Chrome', value: 65, color: '#4285F4' },
            { label: 'Safari', value: 19, color: '#FFFFFF' },
            { label: 'Firefox', value: 10, color: '#FF7139' },
            { label: 'Other', value: 6, color: '#71717A' },
          ]}
          donut={false}
        />
      </DemoWithCode>

      <SubTitle>RadarChart</SubTitle>
      <DemoWithCode code={`<RadarChart
  data={[
    { label: 'Speed', value: 85 },
    { label: 'Reliability', value: 92 },
    { label: 'Safety', value: 95 },
  ]}
/>`}>
        <RadarChart data={radarData} color={theme.colors.info.DEFAULT} />
      </DemoWithCode>

      <SubTitle>RadialBarChart</SubTitle>
      <DemoWithCode code={`<RadialBarChart
  data={[
    { label: 'React', value: 85, color: '#61DAFB' },
    { label: 'TypeScript', value: 72, color: '#3178C6' },
  ]}
/>`}>
        <RadialBarChart data={radialData} />
      </DemoWithCode>

      <SubTitle>SparkLine</SubTitle>
      <DemoWithCode code={`<SparkLine data={[12, 18, 14, 22, 19, 28]} />
<SparkLine data={data} area color="#22C55E" />`}>
        <Flex $gap="24px" $align="center" $wrap="wrap">
          <Stack $spacing="4px" $align="center">
            <SparkLine data={sparkSamples} />
            <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>Default</Text>
          </Stack>
          <Stack $spacing="4px" $align="center">
            <SparkLine data={sparkSamples} area color={theme.colors.success.DEFAULT} />
            <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>Area (green)</Text>
          </Stack>
          <Stack $spacing="4px" $align="center">
            <SparkLine data={[28, 25, 22, 24, 20, 18, 15, 12]} color={theme.colors.error.DEFAULT} />
            <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>Downtrend</Text>
          </Stack>
          <Stack $spacing="4px" $align="center">
            <SparkLine data={[5, 8, 12, 10, 15, 20, 18, 25, 22, 30]} area color={theme.colors.info.DEFAULT} width="160px" height="40px" />
            <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>Wide (blue)</Text>
          </Stack>
        </Flex>
      </DemoWithCode>

      <SubTitle>Dashboard Example</SubTitle>
      <DemoWithCode code={`<Grid $columns={3} $gap="16px">
  <StatCard label="Revenue" value="$45K" trend={...} sparkData={...} />
</Grid>
<AreaChart data={monthlyData} color={theme.colors.primary} />`}>
        <Stack $spacing="20px">
          <Grid $columns="repeat(auto-fill, minmax(200px, 1fr))" $gap="12px">
            <StatCard label="Total Revenue" value="$45,231" trend={{ value: '+20.1%', positive: true }} sparkData={sparkSamples} sparkColor={theme.colors.success.DEFAULT} />
            <StatCard label="Active Users" value="2,350" trend={{ value: '+12.5%', positive: true }} sparkData={[8, 12, 10, 15, 18, 16, 22, 20, 25]} sparkColor={theme.colors.info.DEFAULT} />
            <StatCard label="Bounce Rate" value="24.3%" trend={{ value: '-2.1%', positive: true }} sparkData={[30, 28, 26, 28, 25, 24, 26, 24]} sparkColor={theme.colors.warning.DEFAULT} />
          </Grid>
          <Box p="20px" bg={theme.colors.card} radius={theme.radii.lg} border={`1px solid ${theme.colors.border}`}>
            <Text size={theme.typography.fontSize.sm} weight={theme.typography.fontWeight.medium} style={{ marginBottom: '12px', display: 'block' }}>
              Monthly Revenue
            </Text>
            <AreaChart
              data={[
                { label: 'Jan', value: 18 }, { label: 'Feb', value: 25 }, { label: 'Mar', value: 22 },
                { label: 'Apr', value: 38 }, { label: 'May', value: 35 }, { label: 'Jun', value: 45 },
                { label: 'Jul', value: 52 }, { label: 'Aug', value: 48 }, { label: 'Sep', value: 58 },
                { label: 'Oct', value: 55 }, { label: 'Nov', value: 65 }, { label: 'Dec', value: 72 },
              ]}
              height="200px"
              color={theme.colors.primary}
            />
          </Box>
        </Stack>
      </DemoWithCode>
    </Section>
  );
}
