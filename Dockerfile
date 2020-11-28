FROM node:12-alpine

MAINTAINER gregkoul@gmail.com

# Create app directory
WORKDIR /usr/src/app

COPY telsip-chat/. /usr/src/app/

# If you are building your code for development
RUN npm install

# If you are building your code for production
#RUN npm ci --only=production

EXPOSE 4000

CMD [ "node", "chatserver.js" ]
