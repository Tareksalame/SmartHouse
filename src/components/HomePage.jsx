import React from 'react'
import { Link } from 'react-router-dom'
import RoomCom from './RoomCom'


export default function HomePage(props) {

    const rooms = ()=>
    {
        return props.readyRooms.map((val,idx)=>
        {
            return <RoomCom setRoomIndex={props.setRoomIndex} val={val} idx={idx}/>
        })
    }
  return (
    <div>
        <br />
        <Link to={'/addroom'}><button className='addRoomButton'>+</button></Link><br /><br />
        {rooms()}
    </div>
  )
}
