# CalangoUI (SDK) — AI First Design System

Um design system React feito para a era de IA: cada componente tem especificação “machine-readable”, então LLMs/agents conseguem gerar UI correta e on-brand a partir de linguagem natural. Construído com **styled-components**, **Radix UI** e **TypeScript** — com um **MCP server** nativo para consultar componentes, tokens e exemplos.

- Docs (web): https://calangoui.by2.com.br
- Referência para LLMs (markdown completo): https://calangoui.by2.com.br/llm
- Repositório: https://github.com/by2-studio/calangoui

---

## Instalação

```bash
npm i @by2-ai/calangoui styled-components
```

**Peer dependencies**
- `react` >= 18
- `react-dom` >= 18
- `styled-components` >= 6

> O SDK também inclui componentes de **charts** (via `recharts`) e **ícones** (via `react-icons`).

---

## Quickstart (React)

```tsx
import { CalangoUIProvider, Button } from '@by2-ai/calangoui';

export function App() {
  return (
    <CalangoUIProvider defaultTheme="system">
      <Button>Olá, Calango</Button>
    </CalangoUIProvider>
  );
}
```

### Tema e tokens

- Troca de tema e leitura do estado: `useTheme()`
- Criação/override de tema: `createTheme()`
- Tokens: `@by2-ai/calangoui/tokens`

Exemplo (tokens):

```ts
import { colors, spacing, typography } from '@by2-ai/calangoui/tokens';
```

---

## AI-first: MCP e “/llm”

### 1) Usar a referência `/llm`

A página https://calangoui.by2.com.br/llm contém a referência completa (componentes, tokens e padrões) em Markdown, ideal para colar em prompts, RAG, ou ferramentas de indexação.

### 2) Usar o MCP server (para agentes)

Este repo inclui um servidor MCP em `mcp-server/` que expõe ferramentas como:
- `list_components`
- `get_component`
- `get_tokens`
- `search_components`

Rodar localmente (stdio transport):

```bash
make mcp
# ou
cd mcp-server
npm install
npm run build
node dist/index.js
```

Config rápido (ex.: Cursor em `.cursor/mcp.json`):

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

---

## Desenvolvimento (este monorepo)

### Scripts do SDK (raiz)

```bash
npm run build       # build do pacote
npm test            # vitest (se houver testes)
npm run storybook   # storybook
```

### Docs app (Vite)

```bash
make docs
# ou
cd docs-app
npm install
npm run dev
```

---

## Estrutura do repositório

- `src/`: o SDK (componentes, tokens, tema)
- `docs-app/`: app de documentação (Vite)
- `mcp-server/`: MCP server para agentes

---

## Nota sobre imports neste repo

- **Para consumidores via npm:** importe do pacote publicado `@by2-ai/calangoui`.
- **Dentro do `docs-app/`:** existe uma dependência local chamada `calangoui` (`"calangoui": "file:.."`), então alguns exemplos internos usam `import ... from 'calangoui'`.

---

## Release

O workflow manual “Release & Publish” em `.github/workflows/publish.yml` faz:
- `npm ci` → `npm test` (se houver arquivos `src/**/*.test.ts[x]`) → `npm run build`
- bump de versão (`patch|minor|major`) + tag + GitHub Release
- `npm publish --provenance --access public`

---

## Licença

MIT
