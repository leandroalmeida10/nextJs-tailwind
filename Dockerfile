FROM node:16.14-alpine3.14 AS base


WORKDIR /app/next-project-default
COPY package*.json .

RUN npm install

COPY next.config.js ./next.config.js
ENV NODE_ENV development

COPY ./src ./src
COPY public ./public

CMD ["npm","run","dev"]