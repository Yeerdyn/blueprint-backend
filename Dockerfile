FROM node:latest

WORKDIR /app

COPY package.json .

COPY . .

RUN yarn
