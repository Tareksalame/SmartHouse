import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function AddRoom(props) {

    const[select,setSelect] = useState();
    const[roomName,setRoomName] = useState('');
    const[roomColor,setRoomColor] = useState('');


    const nav = useNavigate();

    const roomSelect = ()=>
    {
        return props.rooms.map((val)=>
        {
            return <option>{val}</option>
        })
    }

    const addRoom = ()=>
    {
        if((roomName.length <= 1 || roomName.length >= 5) || (select === undefined || select === 'Select Room') )
        {
            alert('Error')
            nav('/SmartHouse')
        }
        else
        {
            props.readyRooms.push({roomType: select , roomName : roomName , roomColor : roomColor , roomProducts: []})
            props.currentRoom.push(props.readyRooms.length - 1)
            nav('/SmartHouse')

        }
    }

  return (
    <div className='selectRoomDiv'>
        <select className='selectRoom' onChange={(e)=>{setSelect(e.target.value)}} name="selectRoom" id="roomSelect">
            <option>Select Room</option>
            {roomSelect()}
        </select>
        <input className='roomInputs' type="text" onChange={(e)=>{setRoomName(e.target.value)}} placeholder='Room Name' />
        <input className='roomInputs' type="text" onChange={(e)=>{setRoomColor(e.target.value)}} placeholder='Room Color' />
        <button className='addRoom' onClick={addRoom}>Add Room</button>
    </div>
  )
}
