
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './components/HomePage';
import Title from './components/Title';
import AddRoom from './components/AddRoom';
import Room from './components/Room';
import { useState } from 'react';


let readyRooms = []
let currentRoom = []

function App() {
  const [roomIndex,setRoomIndex] = useState(0)
  const [onOff,setOnOff] = useState('red')
  let rooms = ['Bedroom' , 'Kitchen' , 'Bathroom']
  let products = ['Sterio','Air Condition' , 'Lamp', 'Solar Parel']

  const onOffProduct = ()=>
    {
        if(onOff === 'red')
        {
            setOnOff('green')
        }
        else
        {
            setOnOff('red')
        }
    }

  return (
    <div className="App">
      <Title/>
      <BrowserRouter>
      <Routes>
        <Route path='/SmartHouse' element={<HomePage setRoomIndex={setRoomIndex} roomIndex={roomIndex} readyRooms={readyRooms}/>}/>
        <Route path='/addroom' element={<AddRoom currentRoom={currentRoom} readyRooms={readyRooms} rooms={rooms}/>}/>
        <Route path='/room' element={<Room  onOffProduct={onOffProduct} onOff={onOff} setOnOff={setOnOff} roomIndex={roomIndex} products={products} currentRoom={currentRoom} readyRooms={readyRooms[roomIndex]}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
