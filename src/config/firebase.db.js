const firebase = require('firebase');
const config = require('./index');

const db = firebase.initializeApp(config.firebaseConfig);

module.exports = db;