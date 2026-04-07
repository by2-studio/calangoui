import { useTheme, Badge, Alert, AlertTitle, Progress, Spinner, Skeleton, Flex, Stack, Text } from 'calangoui';
import { Section, SectionTitle, SectionDesc, SubTitle, DemoWithCode } from './DocSection';

export function FeedbackSection() {
  const { theme } = useTheme();

  return (
    <Section id="feedback">
      <SectionTitle>Feedback Components</SectionTitle>
      <SectionDesc>
        Componentes de feedback visual. Badge, Alert, Progress, Spinner, Skeleton.
      </SectionDesc>

      <SubTitle>Badge</SubTitle>
      <DemoWithCode code={`<Badge>Default</Badge>
<Badge colorScheme="success">Success</Badge>
<Badge colorScheme="error">Error</Badge>
<Badge colorScheme="warning">Warning</Badge>
<Badge colorScheme="info">Info</Badge>

<Badge variant="outline" colorScheme="success">Outline</Badge>
<Badge variant="soft" colorScheme="info">Soft</Badge>
<Badge size="sm">Small</Badge>
<Badge dot>With dot</Badge>`}>
        <Stack $spacing="12px">
          <Flex $gap="8px" $wrap="wrap" $align="center">
            <Badge>Default</Badge>
            <Badge colorScheme="success">Success</Badge>
            <Badge colorScheme="error">Error</Badge>
            <Badge colorScheme="warning">Warning</Badge>
            <Badge colorScheme="info">Info</Badge>
          </Flex>
          <Flex $gap="8px" $wrap="wrap" $align="center">
            <Badge variant="outline" colorScheme="success">Outline</Badge>
            <Badge variant="soft" colorScheme="info">Soft</Badge>
            <Badge size="sm">Small</Badge>
            <Badge dot>With dot</Badge>
          </Flex>
        </Stack>
      </DemoWithCode>

      <SubTitle>Alert</SubTitle>
      <DemoWithCode code={`<Alert variant="info">
  <div>
    <AlertTitle>Info</AlertTitle>
    Your account has been updated successfully.
  </div>
</Alert>

<Alert variant="warning" closable>
  <div>
    <AlertTitle>Warning</AlertTitle>
    Your subscription expires in 3 days.
  </div>
</Alert>`}>
        <Stack $spacing="12px">
          <Alert variant="info">
            <div>
              <AlertTitle>Info</AlertTitle>
              Your account has been updated successfully.
            </div>
          </Alert>
          <Alert variant="success">
            <div>
              <AlertTitle>Success</AlertTitle>
              Changes have been saved.
            </div>
          </Alert>
          <Alert variant="warning" closable>
            <div>
              <AlertTitle>Warning</AlertTitle>
              Your subscription expires in 3 days.
            </div>
          </Alert>
          <Alert variant="error">
            <div>
              <AlertTitle>Error</AlertTitle>
              Failed to process payment. Please try again.
            </div>
          </Alert>
        </Stack>
      </DemoWithCode>

      <SubTitle>Progress</SubTitle>
      <DemoWithCode code={`<Progress value={25} size="sm" />
<Progress value={60} />
<Progress value={90} size="lg" />
<Progress indeterminate />`}>
        <Stack $spacing="16px" style={{ maxWidth: '400px' }}>
          <Stack $spacing="4px">
            <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>25%</Text>
            <Progress value={25} size="sm" />
          </Stack>
          <Stack $spacing="4px">
            <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>60%</Text>
            <Progress value={60} />
          </Stack>
          <Stack $spacing="4px">
            <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>90%</Text>
            <Progress value={90} size="lg" />
          </Stack>
          <Stack $spacing="4px">
            <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>Indeterminate</Text>
            <Progress indeterminate />
          </Stack>
        </Stack>
      </DemoWithCode>

      <SubTitle>Spinner</SubTitle>
      <DemoWithCode code={`<Spinner $size="sm" />
<Spinner $size="md" />
<Spinner $size="lg" />
<Spinner $size="xl" />`}>
        <Flex $gap="16px" $align="center">
          <Spinner $size="sm" />
          <Spinner $size="md" />
          <Spinner $size="lg" />
          <Spinner $size="xl" />
        </Flex>
      </DemoWithCode>

      <SubTitle>Skeleton</SubTitle>
      <DemoWithCode code={`<Flex $gap="12px" $align="flex-start">
  <Skeleton $w={48} $h={48} $radius={theme.radii.full} />
  <Stack $spacing="8px" style={{ flex: 1 }}>
    <Skeleton $w="60%" $h={16} />
    <Skeleton $w="80%" $h={12} />
    <Skeleton $w="40%" $h={12} />
  </Stack>
</Flex>`}>
        <Flex $gap="12px" $align="flex-start">
          <Skeleton $w={48} $h={48} $radius={theme.radii.full} />
          <Stack $spacing="8px" style={{ flex: 1 }}>
            <Skeleton $w="60%" $h={16} />
            <Skeleton $w="80%" $h={12} />
            <Skeleton $w="40%" $h={12} />
          </Stack>
        </Flex>
      </DemoWithCode>
    </Section>
  );
}
