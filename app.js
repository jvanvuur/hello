// https://github.com/uber/express-statsd
const express = require('express');
const app = express();
const router = express.Router()

var StatsD = require('node-dogstatsd').StatsD;
c = new StatsD('localhost', 8125);

var dd_options = {
  'datadog': c,
  'response_code': true,
  'tags': ['app:mhopson_app'] 
}

var connect_datadog = require('connect-datadog')(dd_options);

app.use(connect_datadog);
app.use(router);

app.get('/', (req, res) => {
  res.send('hello world! 3')
})

app.get('/booyah', (req, res) => {
  res.send('booyah 2!')
})


app.listen(3000, function() {
  console.log('listening on 3000')
})

