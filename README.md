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

  ```bash
  git clone https://github.com/TBD54566975/dwn-js.git
  cd dwn-js
  ```

- build image & run docker container
  ```bash
  make run   
  ```

- profit? 💰 
  - DWN now accepts requests on port 3000


