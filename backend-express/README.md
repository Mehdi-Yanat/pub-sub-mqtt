# mqtt-node
A Node.js Express Web application that uses the mqtt.js  


## Steps to run  

1. Create a `.env` file at the root of the project with the following properties:

```
API_URL={API_URL}
Token={Token}
MQTT_HOST_NAME={MQTT_HOST_NAME}

```

`git clone`  
`npm install && npm run dev`


## API documentation

1. Publish route 

- `/localhost:3500/api/publish` 
- `Content-Type: application/json`
- `JSON example:`

```
presence_payload
 {
    "type": 4,
    "payload": {
    "presenceDetected": true,
    "presenceTargetType": 0,
    "roomPresenceIndication": 0,
    "timestamp": 0,
    "eventId": "string",
    "timestampStr": "string",
    "deviceId": "string",
    "extra": "string",
    "timestampMillis": 0,
    "trackerTargets": [],
    "presenceRegionMap": {}
    }
} 
```


```
fall_payload
 {
    "type": 5,
    "payload": {
    "timestamp": 0,
    "statusUpdateTimestamp": 0,
    "status": "fall_detected", //fall_exit,
    "type": "string",
    "deviceId": "string",
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
```

