FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm i --verbose

ENV DEBUG=backend:*

CMD npm run dev