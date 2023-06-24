import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RoomCom(props) {
    let nav = useNavigate()
    const gotoRoom =()=>
    {
        props.setRoomIndex(props.idx)
        nav('/room')
    }
  return (
    <div>
        <button 
            style=
            {{backgroundColor: props.val.roomColor ,
             marginLeft: '10px',
            border : 'solid steelblue 3px',
            borderRadius: '30px',
            marginTop:'5%',
            height: '50px',
            width: '200px',
            color : 'white'}} onClick={gotoRoom}>{props.val.roomName}</button>
    </div>
  )
}
