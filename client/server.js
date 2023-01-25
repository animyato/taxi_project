// Imports
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// Database connection
import dbConnection from './server/utils/dbConnection.js';

const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());

// Cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next()
});

app.listen(port, () => {
  dbConnection()
  console.log(`Express server started on port ${port}`);
});