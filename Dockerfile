FROM node:20-alpine

WORKDIR /next

COPY . .


RUN npm install
RUN npm run prepare
RUN npm run build

CMD ["npm", "run","dev"]
