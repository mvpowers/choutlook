FROM node:10-alpine

WORKDIR /app

COPY package*.json /app/
RUN npm install --only=production

COPY . /app

EXPOSE 3000
CMD [ "npm", "start" ]
