FROM node:12-alpine

RUN apk --update --no-cache add --virtual build-dependencies curl build-base tzdata postgresql-dev gcc python3-dev musl-dev

ENV TZ=Asia/Tokyo

RUN npm i -g npm

WORKDIR /app
COPY package.json ./
RUN npm i
COPY . .

# RUN npm run build

CMD ["npm","start"]