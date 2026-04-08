import { useState } from 'react';
import {
  useTheme, RoundedIcon, Flex, Stack, Grid, Text, Input,
  // Navigation & Arrows
  HiArrowUp, HiArrowDown, HiArrowLeft, HiArrowRight, HiArrowUpRight,
  HiChevronUp, HiChevronDown, HiChevronLeft, HiChevronRight, HiArrowPath, HiArrowTopRightOnSquare,
  // Actions
  HiPlus, HiMinus, HiXMark, HiCheck, HiMagnifyingGlass, HiEllipsisHorizontal,
  HiBars3, HiAdjustmentsHorizontal, HiFunnel,
  // Communication
  HiChatBubbleLeft, HiEnvelope, HiPhone, HiBell, HiBellAlert, HiPaperAirplane, HiInbox,
  // Media & Files
  HiPhoto, HiCamera, HiMicrophone, HiDocument, HiDocumentText, HiFolder, HiFolderOpen,
  HiClipboard, HiPaperClip,
  // Users
  HiUser, HiUserPlus, HiUserGroup, HiUserCircle, HiUsers, HiFingerPrint,
  // Commerce
  HiShoppingCart, HiShoppingBag, HiCreditCard, HiBanknotes, HiCurrencyDollar, HiGift, HiTag,
  // Status
  HiCheckCircle, HiXCircle, HiExclamationCircle, HiExclamationTriangle,
  HiInformationCircle, HiShieldCheck, HiCheckBadge,
  // Data
  HiChartBar, HiChartPie, HiTableCells, HiCircleStack, HiCalculator, HiHashtag,
  // Dev
  HiCodeBracket, HiCommandLine, HiCpuChip, HiServerStack, HiCloud, HiBugAnt,
  HiWrench, HiCog6Tooth,
  // Layout
  HiSquares2X2, HiRectangleGroup, HiSparkles, HiStar, HiHeart, HiFire, HiBolt, HiPaintBrush,
  // Text
  HiPencil, HiPencilSquare, HiBookOpen, HiBookmark, HiLink, HiAtSymbol,
  // Location
  HiMapPin, HiGlobeAlt, HiHome, HiBuildingOffice, HiAcademicCap,
  // Time
  HiClock, HiCalendar, HiCalendarDays,
  // Security
  HiLockClosed, HiLockOpen, HiKey, HiEye, HiEyeSlash,
  // Device
  HiComputerDesktop, HiDevicePhoneMobile, HiWifi, HiSun, HiMoon,
  // Social (Feather)
  FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiFigma, FiDribbble,
  FiTerminal, FiPackage, FiLayers, FiZap, FiActivity, FiTrendingUp,
  FiCoffee, FiFeather, FiCompass, FiDroplet,
  // Brands (Simple Icons)
  SiReact, SiTypescript, SiNextdotjs, SiVite, SiTailwindcss, SiVercel,
  SiDocker, SiGit, SiNpm, SiPython, SiRust, SiGo,
  SiFirebase, SiSupabase, SiGraphql, SiPostgresql, SiMongodb, SiRedis, SiStripe,
  SiFigma, SiStorybook, SiVitest, SiEslint, SiPrettier,
  SiGithub, SiSlack, SiDiscord, SiSpotify, SiOpenai, SiAnthropic,
} from 'calangoui';
import { Section, SectionTitle, SectionDesc, SubTitle, DemoWithCode } from './DocSection';
import styled from 'styled-components';

