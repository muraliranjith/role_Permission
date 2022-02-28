require('dotenv').config();
const assert = require('assert');



const {

  HOST,
  HOST_URL,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  APP_DB,
  APP_PORT,
  APP_SECRET

} = process.env;

assert(APP_PORT, 'PORT is required');

module.exports = {
  DB: APP_DB,
  PORT: APP_PORT,
  SECRET: APP_SECRET,
  host: HOST,
  url: HOST_URL,
  firebaseConfig: {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
  }
}

