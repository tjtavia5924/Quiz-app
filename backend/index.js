require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// mongoose.Promise = global.Promise;
// mongoose.set("strictQuery", false);
// // new code below
// // mongoose.set("useCreateIndex", true);
// //new code above
// mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
//   useNewUrlParser: true,
// });

app.use(bodyParser.json());

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});