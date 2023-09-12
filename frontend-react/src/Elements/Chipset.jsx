import React, { useEffect, useState } from 'react'
import { Client } from 'paho-mqtt';
import { toast } from 'react-toastify';

function Chipset({ device, mqttClient, setMqttClient }) {

    const [devicePayLoad, setDevicePayload] = useState({});


    useEffect(() => {

        const MQTT_TOPIC = `/test/${device._id}/events`; // Replace with the MQTT topic you want to subscribe to

        const conectBroker = () => {
            const serialProduct = device.serialProduct

            const client = new Client(process.env.REACT_APP_HOSTMQTT, Number(process.env.REACT_APP_PORTMQTT), serialProduct)

            if (!device._id) {
                client.disconnect();
            }

            client.onConnectionLost = (responseObject) => {
                if (responseObject.errorCode !== 0) {
                    console.log(`Connection lost: ${responseObject.errorMessage}`);
                }
            };

            client.onMessageArrived = (message) => {
                console.log(`Received message on topic ${message.destinationName}: ${message.payloadString}`);
                setDevicePayload(JSON.parse(message.payloadString))
                toast.success('Message received ' + device.serialProduct)
            };

            // Connect to the MQTT broker
            client.connect({
                onSuccess: () => {
                    console.log('Connected to MQTT broker');
                    // Subscribe to the MQTT topic
                    client.subscribe(MQTT_TOPIC);
                    setMqttClient(client);
                },
                onFailure: (message) => {
                    console.error(`Connection failed: ${message.errorMessage}`);
                    toast.warn('Connection lost ' + device.serialProduct)
                },
            });


            // Clean up when the component unmounts
            return () => {
                if (mqttClient) {
                    mqttClient.disconnect();
                }
            };

        }

        conectBroker()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [device._id])


    function actual_presence(presence_payload) {
        return (
            presence_payload?.presenceDetected &&
            presence_payload?.roomPresenceIndication > 0 &&
            presence_payload?.trackerTargets.length > 0
        );
    }


    return (
        <div key={device._id} >
            <img src='/chipset.PNG' width={50} alt='chipset' />
            <span>{device.serialProduct}</span>
            <img src={(actual_presence(devicePayLoad.payload) && device._id === devicePayLoad.payload.deviceId) ? 'greenDot.png' : 'redDot.png'} width={10} alt='online-img' />
        </div>
    )
}

export default Chipset
