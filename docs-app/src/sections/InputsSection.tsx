import { useState } from 'react';
import {
  useTheme, Button, Input, Textarea, InputGroup, Label,
  Checkbox, RadioGroup, Switch, Slider, Select, MaskedInput, DatePicker,
  SearchBar, Flex, Stack, Text
} from 'calangoui';
import { Section, SectionTitle, SectionDesc, SubTitle, DemoWithCode } from './DocSection';

export function InputsSection() {
  const { theme } = useTheme();
  const [switchOn, setSwitchOn] = useState(false);
  const [sliderVal, setSliderVal] = useState([50]);
  const [checkVal, setCheckVal] = useState<boolean | 'indeterminate'>(true);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [rangeDate, setRangeDate] = useState<Date | undefined>(undefined);
  const [searchVal, setSearchVal] = useState('');

  return (
    <Section id="inputs">
      <SectionTitle>Input Components</SectionTitle>
      <SectionDesc>
        Formularios e entrada de dados. Button, Input, Select, Checkbox, Radio, Switch, Slider.
        Todos com Radix UI para acessibilidade.
      </SectionDesc>

      <SubTitle>Button</SubTitle>
      <DemoWithCode code={`<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

<Button loading>Loading</Button>
<Button disabled>Disabled</Button>`}>
        <Stack $spacing="16px">
          <Flex $gap="8px" $wrap="wrap" $align="center">
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </Flex>
          <Flex $gap="8px" $align="center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Flex>
          <Flex $gap="8px" $align="center">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </Flex>
        </Stack>
      </DemoWithCode>

      <SubTitle>Input</SubTitle>
      <DemoWithCode code={`<InputGroup>
  <Label>Email</Label>
  <Input placeholder="you@example.com" />
</InputGroup>

<InputGroup>
  <Label>With error</Label>
  <Input error="This field is required" placeholder="Required field" />
</InputGroup>`}>
        <Stack $spacing="16px" style={{ maxWidth: '400px' }}>
          <InputGroup>
            <Label>Email</Label>
            <Input placeholder="you@example.com" />
          </InputGroup>
          <InputGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter password" size="sm" />
          </InputGroup>
          <InputGroup>
            <Label>With error</Label>
            <Input error="This field is required" placeholder="Required field" />
          </InputGroup>
          <InputGroup>
            <Label>Disabled</Label>
            <Input disabled placeholder="Cannot edit" />
          </InputGroup>
        </Stack>
      </DemoWithCode>

      <SubTitle>Textarea</SubTitle>
      <DemoWithCode code={`<InputGroup>
  <Label>Message</Label>
  <Textarea placeholder="Write something..." />
</InputGroup>

<Textarea error="Content is too short" placeholder="Invalid content" />`}>
        <Stack $spacing="12px" style={{ maxWidth: '400px' }}>
          <InputGroup>
            <Label>Message</Label>
            <Textarea placeholder="Write something..." />
          </InputGroup>
          <InputGroup>
            <Label>Error state</Label>
            <Textarea error="Content is too short" placeholder="Invalid content" />
          </InputGroup>
        </Stack>
      </DemoWithCode>

      <SubTitle>Select (Radix)</SubTitle>
      <DemoWithCode code={`<Select.Root>
  <Select.Trigger>
    <Select.Value placeholder="Select a framework..." />
    <Select.Icon> ▾</Select.Icon>
  </Select.Trigger>
  <Select.Portal>
    <Select.Content position="popper" sideOffset={4}>
      <Select.Viewport>
        <Select.Group>
          <Select.Label>Frontend</Select.Label>
          <Select.Item value="react"><Select.ItemText>React</Select.ItemText></Select.Item>
        </Select.Group>
      </Select.Viewport>
    </Select.Content>
  </Select.Portal>
</Select.Root>`}>
        <div style={{ maxWidth: '300px' }}>
          <InputGroup>
            <Label>Framework</Label>
            <Select.Root>
              <Select.Trigger>
                <Select.Value placeholder="Select a framework..." />
                <Select.Icon> ▾</Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content position="popper" sideOffset={4}>
                  <Select.Viewport>
                    <Select.Group>
                      <Select.Label>Frontend</Select.Label>
                      <Select.Item value="react"><Select.ItemText>React</Select.ItemText></Select.Item>
                      <Select.Item value="vue"><Select.ItemText>Vue</Select.ItemText></Select.Item>
                      <Select.Item value="svelte"><Select.ItemText>Svelte</Select.ItemText></Select.Item>
                    </Select.Group>
                    <Select.Separator />
                    <Select.Group>
                      <Select.Label>Backend</Select.Label>
                      <Select.Item value="node"><Select.ItemText>Node.js</Select.ItemText></Select.Item>
                      <Select.Item value="deno"><Select.ItemText>Deno</Select.ItemText></Select.Item>
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </InputGroup>
        </div>
      </DemoWithCode>

      <SubTitle>Checkbox & Radio (Radix)</SubTitle>
      <DemoWithCode code={`<Checkbox checked={val} onCheckedChange={setVal} />

<RadioGroup.Root defaultValue="pro">
  <RadioGroup.Item value="free">
    <RadioGroup.Indicator />
  </RadioGroup.Item>
</RadioGroup.Root>`}>
        <Flex $gap="32px" $wrap="wrap">
          <Stack $spacing="10px">
            <Text size={theme.typography.fontSize.sm} weight={theme.typography.fontWeight.medium}>Preferences</Text>
            {['Dark mode', 'Notifications', 'Analytics'].map((label, i) => (
              <Flex key={label} $gap="8px" $align="center">
                <Checkbox
                  checked={i === 0 ? checkVal : undefined}
                  defaultChecked={i === 0}
                  onCheckedChange={i === 0 ? (v) => setCheckVal(v) : undefined}
                />
                <Text size={theme.typography.fontSize.sm}>{label}</Text>
              </Flex>
            ))}
          </Stack>
          <Stack $spacing="10px">
            <Text size={theme.typography.fontSize.sm} weight={theme.typography.fontWeight.medium}>Plan</Text>
            <RadioGroup.Root defaultValue="pro">
              {['free', 'pro', 'enterprise'].map((val) => (
                <Flex key={val} $gap="8px" $align="center">
                  <RadioGroup.Item value={val}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text size={theme.typography.fontSize.sm} style={{ textTransform: 'capitalize' }}>{val}</Text>
                </Flex>
              ))}
            </RadioGroup.Root>
          </Stack>
        </Flex>
      </DemoWithCode>

      <SubTitle>Switch (Radix)</SubTitle>
      <DemoWithCode code={`<Switch checked={switchOn} onCheckedChange={setSwitchOn} />
<Switch defaultChecked size="sm" />`}>
        <Flex $gap="24px" $align="center">
          <Flex $gap="8px" $align="center">
            <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
            <Text size={theme.typography.fontSize.sm}>{switchOn ? 'On' : 'Off'}</Text>
          </Flex>
          <Flex $gap="8px" $align="center">
            <Switch defaultChecked size="sm" />
            <Text size={theme.typography.fontSize.sm}>Small</Text>
          </Flex>
        </Flex>
      </DemoWithCode>

      <SubTitle>Slider (Radix)</SubTitle>
      <DemoWithCode code={`<Slider value={sliderVal} onValueChange={setSliderVal} max={100} step={1} />`}>
        <Stack $spacing="8px" style={{ maxWidth: '300px' }}>
          <Flex $justify="space-between">
            <Text size={theme.typography.fontSize.sm}>Volume</Text>
            <Text size={theme.typography.fontSize.sm} mono>{sliderVal[0]}%</Text>
          </Flex>
          <Slider value={sliderVal} onValueChange={setSliderVal} max={100} step={1} />
        </Stack>
      </DemoWithCode>

      <SubTitle>DatePicker</SubTitle>
      <DemoWithCode code={`const [date, setDate] = useState<Date>();

<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Pick a date"
/>

// With min/max constraints
<DatePicker
  value={date}
  onChange={setDate}
  min={new Date(2024, 0, 1)}
  max={new Date(2026, 11, 31)}
/>`}>
        <Stack $spacing="16px" style={{ maxWidth: '400px' }}>
          <InputGroup>
            <Label>Date</Label>
            <DatePicker
              value={selectedDate}
              onChange={setSelectedDate}
              placeholder="Pick a date"
            />
          </InputGroup>
          <InputGroup>
            <Label>With constraints (2025-2026)</Label>
            <DatePicker
              value={rangeDate}
              onChange={setRangeDate}
              min={new Date(2025, 0, 1)}
              max={new Date(2026, 11, 31)}
              placeholder="Select within range"
            />
          </InputGroup>
          {selectedDate && (
            <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>
              Selected: {selectedDate.toLocaleDateString('pt-BR')}
            </Text>
          )}
        </Stack>
      </DemoWithCode>

      <SubTitle>MaskedInput — Input Masks</SubTitle>
      <DemoWithCode code={`<MaskedInput mask="cpf" />
<MaskedInput mask="cnpj" />
<MaskedInput mask="cellphone" />
<MaskedInput mask="cep" />
<MaskedInput mask="currency" />
<MaskedInput mask="creditcard" />
<MaskedInput mask="date" />

// Presets: cpf, cnpj, phone, cellphone, cep, date, time, currency, creditcard
// Custom: mask="99/99" (9 = digit)`}>
        <Stack $spacing="16px" style={{ maxWidth: '400px' }}>
          <InputGroup>
            <Label>CPF</Label>
            <MaskedInput mask="cpf" />
          </InputGroup>
          <InputGroup>
            <Label>CNPJ</Label>
            <MaskedInput mask="cnpj" />
          </InputGroup>
          <InputGroup>
            <Label>Celular</Label>
            <MaskedInput mask="cellphone" />
          </InputGroup>
          <InputGroup>
            <Label>Telefone fixo</Label>
            <MaskedInput mask="phone" />
          </InputGroup>
          <InputGroup>
            <Label>CEP</Label>
            <MaskedInput mask="cep" />
          </InputGroup>
          <InputGroup>
            <Label>Valor (R$)</Label>
            <MaskedInput mask="currency" />
          </InputGroup>
          <InputGroup>
            <Label>Cartao de credito</Label>
            <MaskedInput mask="creditcard" />
          </InputGroup>
          <InputGroup>
            <Label>Data</Label>
            <MaskedInput mask="date" />
          </InputGroup>
          <InputGroup>
            <Label>Hora</Label>
            <MaskedInput mask="time" />
          </InputGroup>
          <InputGroup>
            <Label>With error</Label>
            <MaskedInput mask="cpf" error="CPF invalido" />
          </InputGroup>
        </Stack>
      </DemoWithCode>

      <SubTitle>Search Bar</SubTitle>
      <DemoWithCode code={`<SearchBar placeholder="Search..." />

<SearchBar placeholder="Search..." shortcut="⌘K" />

<SearchBar
  value={search}
  onChange={e => setSearch(e.target.value)}
  onClear={() => setSearch('')}
  placeholder="Type to search..."
/>

<SearchBar placeholder="Loading..." loading />

<SearchBar size="sm" placeholder="Small" shortcut="⌘K" />
<SearchBar size="md" placeholder="Medium" shortcut="⌘K" />
<SearchBar size="lg" placeholder="Large" shortcut="⌘K" />`}>
        <Stack $spacing="12px" style={{ maxWidth: 400 }}>
          <SearchBar placeholder="Default search" />
          <SearchBar placeholder="With shortcut hint" shortcut="⌘K" />
          <SearchBar
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            onClear={() => setSearchVal('')}
            placeholder="Type to search..."
          />
          <SearchBar placeholder="Loading state" loading />
          <Flex $gap="8px" $align="center">
            <SearchBar size="sm" placeholder="sm" shortcut="⌘K" />
            <SearchBar size="md" placeholder="md" shortcut="⌘K" />
          </Flex>
          <SearchBar size="lg" placeholder="Large" shortcut="⌘K" />
        </Stack>
      </DemoWithCode>
    </Section>
  );
}
