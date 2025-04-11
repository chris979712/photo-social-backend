FROM node:22.14

EXPOSE 8085

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install nodemon

COPY . .

CMD ["npm","start"]