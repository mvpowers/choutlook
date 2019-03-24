# build
FROM node:8.10-alpine as build-stage

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app
RUN npm run build

# deploy
FROM nginx:1.15-alpine

COPY --from=build-stage /app/public /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
