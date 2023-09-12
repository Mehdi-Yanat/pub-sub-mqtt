const mqttService = require("../service/mqttService");

const MQTT_HOST_NAME = process.env.MQTT_HOST_NAME;

var mqttClient = new mqttService(MQTT_HOST_NAME);
mqttClient.connect();

exports.pubMQTTMessage = async function (req, res) {
  try {
    const {topic , message} = req.body;

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
