FROM node:22-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine

RUN apk update && apk add curl
HEALTHCHECK CMD curl --fail http://localhost:${NUXT_PORT}/up || exit 1

EXPOSE 3000
ENV NODE_ENV=production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

WORKDIR /app

COPY --from=builder /app/.output ./.output
CMD ["node", ".output/server/index.mjs"]
