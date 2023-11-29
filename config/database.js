const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 3001;
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

const dbConnection = () => {
  mongoose
    .connect(DB)
    .then(() => {
      app.listen(port, () => {
        console.log(`http://localhost:${port}/`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = dbConnection;
