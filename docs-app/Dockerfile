# syntax=docker/dockerfile:1.7
# Build context: repo root (cd .. && docker build -f docs-app/Dockerfile .)

# ============================================
# Stage 1: Build do SDK (resolve file:..)
# ============================================
FROM node:22-bookworm-slim AS build-sdk

WORKDIR /sdk

COPY package*.json tsconfig.json vite.config.ts ./
COPY src/ ./src/

RUN npm ci --silent && npm run build


# ============================================
# Stage 2: Build do docs-app
# ============================================
FROM node:22-bookworm-slim AS build-docs

WORKDIR /sdk

# Reconstrói o diretório pai para que `calangoui: "file:.."` resolva
COPY --from=build-sdk /sdk/dist ./dist
COPY --from=build-sdk /sdk/package.json ./package.json
# node_modules do SDK necessários para TypeScript resolver tipos Radix (file: symlink aponta para /sdk/)
COPY --from=build-sdk /sdk/node_modules ./node_modules

COPY docs-app/package.json ./docs-app/

WORKDIR /sdk/docs-app

RUN npm install --silent

COPY docs-app/ .

RUN npm run build


# ============================================
# Stage 3: Runtime nginx
# ============================================
FROM nginx:1.27-alpine3.21 AS runtime

COPY --from=build-docs /sdk/docs-app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY docs-app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
