const express = require('express');
const cors = require('cors');
const Twitter = require('twitter');

const app = express();

var client = new Twitter({
  consumer_key: '9YFmrKGmYJXVc4FOKQRXWRb12',
  consumer_secret: 'n3MU1agGWn3WxKIMiYnhF0O5qmts0kaftdWkPduq87yYVcZ2HK',
  access_token_key: '886946526618157056-tQOGwoq7d5b6qFSlr5gWxEaAfMiecxd',
  access_token_secret: 'O8bQ8Fj93TPzs89Wz4Gt9SGvGtXKREz7Z5TEUzWhlY7jr'
});

