.PHONY: start build test lint storybook mcp

start:
	npm run storybook

docs:
	@[ -d node_modules ] || npm install
	@[ -d docs-app/node_modules ] || (cd docs-app && npm install)
	npm run build
	cd docs-app && npm run dev

build:
	npm run build

test:
	npm run test

lint:
	npm run lint

storybook:
	npm run storybook

mcp:
	@[ -d mcp-server/node_modules ] || (cd mcp-server && npm install)
	cd mcp-server && npm run build
	node mcp-server/dist/index.js
