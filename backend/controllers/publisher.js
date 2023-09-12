const mqttService = require("../service/mqttService");

// get MQTT HOST Name
const MQTT_HOST_NAME = process.env.MQTT_HOST_NAME;
const MQTT_PORT = process.env.MQTT_PORT

// Try to connect to mqtt server
var mqttClient = new mqttService(`mqtt://${MQTT_HOST_NAME}:${MQTT_PORT}`);
mqttClient.connect();


// publish messages
exports.pubMQTTMessage = async function (req, res) {
  try {
    const { topic, message } = req.body;

    console.log(`Request Topic : ${topic}`);
    console.log(`Request Message : ${message}`);

    mqttClient.publish(topic, JSON.stringify(message), {});
    res
      .status(200)
      .json({ status: "200", message: "Sucessfully published MQTT Message" });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};
