import React, { useState } from 'react';
import './Main.css';
import Chipset from '../Elements/Chipset';
import Button from '../Elements/Button';
import { toast } from 'react-toastify';


function Main({ rooms }) {

    const [mqttClient, setMqttClient] = useState(null);
    const [roomData, setRoom] = useState({})

    // subscribe button logic
    const subscribeHandler = (room) => {
        if (Object.keys(roomData).length) {
            setRoom({})
            if (mqttClient) {
                mqttClient.disconnect()
                toast.warn('Unsubscribed successfully')
            }
        } else {
            setRoom(room)
            toast.success('Subcribe successfully ' + room.number)
        }
    }

    return (
        <div className='Main'>
            <div className='Rooms'>
                {rooms.length ? rooms.map((room) => (
                    <div key={room._id}  >
                        <div  >
                            <h3>{room.number}</h3>
                        </div>
                        <div>
                            <div className='Devices' >
                                <img src='/chipset.PNG' width={50} alt='chipset' />
                                <span>{room.devices?.length}</span>
                            </div>
                            <Button onClick={() => subscribeHandler(room)} > {roomData._id === room._id ? 'UnSubscribe' : 'Subscribe'} </Button>
                        </div>
                    </div>
                )) : <h2> No Room was found </h2>}
            </div>
            {Object.keys(roomData).length ?
                <div className='RoomInfo'>
                    <div>
                        <h2>{roomData.number}</h2>
                    </div>
                    {roomData.devices?.length ? <div className='RoomInfoChipset' >
                        {roomData?.devices?.map((device) => (
                            <Chipset mqttClient={mqttClient} setMqttClient={setMqttClient} device={device} />
                        ))}
                    </div> : <h2>
                        No Devices was found
                    </h2>}
                </div> : <h2>
                    Select a room </h2>}
        </div>
    );
}

export default Main;