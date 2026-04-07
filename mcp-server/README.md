# @calangoui/mcp

MCP server for the [calangoui](https://calangoui.by2.com.br) design system.

Exposes the full component catalog, design tokens, and code examples as tools for AI agents (Claude Code, Cursor, Copilot, etc.).

## Tools

| Tool | Description |
|------|-------------|
| `list_components` | Lean catalog of all 50+ components, optionally filtered by category |
| `get_component` | Full spec for a component: props, variants, import path, examples |
| `get_tokens` | Design tokens: colors (dark/light), spacing, radii, typography, shadows |
| `search_components` | Full-text search by name or keyword (e.g. "toggle", "modal", "loading") |

## Setup

### 1. Build

```bash
cd mcp-server
npm install
npm run build
```

### 2. Claude Code (`~/.claude/settings.json` or `claude_desktop_config.json`)

```json
{
  "mcpServers": {
    "calangoui": {
      "command": "node",
      "args": ["/absolute/path/to/calangoui-sdk/mcp-server/dist/index.js"]
    }
  }
}
```

### 3. Cursor (`.cursor/mcp.json` in project root)

```json
{
  "mcpServers": {
    "calangoui": {
      "command": "node",
      "args": ["/absolute/path/to/calangoui-sdk/mcp-server/dist/index.js"]
    }
  }
}
```

### 4. Any MCP-compatible client

The server uses stdio transport. Point your client to:

```
node /path/to/mcp-server/dist/index.js
```

## Usage Examples

Once connected, your AI agent can:

```
"List all input components"
→ calls list_components({ category: "inputs" })

"How do I use the Button component?"
→ calls get_component({ name: "Button" })

"What components handle loading states?"
→ calls search_components({ query: "loading" })

"What are the spacing tokens?"
→ calls get_tokens({ category: "spacing" })
```

## Development

```bash
npm run dev     # watch mode
npm run build   # compile to dist/
npm start       # run compiled server
```
