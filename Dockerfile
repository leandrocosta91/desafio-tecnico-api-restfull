FROM node:18-alpine

WORKDIR /usr/app

RUN npm init -y
RUN npm install express

EXPOSE 3000

CMD [ "node", "index.js" ]

