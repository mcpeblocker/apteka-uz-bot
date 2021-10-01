const axios = require('axios').default;
const config = require('../config');

const api = axios.create({
    baseURL: config.apiUrl
});

module.exports = api;