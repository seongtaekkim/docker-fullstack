FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

# RUN npm run dev
CMD ["npm","run","start"]