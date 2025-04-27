FROM node:22.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install nodemon

COPY src ../photo-social-backend/app/src

EXPOSE 3000

CMD ["npm","start"]