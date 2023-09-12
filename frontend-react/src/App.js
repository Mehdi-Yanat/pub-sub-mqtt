// @ts-nocheck
import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './Main/Main';
import NavBar from './NavBar/NavBar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';



function App() {

  const [rooms, setRooms] = useState([])


  useEffect(() => {
    const getRooms = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL, {
          headers: {
            Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN
          }
        });
        console.log(response.data);
        setRooms(response.data); // Assuming response.data is an array of rooms
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    }
    getRooms()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Main rooms={rooms} />
      <ToastContainer />
    </div>
  );
}

export default App;
