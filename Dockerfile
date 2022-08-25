FROM node:18-alpine

WORKDIR /var/www

CMD [ "node", "src/index.js" ]

