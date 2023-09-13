const express = require("express");
require('dotenv').config()
const app = express();
const port = 3500;

// Set the json request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const publisherRouter = require("./routes/publisher");

// set route 
app.get("/", (req, res) => {
  res.send("Health check");
});

// publish route
app.use("/api/publish", publisherRouter);

// listen app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
