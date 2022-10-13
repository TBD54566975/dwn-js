FROM node:18-alpine3.15

WORKDIR /dwn

COPY package.json tsconfig.json ./
COPY src ./src

# DWN's levelDB has issues running on m1, so we have to install prerequisites
RUN apk add --update python3 make g++
RUN npm install --build-from-source
RUN npm run build

CMD ["node", "--es-module-specifier-resolution=node", "dist/core.js"]
EXPOSE 3000
