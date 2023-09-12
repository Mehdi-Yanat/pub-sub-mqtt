const express = require("express");
const router = express.Router();

var publisherController = require("../controllers/publisher");

// routers  
router.post("/", publisherController.pubMQTTMessage);

module.exports = router;
