FROM node:alpine

WORKDIR /usr/src

COPY package.json ./

RUN ["npm", "i"]

COPY app ./app/
