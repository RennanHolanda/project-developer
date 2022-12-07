const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://viacep.com.br/ws',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  module.exports = instance