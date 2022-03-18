FROM node:16

WORKDIR /app

COPY . /app/

RUN yarn install
RUN yarn build

EXPOSE 80
CMD ["sh", "-c", "yarn start"]
