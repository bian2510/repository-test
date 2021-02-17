FROM node:lts

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g npm@latest

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]