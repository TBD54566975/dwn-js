# Decentralized Web Node (DWN) in Node.js


## Introduction

This repository contains a Node.js instantiation of a Decentralized Web Node (DWN) as per the [specification](https://identity.foundation/decentralized-web-node/spec/). It uses the [JavaScript implementation](https://github.com/TBD54566975/dwn-sdk-js) of the DWN as its core engine.

## Installation Steps

- clone this repo somewhere

  `git clone https://github.com/TBD54566975/dwn-js.git`

- install dependencies

  `npm i`

- build

  `npm run build`

- start the DWN

  `npm start`

- DWN now accepts requests on port 3000

## Running using `docker`
- clone this repo somewhere

  `git clone https://github.com/TBD54566975/dwn-js.git`

- install dependencies

  `npm i`

- build

  `npm run build`

- build docker image
  
  `docker build -t dwn .`

  > There currently an [issue](https://github.com/TBD54566975/dwn-js/issues/1) (investigation with PR welcome!) on MacOS with M1 chip where you oddly need to build an `amd64` image or else DWN instantiation will fail when you start a container:
  `docker build --platform=linux/amd64 -t dwn .`

- start a container using the image built above

  `docker run --name dwn -d -p 3000:3000 dwn`

- DWN now accepts requests on port 3000
