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

## Sanity Testing the DWN
1. Write a record using `RecordsWrite`
```
curl --location 'http://localhost:3000/did:key:z6Mkfg4SZsFczW3UkaWoE2NHzyrvKdru1Ggeqz9DXDf48ku5' \
--header 'X-DWN-MESSAGE: eyJyZWNvcmRJZCI6ImJhZnlyZWlhZWUybmpzaHE2b29sYmNqcWw0cHBlNXBxaHZkeW5hamV0YzJiZW9hYXhqcmpnNzRyYzJ5IiwiZGVzY3JpcHRvciI6eyJpbnRlcmZhY2UiOiJSZWNvcmRzIiwibWV0aG9kIjoiV3JpdGUiLCJzY2hlbWEiOiJKR1ZPbVdGbTczRDdZTWdDMXB0bSIsImRhdGFDaWQiOiJiYWZrcmVpYTdldnNhMmpwNWNocGNkc2czbDQzd3ZydTZoeGh2d2RnbXBsc2ZjY2Zmc2syejc2eDN6cSIsImRhdGFTaXplIjoyMSwiZGF0ZUNyZWF0ZWQiOiIyMDIzLTAzLTE0VDIxOjU4OjMwLjE4NjEwOVoiLCJkYXRlTW9kaWZpZWQiOiIyMDIzLTAzLTE0VDIxOjU4OjMwLjE4NjEwOVoiLCJkYXRhRm9ybWF0IjoiYXBwbGljYXRpb24vanNvbiJ9LCJhdXRob3JpemF0aW9uIjp7InBheWxvYWQiOiJleUp5WldOdmNtUkpaQ0k2SW1KaFpubHlaV2xoWldVeWJtcHphSEUyYjI5c1ltTnFjV3cwY0hCbE5YQnhhSFprZVc1aGFtVjBZekppWlc5aFlYaHFjbXBuTnpSeVl6SjVJaXdpWkdWelkzSnBjSFJ2Y2tOcFpDSTZJbUpoWm5seVpXbGxlRE5zZUhGck4yZHpkakptWkRSMmJYVjFkVzlwWm1KMFkzQnVaMnA1YjNJMGMycHRaREppTm5WdmVXcG9jSFZ4Y1RKeEluMCIsInNpZ25hdHVyZXMiOlt7InByb3RlY3RlZCI6ImV5SmhiR2NpT2lKRlpFUlRRU0lzSW10cFpDSTZJbVJwWkRwclpYazZlalpOYTJabk5GTmFjMFpqZWxjelZXdGhWMjlGTWs1SWVubHlka3RrY25VeFIyZGxjWG81UkZoRVpqUTRhM1UxSTNvMlRXdG1aelJUV25OR1kzcFhNMVZyWVZkdlJUSk9TSHA1Y25aTFpISjFNVWRuWlhGNk9VUllSR1kwT0d0MU5TSjkiLCJzaWduYXR1cmUiOiIyakF4Y3F5Q3JlSEhWOGl4UDhYbHNmcEV5Nlg0bFVVYUdPNWpnanhrY1hzQktHdEx0Y3IzYlNCN0l6ZjZlRU1WZVZ4N3hJX0pYVzFmYTEyWExsWEdDQSJ9XX19' \
--header 'Content-Type: text/plain' \
--data 'henrytsai testing 123'
```

The DWN should accept the message above.

2. Query the record that was written using `RecordsQuery`

```
curl --location --request POST 'http://localhost:3000/did:key:z6Mkfg4SZsFczW3UkaWoE2NHzyrvKdru1Ggeqz9DXDf48ku5' \
--header 'X-DWN-MESSAGE: eyJkZXNjcmlwdG9yIjp7ImludGVyZmFjZSI6IlJlY29yZHMiLCJtZXRob2QiOiJRdWVyeSIsImRhdGVDcmVhdGVkIjoiMjAyMy0wMy0xNFQyMTo1ODozMC4yMjExMTBaIiwiZmlsdGVyIjp7InJlY29yZElkIjoiYmFmeXJlaWFlZTJuanNocTZvb2xiY2pxbDRwcGU1cHFodmR5bmFqZXRjMmJlb2FheGpyamc3NHJjMnkifX0sImF1dGhvcml6YXRpb24iOnsicGF5bG9hZCI6ImV5SmtaWE5qY21sd2RHOXlRMmxrSWpvaVltRm1lWEpsYVdGM1l6ZHJhemRxYVhJek5ucGhNakkxYUhvemJUWTFOM1ZsWjNOM2QyOXlZbmQwYzNsMmVHbDFjamMzY0hkNmNIVmxlbTBpZlEiLCJzaWduYXR1cmVzIjpbeyJwcm90ZWN0ZWQiOiJleUpoYkdjaU9pSkZaRVJUUVNJc0ltdHBaQ0k2SW1ScFpEcHJaWGs2ZWpaTmEyWm5ORk5hYzBaamVsY3pWV3RoVjI5Rk1rNUllbmx5ZGt0a2NuVXhSMmRsY1hvNVJGaEVaalE0YTNVMUkzbzJUV3RtWnpSVFduTkdZM3BYTTFWcllWZHZSVEpPU0hwNWNuWkxaSEoxTVVkblpYRjZPVVJZUkdZME9HdDFOU0o5Iiwic2lnbmF0dXJlIjoiWEx0SXUtWGdNY1g1b2t1ZjV6SHNndWRPQlhyeXpvV3l1S0ltMlktYjU2ODBsRU12VHBZR3hCZXdTUnVWUVhRNENxX1NyV0NkQ3hDT1pVTDQ1N2J4QWcifV19fQ'
```

The DWN should respond with the record written.