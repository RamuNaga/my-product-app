# docker/backend.Dockerfile.dev

ARG SERVICE
ARG SERVICE_DIR

FROM node:22-alpine AS base

WORKDIR /app

RUN apk add --no-cache bash curl git

RUN corepack enable && corepack prepare pnpm@10.28.2 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile --prod=false

COPY . .

ARG SERVICE
ARG SERVICE_DIR

RUN pnpm nx run ${SERVICE}:build

FROM node:22-alpine AS runtime

WORKDIR /app

RUN apk add --no-cache bash

RUN corepack enable && corepack prepare pnpm@10.28.2 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile --prod

ARG SERVICE
ARG SERVICE_DIR

COPY --from=base /app/dist/apps/backend/${SERVICE_DIR} ./dist

ENV NODE_ENV=development

EXPOSE 3000

CMD ["node", "dist/main.js"]
