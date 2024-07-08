FROM node:20-alpine

WORKDIR /next

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "start"]
