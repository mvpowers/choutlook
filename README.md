# Choutlook
> Chat app that mimics Outlook's front-end with no database and client-side encryption.

## Installing / Getting started

```shell
# install dependencies
npm install

# copy example config file to real config and update environment variables
cp src/config.js.example src/config.js

# start server
npm run server

# start client
npm run start
```

## Developing

### Built With
* React
* Socket.io
* Styled Components

## Tests

In progress. Currently only snapshot tests.

```shell
npm run test
```

## Style guide

Uses ESLint extending Airbnb and Prettier.

## User guide

### Enter password into search bar
> All users must have the same password to read the encrypted data
![enter password](https://ibb.co/hOw4Ex)

### Update username
> Click on the email prefix above the reply box to change your username
![enter password](https://ibb.co/mR0vnH)

### Start chatting
> Type your message in the reply box and press enter or click submit
![enter password](https://ibb.co/jx4D7H)