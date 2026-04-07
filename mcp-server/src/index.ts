import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import express from 'express';
import { z } from 'zod';
import { components } from './data/components.js';
import { tokens } from './data/tokens.js';

function createServer() {
  return new McpServer({
    name: 'calangoui',
    version: '0.1.0',
  });
}

const server = createServer();

// ─── list_components ──────────────────────────────────────────────────────────
server.tool(
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

// ─── get_component ────────────────────────────────────────────────────────────
server.tool(
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

// ─── get_tokens ───────────────────────────────────────────────────────────────
server.tool(
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

// ─── search_components ────────────────────────────────────────────────────────
server.tool(
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

// ─── Start ────────────────────────────────────────────────────────────────────
if (process.env.TRANSPORT === 'http') {
  const PORT = Number(process.env.PORT ?? 8080);
  const app = express();
  app.use(express.json());

  app.get('/health', (_req, res) => { res.json({ status: 'ok' }); });

  app.post('/mcp', async (req, res) => {
    const s = createServer();
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
    await s.connect(transport);
    await transport.handleRequest(req, res, req.body);
    res.on('close', () => { transport.close(); s.close(); });
  });

  app.listen(PORT, () => console.log(`calangoui MCP server listening on :${PORT}`));
} else {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
