FROM node:12-alpine
WORKDIR ./
COPY . .
RUN npm i
CMD ["node", "index.js"]
