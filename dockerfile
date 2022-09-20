FROM node:18-alpine3.15

COPY . /dwn

WORKDIR /dwn
CMD ["node", "--es-module-specifier-resolution=node", "dist/core.js"]
EXPOSE 3000
