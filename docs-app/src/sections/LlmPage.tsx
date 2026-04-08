import { useState } from 'react';
import styled from 'styled-components';
import { useTheme, Tabs } from 'calangoui';

const Container = styled.div`
  max-width: 640px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 8px;
`;

const Desc = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;
  margin-bottom: 32px;
`;

const StepCard = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: 16px;
`;

const StepNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.info.DEFAULT};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-right: 10px;
  flex-shrink: 0;
`;

const StepTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CodeBox = styled.div`
  background: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 14px 16px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
`;

const CopyBtn = styled.button`
  align-self: flex-end;
  padding: 4px 10px;
  font-size: 10px;
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  color: ${({ theme }) => theme.colors.mutedForeground};
  background: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  &:hover { color: ${({ theme }) => theme.colors.foreground}; }
`;

const Hint = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-top: 8px;
  line-height: 1.5;
`;

const UrlBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: 24px;
`;

const UrlText = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  color: ${({ theme }) => theme.colors.info.DEFAULT};
`;

const LLM_URL = 'https://calangoui.by2.com.br/llm';
const MCP_URL = 'https://mcp.calangoui.by2.com.br/mcp';

const URL = LLM_URL;


const PROMPT_SIMPLE = `Consulte ${URL} e use como referência para construir a UI com o design system calangoui.`;

const PROMPT_SYSTEM = `Antes de escrever qualquer código de UI, busque ${URL} para ter a referência completa do design system calangoui. Use os componentes, tokens e padrões do calangoui para todo o trabalho de interface.`;

const PROMPT_CHAT = `Busque a documentação em ${URL} e me ajude a criar uma tela de [descreva sua tela] usando o design system calangoui.`;

function Copyable({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <CodeWrapper>
      <CodeBox>{text}</CodeBox>
      <CopyBtn onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}>
        {copied ? 'Copiado!' : 'Copiar'}
      </CopyBtn>
    </CodeWrapper>
  );
}

export function LlmPage() {
  useTheme();
  const [copied, setCopied] = useState(false);

  return (
    <Container>
      <Title>For AI — Usando calangoui com LLMs</Title>
      <Desc>
        O calangoui disponibiliza toda a documentacao do design system em formato otimizado para consumo por LLMs.
        Basta pedir ao seu assistente de IA para consultar a URL abaixo.
      </Desc>

      <Tabs.Root defaultValue="mcp" style={{ marginBottom: '8px' }}>
        <Tabs.List>
          <Tabs.Trigger value="mcp">✦ MCP Server</Tabs.Trigger>
          <Tabs.Trigger value="llm">LLM Text Raw</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="mcp">
          <StepCard style={{ marginTop: '16px' }}>
            <StepTitle><StepNumber>✦</StepNumber>MCP Server — Conexão nativa para AI agents</StepTitle>
            <Hint>Para ferramentas como Claude Code, Cursor ou qualquer cliente MCP, conecte diretamente ao servidor:</Hint>
            <div style={{ marginTop: '10px' }}>
              <Copyable text={MCP_URL} />
            </div>
            <Hint style={{ marginTop: '16px', marginBottom: '6px' }}>Claude Code (CLI):</Hint>
            <Copyable text={`claude mcp add calangoui --transport http ${MCP_URL}`} />
            <Hint style={{ marginTop: '16px', marginBottom: '6px' }}>Claude Desktop (claude_desktop_config.json):</Hint>
            <Copyable text={`{\n  "mcpServers": {\n    "calangoui": {\n      "url": "${MCP_URL}"\n    }\n  }\n}`} />
            <Hint style={{ marginTop: '12px' }}>
              O MCP expõe 4 tools: <code>list_components</code>, <code>get_component</code>, <code>get_tokens</code> e <code>search_components</code>.
            </Hint>
          </StepCard>
        </Tabs.Content>

        <Tabs.Content value="llm">
          <UrlBox style={{ marginTop: '16px' }}>
            <UrlText>{URL}</UrlText>
            <CopyBtn
              style={{ alignSelf: 'center' }}
              onClick={() => { navigator.clipboard.writeText(URL); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
            >
              {copied ? 'Copiado!' : 'Copiar'}
            </CopyBtn>
          </UrlBox>

          <StepCard>
            <StepTitle><StepNumber>1</StepNumber>Prompt simples</StepTitle>
            <Hint>Cole isso em qualquer chat (ChatGPT, Claude, Gemini, etc):</Hint>
            <Copyable text={PROMPT_CHAT} />
          </StepCard>

          <StepCard>
            <StepTitle><StepNumber>2</StepNumber>Como instrucao de sistema</StepTitle>
            <Hint>Adicione no system prompt do seu assistente para que ele sempre use o calangoui:</Hint>
            <Copyable text={PROMPT_SYSTEM} />
          </StepCard>

          <StepCard>
            <StepTitle><StepNumber>3</StepNumber>Inline rapido</StepTitle>
            <Hint>Para pedir algo rapido no meio de uma conversa:</Hint>
            <Copyable text={PROMPT_SIMPLE} />
          </StepCard>

          <StepCard>
            <StepTitle><StepNumber>4</StepNumber>Com Claude Code / Cursor / Copilot</StepTitle>
            <Hint>Adicione no seu CLAUDE.md, .cursorrules ou instrucoes do projeto:</Hint>
            <Copyable text={`# Design System\nUse calangoui como design system. Referência completa: ${URL}\nSempre importe de 'calangoui'. Consulte a URL acima antes de criar componentes de UI.`} />
          </StepCard>

          <Hint style={{ marginTop: '24px', textAlign: 'center' }}>
            O endpoint /llm retorna um Markdown completo com todos os componentes, tokens, exemplos e patterns do calangoui.
          </Hint>
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  );
}
