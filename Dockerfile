FROM node:22-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . /app

RUN npm ci && npm run build

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "start"]
