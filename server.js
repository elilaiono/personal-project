const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const createError = require('http-errors');

const port = process.env.PORT || 8080;
const app = express();



app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));



app.use((req, res, next) => {
  next(createError(404, 'Not found'));
});

// use next?
// app.use((err, req, res) => { 
//   res.status(err.status || 500);
//   res.send({
//     error: {
//       status: err.status || 500,
//       message: err.message
//     }
//   });
// });

  

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});