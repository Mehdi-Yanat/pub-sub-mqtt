const express = require("express");
const router = express.Router();

var publisherController = require("../controllers/publisher");

router.post("/", publisherController.pubMQTTMessage);

module.exports = router;
