import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import express from 'express';
import { z } from 'zod';
import { components } from './data/components.js';
import { tokens } from './data/tokens.js';

function createServer() {
  const s = new McpServer({
    name: 'calangoui',
    version: '0.1.0',
  });

  // ─── list_components ────────────────────────────────────────────────────────
  s.tool(
    'list_components',
    'List all calangoui components. Optionally filter by category. Returns lean catalog (name, category, description).',
    { category: z.string().optional().describe('Filter by category: primitives | inputs | feedback | overlay | navigation | data | advanced') },
    async ({ category }) => {
      const list = category
        ? components.filter((c) => c.category === category.toLowerCase())
        : components;

      if (list.length === 0) {
        const categories = [...new Set(components.map((c) => c.category))];
        return {
          content: [{
            type: 'text',
            text: `No components found for category "${category}". Available categories: ${categories.join(', ')}`,
          }],
        };
      }

      const grouped = list.reduce<Record<string, typeof list>>((acc, c) => {
        if (!acc[c.category]) acc[c.category] = [];
        acc[c.category].push(c);
        return acc;
      }, {});

      const lines: string[] = [`# calangoui Components (${list.length} total)\n`];
      for (const [cat, items] of Object.entries(grouped)) {
        lines.push(`## ${cat}`);
        for (const item of items) {
          lines.push(`- **${item.name}** — ${item.description}`);
        }
        lines.push('');
      }

      return { content: [{ type: 'text', text: lines.join('\n') }] };
    }
  );

  // ─── get_component ──────────────────────────────────────────────────────────
  s.tool(
    'get_component',
    'Get the full spec for a calangoui component: props, variants, import path, and code examples.',
    { name: z.string().describe('Component name (e.g. "Button", "Input", "CommandPalette")') },
    async ({ name }) => {
      const component = components.find(
        (c) => c.name.toLowerCase() === name.toLowerCase()
      );

      if (!component) {
        const names = components.map((c) => c.name).join(', ');
        return {
          content: [{
            type: 'text',
            text: `Component "${name}" not found.\n\nAvailable components: ${names}`,
          }],
        };
      }

      const lines: string[] = [
        `# ${component.name}`,
        `**Category:** ${component.category}`,
        `**Import:** \`${component.import}\``,
        '',
        `## Description`,
        component.description,
        '',
      ];

      if (component.variants.length > 0) {
        lines.push(`## Variants`);
        lines.push(component.variants.map((v) => `\`${v}\``).join(' | '));
        lines.push('');
      }

      if (component.props.length > 0) {
        lines.push(`## Props`);
        lines.push('| Prop | Type | Required | Default | Description |');
        lines.push('|------|------|----------|---------|-------------|');
        for (const prop of component.props) {
          lines.push(
            `| \`${prop.name}\` | \`${prop.type}\` | ${prop.required ? '✓' : ''} | ${prop.default ?? '—'} | ${prop.description} |`
          );
        }
        lines.push('');
      }

      if (component.examples.length > 0) {
        lines.push(`## Examples`);
        for (const ex of component.examples) {
          lines.push(`### ${ex.label}`);
          lines.push('```tsx');
          lines.push(ex.code);
          lines.push('```');
          lines.push('');
        }
      }

      if (component.keywords.length > 0) {
        lines.push(`**Keywords:** ${component.keywords.join(', ')}`);
      }

      return { content: [{ type: 'text', text: lines.join('\n') }] };
    }
  );

  // ─── get_tokens ─────────────────────────────────────────────────────────────
  s.tool(
    'get_tokens',
    'Get calangoui design tokens. Optionally filter by category.',
    { category: z.enum(['colors', 'spacing', 'radii', 'typography', 'shadows', 'zIndex']).optional().describe('Token category to retrieve') },
    async ({ category }) => {
      const data = category ? { [category]: tokens[category] } : tokens;
      const lines: string[] = ['# calangoui Design Tokens\n'];

      const serialize = (obj: unknown, indent = 0): string => {
        const pad = '  '.repeat(indent);
        if (typeof obj === 'string' || typeof obj === 'number') return String(obj);
        if (typeof obj === 'object' && obj !== null) {
          return Object.entries(obj)
            .map(([k, v]) => `${pad}${k}: ${typeof v === 'object' ? `\n${serialize(v, indent + 1)}` : v}`)
            .join('\n');
        }
        return String(obj);
      };

      lines.push('```');
      lines.push(serialize(data));
      lines.push('```');

      return { content: [{ type: 'text', text: lines.join('\n') }] };
    }
  );

  // ─── search_components ──────────────────────────────────────────────────────
  s.tool(
    'search_components',
    'Search calangoui components by name or keyword (e.g. "toggle", "modal", "loading", "form").',
    { query: z.string().describe('Search query') },
    async ({ query }) => {
      const q = query.toLowerCase();
      const results = components.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.keywords.some((k) => k.toLowerCase().includes(q))
      );

      if (results.length === 0) {
        return {
          content: [{
            type: 'text',
            text: `No components found for "${query}".\n\nTry searching for: button, input, modal, loading, navigation, chart, table, search, toggle`,
          }],
        };
      }

      const lines: string[] = [`# Search results for "${query}" (${results.length} found)\n`];
      for (const c of results) {
        lines.push(`## ${c.name} *(${c.category})*`);
        lines.push(c.description);
        lines.push(`**Import:** \`${c.import}\``);
        if (c.keywords.length > 0) lines.push(`**Keywords:** ${c.keywords.join(', ')}`);
        lines.push('');
      }

      return { content: [{ type: 'text', text: lines.join('\n') }] };
    }
  );

  // ─── setup ──────────────────────────────────────────────────────────────────
  s.tool(
    'setup',
    'Get complete setup instructions for calangoui: install command, provider setup, tsconfig, and first component example.',
    { _: z.string().optional().describe('No parameters required') },
    async () => {
      const text = `# calangoui Setup Guide

## Install

\`\`\`bash
npm install @by2-ai/calangoui styled-components recharts react-icons
\`\`\`

## Peer Dependencies

\`\`\`bash
npm install react react-dom styled-components
\`\`\`

## Wrap your app with CalangoUIProvider

\`\`\`tsx
// main.tsx or _app.tsx
import { CalangoUIProvider } from '@by2-ai/calangoui';

function App() {
  return (
    <CalangoUIProvider defaultTheme="system">
      <YourApp />
    </CalangoUIProvider>
  );
}
\`\`\`

## Provider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`defaultTheme\` | \`'dark' \\| 'light' \\| 'system'\` | \`'system'\` | Initial theme. 'system' follows OS preference |

## First Component

\`\`\`tsx
import { Button, Input, Stack } from '@by2-ai/calangoui';

export function LoginForm() {
  return (
    <Stack $spacing="16px" style={{ maxWidth: 320 }}>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Button variant="solid">Sign in</Button>
    </Stack>
  );
}
\`\`\`

## Theme Toggle

\`\`\`tsx
import { useTheme } from '@by2-ai/calangoui';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {isDark ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  );
}
\`\`\`

## MCP Server (for AI agents)

Connect directly to query components, tokens, and examples:

\`\`\`bash
# Claude Code
claude mcp add calangoui --transport http https://mcp.calangoui.by2.com.br/mcp
\`\`\`

Available tools: list_components, get_component, get_tokens, search_components, setup

## Docs

- Full reference (LLM-optimized): https://calangoui.by2.com.br/llm
- Interactive docs: https://calangoui.by2.com.br
`;
      return { content: [{ type: 'text', text }] };
    }
  );

  return s;
}

// ─── Start ────────────────────────────────────────────────────────────────────
if (process.env.TRANSPORT === 'http') {
  const PORT = Number(process.env.PORT ?? 8080);
  const app = express();
  app.use(express.json());

  app.get('/health', (_req, res) => { res.json({ status: 'ok' }); });

  // Stateless: each request gets its own server + transport instance
  const handleMcp = async (req: express.Request, res: express.Response) => {
    const server = createServer();
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
    res.on('close', () => { transport.close(); });
  };

  app.post('/mcp', handleMcp);
  app.get('/mcp', handleMcp);
  app.delete('/mcp', handleMcp);

  app.listen(PORT, () => console.log(`calangoui MCP server listening on :${PORT}`));
} else {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
