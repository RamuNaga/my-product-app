# docker/backend.Dockerfile.dev
ARG SERVICE
FROM node:20-alpine AS base
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

COPY . .

# Build the given nx service along with proto files
ARG SERVICE
RUN pnpm nx run ${SERVICE}:build-with-protos

FROM node:20-alpine AS runtime
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Copy built artifact including proto files
ARG SERVICE
COPY --from=base /app/dist/apps/backend/${SERVICE} ./dist

ENV NODE_ENV=development
EXPOSE 3000
CMD ["node", "dist/main.js"]