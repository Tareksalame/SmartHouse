import React from 'react'
import { useState } from 'react'

export default function Product(props) {
    const [onOff,setOnOff] = useState(props.val.color)


    const onOffProduct = ()=>
    {
        if(onOff === 'red')
        {
            setOnOff('green')
            props.val.color = 'green'
        }
        else
        {
            setOnOff('red')
            props.val.color = 'red'
        }
    }

  return (
    <div>
        <button className='product' style={{backgroundColor: onOff}} onClick={onOffProduct}>
            <h1>{props.val.product}</h1>
        </button>
    </div>
  )
}
