# mqtt-node
A Node.js Express Web application that uses the mqtt.js  


## Steps to run  

1. Create a `.env` file at the root of the project with the following properties:

```
API_URL={API_URL}
Token={Token}
MQTT_HOST_NAME={MQTT_HOST_NAME}
MQTT_PORT={MQTT_PORT}

```

`git clone`  
`npm install && npm run dev`


## API documentation

1. Publish route 

- `/localhost:3500/api/publish` 
- `Content-Type: application/json`
- `Method: POST`
- `JSON example:`


-presence_payload

```
{
  "topic": "/test/:deviceId/events",
    "message": {
        "type": 4,
        "payload": {
            "presenceDetected": true,
            "presenceTargetType": 0,
            "roomPresenceIndication": 1,
            "timestamp": 0,
            "eventId": "string",
            "timestampStr": "string",
            "deviceId": ":deviceId",
            "extra": "string",
            "timestampMillis": 0,
            "trackerTargets": [""],
            "presenceRegionMap": {}
        }
    }
} 
```

-fall_payload

```
 {
  "topic": "/test/:deviceId/events",
    "message": {
        "type": 5,
        "payload": {
            "timestamp": 0,
            "statusUpdateTimestamp": 0,
            "status": "fall_detected", //fall_exit,
            "type": "string",
            "deviceId": ":deviceId",
            "endTimestamp": 0,
            "isSimulated": true,
            "exitReason": "string",
            "isLearning": true,
            "extra": "string",
            "isSilent": true,
            "fallLocX_cm": 0,
            "fallLocY_cm": 0,
            "fallLocZ_cm": 0,
            "tarHeightEst": 0,
            "idOfTrigger": "string"
        }
   }
}

```

