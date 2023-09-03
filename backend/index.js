require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});