const IconCard = styled.div<{ $highlight?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 8px;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: default;
  transition: background 0.15s ease;
  background: ${({ $highlight, theme }) => ($highlight ? theme.colors.accent : 'transparent')};
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const IconName = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  text-align: center;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const allIcons = [
  // Navigation
  { name: 'ArrowUp', icon: <HiArrowUp />, cat: 'nav' },
  { name: 'ArrowDown', icon: <HiArrowDown />, cat: 'nav' },
  { name: 'ArrowLeft', icon: <HiArrowLeft />, cat: 'nav' },
  { name: 'ArrowRight', icon: <HiArrowRight />, cat: 'nav' },
  { name: 'ArrowUpRight', icon: <HiArrowUpRight />, cat: 'nav' },
  { name: 'ChevronUp', icon: <HiChevronUp />, cat: 'nav' },
  { name: 'ChevronDown', icon: <HiChevronDown />, cat: 'nav' },
  { name: 'ChevronLeft', icon: <HiChevronLeft />, cat: 'nav' },
  { name: 'ChevronRight', icon: <HiChevronRight />, cat: 'nav' },
  { name: 'Refresh', icon: <HiArrowPath />, cat: 'nav' },
  { name: 'ExternalLink', icon: <HiArrowTopRightOnSquare />, cat: 'nav' },
  // Actions
  { name: 'Plus', icon: <HiPlus />, cat: 'action' },
  { name: 'Minus', icon: <HiMinus />, cat: 'action' },
  { name: 'Close', icon: <HiXMark />, cat: 'action' },
  { name: 'Check', icon: <HiCheck />, cat: 'action' },
  { name: 'Search', icon: <HiMagnifyingGlass />, cat: 'action' },
  { name: 'More', icon: <HiEllipsisHorizontal />, cat: 'action' },
  { name: 'Menu', icon: <HiBars3 />, cat: 'action' },
  { name: 'Settings', icon: <HiAdjustmentsHorizontal />, cat: 'action' },
  { name: 'Filter', icon: <HiFunnel />, cat: 'action' },
  // Communication
  { name: 'Chat', icon: <HiChatBubbleLeft />, cat: 'comm' },
  { name: 'Email', icon: <HiEnvelope />, cat: 'comm' },
  { name: 'Phone', icon: <HiPhone />, cat: 'comm' },
  { name: 'Bell', icon: <HiBell />, cat: 'comm' },
  { name: 'BellAlert', icon: <HiBellAlert />, cat: 'comm' },
  { name: 'Send', icon: <HiPaperAirplane />, cat: 'comm' },
  { name: 'Inbox', icon: <HiInbox />, cat: 'comm' },
  // Files
  { name: 'Photo', icon: <HiPhoto />, cat: 'files' },
  { name: 'Camera', icon: <HiCamera />, cat: 'files' },
  { name: 'Mic', icon: <HiMicrophone />, cat: 'files' },
  { name: 'Doc', icon: <HiDocument />, cat: 'files' },
  { name: 'DocText', icon: <HiDocumentText />, cat: 'files' },
  { name: 'Folder', icon: <HiFolder />, cat: 'files' },
  { name: 'FolderOpen', icon: <HiFolderOpen />, cat: 'files' },
  { name: 'Clipboard', icon: <HiClipboard />, cat: 'files' },
  { name: 'Attach', icon: <HiPaperClip />, cat: 'files' },
  // Users
  { name: 'User', icon: <HiUser />, cat: 'user' },
  { name: 'UserAdd', icon: <HiUserPlus />, cat: 'user' },
  { name: 'Group', icon: <HiUserGroup />, cat: 'user' },
  { name: 'Avatar', icon: <HiUserCircle />, cat: 'user' },
  { name: 'Users', icon: <HiUsers />, cat: 'user' },
  { name: 'Fingerprint', icon: <HiFingerPrint />, cat: 'user' },
  // Commerce
  { name: 'Cart', icon: <HiShoppingCart />, cat: 'commerce' },
  { name: 'Bag', icon: <HiShoppingBag />, cat: 'commerce' },
  { name: 'Card', icon: <HiCreditCard />, cat: 'commerce' },
  { name: 'Money', icon: <HiBanknotes />, cat: 'commerce' },
  { name: 'Dollar', icon: <HiCurrencyDollar />, cat: 'commerce' },
  { name: 'Gift', icon: <HiGift />, cat: 'commerce' },
  { name: 'Tag', icon: <HiTag />, cat: 'commerce' },
  // Status
  { name: 'Success', icon: <HiCheckCircle />, cat: 'status' },
  { name: 'Error', icon: <HiXCircle />, cat: 'status' },
  { name: 'Warning', icon: <HiExclamationTriangle />, cat: 'status' },
  { name: 'Info', icon: <HiInformationCircle />, cat: 'status' },
  { name: 'Alert', icon: <HiExclamationCircle />, cat: 'status' },
  { name: 'Shield', icon: <HiShieldCheck />, cat: 'status' },
  { name: 'Verified', icon: <HiCheckBadge />, cat: 'status' },
  // Data
  { name: 'BarChart', icon: <HiChartBar />, cat: 'data' },
  { name: 'PieChart', icon: <HiChartPie />, cat: 'data' },
  { name: 'Table', icon: <HiTableCells />, cat: 'data' },
  { name: 'Database', icon: <HiCircleStack />, cat: 'data' },
  { name: 'Calc', icon: <HiCalculator />, cat: 'data' },
  { name: 'Hash', icon: <HiHashtag />, cat: 'data' },
  // Dev
  { name: 'Code', icon: <HiCodeBracket />, cat: 'dev' },
  { name: 'Terminal', icon: <HiCommandLine />, cat: 'dev' },
  { name: 'Chip', icon: <HiCpuChip />, cat: 'dev' },
  { name: 'Server', icon: <HiServerStack />, cat: 'dev' },
  { name: 'Cloud', icon: <HiCloud />, cat: 'dev' },
  { name: 'Bug', icon: <HiBugAnt />, cat: 'dev' },
  { name: 'Wrench', icon: <HiWrench />, cat: 'dev' },
  { name: 'Cog', icon: <HiCog6Tooth />, cat: 'dev' },
  // Design
  { name: 'Grid', icon: <HiSquares2X2 />, cat: 'design' },
  { name: 'Layout', icon: <HiRectangleGroup />, cat: 'design' },
  { name: 'Sparkles', icon: <HiSparkles />, cat: 'design' },
  { name: 'Star', icon: <HiStar />, cat: 'design' },
  { name: 'Heart', icon: <HiHeart />, cat: 'design' },
  { name: 'Fire', icon: <HiFire />, cat: 'design' },
  { name: 'Bolt', icon: <HiBolt />, cat: 'design' },
  { name: 'Paint', icon: <HiPaintBrush />, cat: 'design' },
  // Text
  { name: 'Edit', icon: <HiPencil />, cat: 'text' },
  { name: 'EditBox', icon: <HiPencilSquare />, cat: 'text' },
  { name: 'Book', icon: <HiBookOpen />, cat: 'text' },
  { name: 'Bookmark', icon: <HiBookmark />, cat: 'text' },
  { name: 'Link', icon: <HiLink />, cat: 'text' },
  { name: 'At', icon: <HiAtSymbol />, cat: 'text' },
  // Location
  { name: 'Pin', icon: <HiMapPin />, cat: 'location' },
  { name: 'Globe', icon: <HiGlobeAlt />, cat: 'location' },
  { name: 'Home', icon: <HiHome />, cat: 'location' },
  { name: 'Office', icon: <HiBuildingOffice />, cat: 'location' },
  { name: 'Academic', icon: <HiAcademicCap />, cat: 'location' },
  // Time
  { name: 'Clock', icon: <HiClock />, cat: 'time' },
  { name: 'Calendar', icon: <HiCalendar />, cat: 'time' },
  { name: 'CalDays', icon: <HiCalendarDays />, cat: 'time' },
  // Security
  { name: 'Lock', icon: <HiLockClosed />, cat: 'security' },
  { name: 'Unlock', icon: <HiLockOpen />, cat: 'security' },
  { name: 'Key', icon: <HiKey />, cat: 'security' },
  { name: 'Eye', icon: <HiEye />, cat: 'security' },
  { name: 'EyeOff', icon: <HiEyeSlash />, cat: 'security' },
  // Device
  { name: 'Desktop', icon: <HiComputerDesktop />, cat: 'device' },
  { name: 'Mobile', icon: <HiDevicePhoneMobile />, cat: 'device' },
  { name: 'Wifi', icon: <HiWifi />, cat: 'device' },
  { name: 'Sun', icon: <HiSun />, cat: 'device' },
  { name: 'Moon', icon: <HiMoon />, cat: 'device' },
];

const socialIcons = [
  { name: 'GitHub', icon: <FiGithub /> },
  { name: 'Twitter', icon: <FiTwitter /> },
  { name: 'LinkedIn', icon: <FiLinkedin /> },
  { name: 'Instagram', icon: <FiInstagram /> },
  { name: 'Figma', icon: <FiFigma /> },
  { name: 'Dribbble', icon: <FiDribbble /> },
  { name: 'Terminal', icon: <FiTerminal /> },
  { name: 'Package', icon: <FiPackage /> },
  { name: 'Layers', icon: <FiLayers /> },
  { name: 'Zap', icon: <FiZap /> },
  { name: 'Activity', icon: <FiActivity /> },
  { name: 'Trending', icon: <FiTrendingUp /> },
  { name: 'Coffee', icon: <FiCoffee /> },
  { name: 'Feather', icon: <FiFeather /> },
  { name: 'Compass', icon: <FiCompass /> },
  { name: 'Droplet', icon: <FiDroplet /> },
];

const brandIcons = [
  { name: 'React', icon: <SiReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'npm', icon: <SiNpm /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Rust', icon: <SiRust /> },
  { name: 'Go', icon: <SiGo /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Supabase', icon: <SiSupabase /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'Postgres', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Redis', icon: <SiRedis /> },
  { name: 'Stripe', icon: <SiStripe /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Storybook', icon: <SiStorybook /> },
  { name: 'Vitest', icon: <SiVitest /> },
  { name: 'ESLint', icon: <SiEslint /> },
  { name: 'Prettier', icon: <SiPrettier /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'Slack', icon: <SiSlack /> },
  { name: 'Discord', icon: <SiDiscord /> },
  { name: 'Spotify', icon: <SiSpotify /> },
  { name: 'OpenAI', icon: <SiOpenai /> },
  { name: 'Anthropic', icon: <SiAnthropic /> },
];

export function IconsSection() {
  const { theme } = useTheme();
  const [search, setSearch] = useState('');

  const filtered = allIcons.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Section id="icons">
      <SectionTitle>Icons & RoundedIcon</SectionTitle>
      <SectionDesc>
        200+ icones curados do react-icons (Heroicons, Feather, Simple Icons) + componente RoundedIcon
        para icones com fundo estilizado.
      </SectionDesc>

      <SubTitle>RoundedIcon — Variants</SubTitle>
      <DemoWithCode code={`<RoundedIcon icon={<HiSparkles />} variant="solid" size="lg" />
<RoundedIcon icon={<HiSparkles />} variant="soft" size="lg" />
<RoundedIcon icon={<HiSparkles />} variant="outline" size="lg" />
<RoundedIcon icon={<HiSparkles />} variant="ghost" size="lg" />`}>
        <Stack $spacing="20px">
          <Flex $gap="16px" $align="center" $wrap="wrap">
            <Stack $spacing="4px" $align="center">
              <RoundedIcon icon={<HiSparkles />} variant="solid" size="lg" />
              <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>solid</Text>
            </Stack>
            <Stack $spacing="4px" $align="center">
              <RoundedIcon icon={<HiSparkles />} variant="soft" size="lg" />
              <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>soft</Text>
            </Stack>
            <Stack $spacing="4px" $align="center">
              <RoundedIcon icon={<HiSparkles />} variant="outline" size="lg" />
              <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>outline</Text>
            </Stack>
            <Stack $spacing="4px" $align="center">
              <RoundedIcon icon={<HiSparkles />} variant="ghost" size="lg" />
              <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>ghost</Text>
            </Stack>
          </Flex>
        </Stack>
      </DemoWithCode>

      <SubTitle>RoundedIcon — Sizes</SubTitle>
      <DemoWithCode code={`// Sizes: xs, sm, md, lg, xl, 2xl
<RoundedIcon icon={<HiBolt />} size="xs" variant="soft" />
<RoundedIcon icon={<HiBolt />} size="md" variant="soft" />
<RoundedIcon icon={<HiBolt />} size="2xl" variant="soft" />`}>
        <Flex $gap="12px" $align="center" $wrap="wrap">
          {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(sz => (
            <Stack key={sz} $spacing="4px" $align="center">
              <RoundedIcon icon={<HiBolt />} size={sz} variant="soft" />
              <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>{sz}</Text>
            </Stack>
          ))}
        </Flex>
      </DemoWithCode>

      <SubTitle>RoundedIcon — Colors</SubTitle>
      <DemoWithCode code={`<RoundedIcon icon={<HiCheckCircle />} variant="soft" color={theme.colors.success.DEFAULT} size="lg" />
<RoundedIcon icon={<HiXCircle />} variant="soft" color={theme.colors.error.DEFAULT} size="lg" />
<RoundedIcon icon={<SiReact />} variant="solid" color="#61DAFB" size="lg" />`}>
        <Flex $gap="12px" $align="center" $wrap="wrap">
          <RoundedIcon icon={<HiCheckCircle />} variant="soft" color={theme.colors.success.DEFAULT} size="lg" />
          <RoundedIcon icon={<HiXCircle />} variant="soft" color={theme.colors.error.DEFAULT} size="lg" />
          <RoundedIcon icon={<HiExclamationTriangle />} variant="soft" color={theme.colors.warning.DEFAULT} size="lg" />
          <RoundedIcon icon={<HiInformationCircle />} variant="soft" color={theme.colors.info.DEFAULT} size="lg" />
          <RoundedIcon icon={<HiHeart />} variant="solid" color="#E91E63" size="lg" />
          <RoundedIcon icon={<SiReact />} variant="solid" color="#61DAFB" size="lg" />
          <RoundedIcon icon={<SiTypescript />} variant="solid" color="#3178C6" size="lg" />
        </Flex>
      </DemoWithCode>

      <SubTitle>RoundedIcon — Border Radius</SubTitle>
      <DemoWithCode code={`// Radius: sm, md, lg, full
<RoundedIcon icon={<HiCog6Tooth />} variant="soft" size="lg" radius="sm" />
<RoundedIcon icon={<HiCog6Tooth />} variant="soft" size="lg" radius="full" />`}>
        <Flex $gap="12px" $align="center">
          {(['sm', 'md', 'lg', 'full'] as const).map(r => (
            <Stack key={r} $spacing="4px" $align="center">
              <RoundedIcon icon={<HiCog6Tooth />} variant="soft" size="lg" radius={r} />
              <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>{r}</Text>
            </Stack>
          ))}
        </Flex>
      </DemoWithCode>

      <SubTitle>RoundedIcon — Use Cases</SubTitle>
      <DemoWithCode code={`<Flex $gap="12px" $align="center">
  <RoundedIcon icon={<HiEnvelope />} variant="soft" color={theme.colors.info.DEFAULT} />
  <Stack $spacing="2px">
    <Text weight={theme.typography.fontWeight.medium}>Email notifications</Text>
    <Text color={theme.colors.mutedForeground}>Receive updates via email</Text>
  </Stack>
</Flex>`}>
        <Stack $spacing="16px">
          <Flex $gap="12px" $align="center">
            <RoundedIcon icon={<HiEnvelope />} variant="soft" color={theme.colors.info.DEFAULT} />
            <Stack $spacing="2px">
              <Text size={theme.typography.fontSize.sm} weight={theme.typography.fontWeight.medium}>Email notifications</Text>
              <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>Receive updates via email</Text>
            </Stack>
          </Flex>
          <Flex $gap="12px" $align="center">
            <RoundedIcon icon={<HiShieldCheck />} variant="soft" color={theme.colors.success.DEFAULT} />
            <Stack $spacing="2px">
              <Text size={theme.typography.fontSize.sm} weight={theme.typography.fontWeight.medium}>Two-factor authentication</Text>
              <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>Secure your account</Text>
            </Stack>
          </Flex>
          <Flex $gap="12px" $align="center">
            <RoundedIcon icon={<HiCreditCard />} variant="soft" color={theme.colors.warning.DEFAULT} />
            <Stack $spacing="2px">
              <Text size={theme.typography.fontSize.sm} weight={theme.typography.fontWeight.medium}>Payment methods</Text>
              <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>Manage your billing</Text>
            </Stack>
          </Flex>
        </Stack>
      </DemoWithCode>

      <SubTitle>UI Icons (Heroicons) — {filtered.length} icons</SubTitle>
      <DemoWithCode code={`import { HiSparkles, HiCheck, HiArrowRight } from 'calangoui';

<HiSparkles size={24} />
<HiCheck size={20} />
<HiArrowRight size={16} />`}>
        <div style={{ marginBottom: '16px', maxWidth: '300px' }}>
          <Input
            placeholder="Search icons..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            size="sm"
          />
        </div>
        <Grid $columns="repeat(auto-fill, minmax(80px, 1fr))" $gap="4px">
          {filtered.map(({ name, icon }) => (
            <IconCard key={name}>
              <span style={{ fontSize: '20px', color: theme.colors.foreground }}>{icon}</span>
              <IconName>{name}</IconName>
            </IconCard>
          ))}
        </Grid>
      </DemoWithCode>

      <SubTitle>Social & Utility (Feather Icons)</SubTitle>
      <DemoWithCode code={`import { FiGithub, FiTwitter, FiLinkedin } from 'calangoui';

<FiGithub size={20} />
<FiTwitter size={20} />`}>
        <Grid $columns="repeat(auto-fill, minmax(80px, 1fr))" $gap="4px">
          {socialIcons.map(({ name, icon }) => (
            <IconCard key={name}>
              <span style={{ fontSize: '20px', color: theme.colors.foreground }}>{icon}</span>
              <IconName>{name}</IconName>
            </IconCard>
          ))}
        </Grid>
      </DemoWithCode>

      <SubTitle>Brand Logos (Simple Icons)</SubTitle>
      <DemoWithCode code={`import { SiReact, SiTypescript, SiNextdotjs } from 'calangoui';

<SiReact size={20} />
<SiTypescript size={16} />`}>
        <Grid $columns="repeat(auto-fill, minmax(80px, 1fr))" $gap="4px">
          {brandIcons.map(({ name, icon }) => (
            <IconCard key={name}>
              <span style={{ fontSize: '20px', color: theme.colors.foreground }}>{icon}</span>
              <IconName>{name}</IconName>
            </IconCard>
          ))}
        </Grid>
      </DemoWithCode>
    </Section>
  );
}
