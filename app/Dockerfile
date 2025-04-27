FROM node:22.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install nodemon

COPY ./src ./src

EXPOSE 5000

CMD ["npm", "start"]