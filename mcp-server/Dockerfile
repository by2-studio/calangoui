# syntax=docker/dockerfile:1.7

# ============================================
# Stage 1: Build
# ============================================
FROM node:22-bookworm-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --silent

COPY tsconfig.json ./
COPY src/ ./src/

RUN npm run build


# ============================================
# Stage 2: Runtime
# ============================================
FROM node:22-bookworm-slim AS runtime

WORKDIR /app

ENV NODE_ENV=production \
    TRANSPORT=http \
    PORT=8080

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/health || exit 1

USER node

CMD ["node", "dist/index.js"]
