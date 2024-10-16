FROM node:20-alpine

RUN apk update && apk add curl

RUN mkdir -p /app
WORKDIR /app

COPY . /app

RUN npm ci && npm run build

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

HEALTHCHECK CMD curl --fail http://localhost:${NUXT_PORT}/up || exit 1

CMD ["npm", "start"]
