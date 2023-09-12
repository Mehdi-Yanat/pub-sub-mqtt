const express = require("express");
require('dotenv').config()
const app = express();
const port = 3500;

// Set the json request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const publisherRouter = require("./routes/publisher");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/publisher", publisherRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
