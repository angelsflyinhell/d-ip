FROM node:18-alpine as builder
WORKDIR /usr/src/
COPY . .
RUN npm install
CMD ["npm", "run", "start"]