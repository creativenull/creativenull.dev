FROM node:22-alpine

COPY --link package.json package-lock.json .

RUN npm ci && npm run build

COPY --link . .

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "start"]
