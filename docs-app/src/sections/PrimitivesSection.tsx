import { useTheme, Box, Text, Heading, Flex, Stack, Grid, Divider } from 'calangoui';
import { Section, SectionTitle, SectionDesc, SubTitle, DemoWithCode } from './DocSection';

export function PrimitivesSection() {
  const { theme } = useTheme();

  return (
    <Section id="primitives">
      <SectionTitle>Primitive Components</SectionTitle>
      <SectionDesc>
        Blocos fundamentais de layout e tipografia. Box, Text, Flex, Grid, Stack e Divider.
      </SectionDesc>

      <SubTitle>Box</SubTitle>
      <DemoWithCode code={`<Flex $gap="12px" $wrap="wrap">
  <Box p={theme.spacing[4]} bg={theme.colors.muted} radius={theme.radii.md}>
    <Text size={theme.typography.fontSize.sm}>Box with padding</Text>
  </Box>
  <Box p={theme.spacing[4]} bg={theme.colors.accent} radius={theme.radii.lg} shadow={theme.shadows.md}>
    <Text size={theme.typography.fontSize.sm}>Box with shadow</Text>
  </Box>
</Flex>`}>
        <Flex $gap="12px" $wrap="wrap">
          <Box p={theme.spacing[4]} bg={theme.colors.muted} radius={theme.radii.md}>
            <Text size={theme.typography.fontSize.sm}>Box with padding</Text>
          </Box>
          <Box p={theme.spacing[4]} bg={theme.colors.accent} radius={theme.radii.lg} shadow={theme.shadows.md}>
            <Text size={theme.typography.fontSize.sm}>Box with shadow</Text>
          </Box>
        </Flex>
      </DemoWithCode>

      <SubTitle>Text & Heading</SubTitle>
      <DemoWithCode code={`<Stack $spacing="8px">
  <Heading>Heading Component</Heading>
  <Heading size={theme.typography.fontSize.xl}>Smaller Heading</Heading>
  <Text size={theme.typography.fontSize.base}>Regular text body</Text>
  <Text size={theme.typography.fontSize.sm} color={theme.colors.mutedForeground}>Muted small text</Text>
  <Text size={theme.typography.fontSize.sm} mono>Monospace text</Text>
  <Text size={theme.typography.fontSize.sm} truncate>Long truncated text...</Text>
</Stack>`}>
        <Stack $spacing="8px">
          <Heading>Heading Component</Heading>
          <Heading size={theme.typography.fontSize.xl}>Smaller Heading</Heading>
          <Text size={theme.typography.fontSize.base}>Regular text body</Text>
          <Text size={theme.typography.fontSize.sm} color={theme.colors.mutedForeground}>Muted small text</Text>
          <Text size={theme.typography.fontSize.sm} mono>Monospace text</Text>
          <div style={{ width: '200px' }}>
            <Text size={theme.typography.fontSize.sm} truncate style={{ display: 'block' }}>
              This is a long text that should be truncated with ellipsis when it overflows
            </Text>
          </div>
        </Stack>
      </DemoWithCode>

      <SubTitle>Flex</SubTitle>
      <DemoWithCode code={`<Flex $gap="8px" $align="center">
  <Box p="12px 20px" bg={theme.colors.muted} radius={theme.radii.md}>
    <Text size={theme.typography.fontSize.sm}>Item 1</Text>
  </Box>
</Flex>

<Flex $justify="space-between" $align="center">
  <Text>Left</Text>
  <Text>Center</Text>
  <Text>Right</Text>
</Flex>`}>
        <Stack $spacing="16px">
          <Flex $gap="8px" $align="center">
            {[1, 2, 3].map((i) => (
              <Box key={i} p="12px 20px" bg={theme.colors.muted} radius={theme.radii.md}>
                <Text size={theme.typography.fontSize.sm}>Item {i}</Text>
              </Box>
            ))}
          </Flex>
          <Flex $justify="space-between" $align="center">
            <Text size={theme.typography.fontSize.sm}>Left</Text>
            <Text size={theme.typography.fontSize.sm}>Center</Text>
            <Text size={theme.typography.fontSize.sm}>Right</Text>
          </Flex>
        </Stack>
      </DemoWithCode>

      <SubTitle>Grid</SubTitle>
      <DemoWithCode code={`<Grid $columns={3} $gap="12px">
  <Box p={theme.spacing[4]} bg={theme.colors.muted} radius={theme.radii.md}>
    <Text size={theme.typography.fontSize.sm} align="center">Cell 1</Text>
  </Box>
</Grid>`}>
        <Grid $columns={3} $gap="12px">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Box key={i} p={theme.spacing[4]} bg={theme.colors.muted} radius={theme.radii.md}>
              <Text size={theme.typography.fontSize.sm} align="center" style={{ display: 'block' }}>Cell {i}</Text>
            </Box>
          ))}
        </Grid>
      </DemoWithCode>

      <SubTitle>Stack</SubTitle>
      <DemoWithCode code={`<Stack $spacing="8px">
  <Box p="10px 16px" bg={theme.colors.muted} radius={theme.radii.md}>
    <Text size={theme.typography.fontSize.sm}>First item</Text>
  </Box>
</Stack>`}>
        <Stack $spacing="8px">
          {['First', 'Second', 'Third'].map((label) => (
            <Box key={label} p="10px 16px" bg={theme.colors.muted} radius={theme.radii.md}>
              <Text size={theme.typography.fontSize.sm}>{label} item</Text>
            </Box>
          ))}
        </Stack>
      </DemoWithCode>

      <SubTitle>Divider</SubTitle>
      <DemoWithCode code={`<Stack $spacing="12px">
  <Text>Content above</Text>
  <Divider />
  <Text>Content below</Text>
  <Flex $gap="12px" $align="center">
    <Text>Left</Text>
    <Divider $orientation="vertical" />
    <Text>Right</Text>
  </Flex>
</Stack>`}>
        <Stack $spacing="12px">
          <Text size={theme.typography.fontSize.sm}>Content above</Text>
          <Divider />
          <Text size={theme.typography.fontSize.sm}>Content below</Text>
          <Flex $gap="12px" $align="center" style={{ height: '40px' }}>
            <Text size={theme.typography.fontSize.sm}>Left</Text>
            <Divider $orientation="vertical" />
            <Text size={theme.typography.fontSize.sm}>Right</Text>
          </Flex>
        </Stack>
      </DemoWithCode>
    </Section>
  );
}
