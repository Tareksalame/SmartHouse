import React, { useState } from 'react'
import AddProduct from './AddProduct'
import Product from './Product'
export default function Room(props) {
    const [flag,setFlag] = useState(false)
    const addProduct = ()=>
    {
        if(flag === true)
        return <AddProduct  roomIndex={props.roomIndex} readyRooms={props.readyRooms} products={props.products} setFlag = {setFlag}/>
    }


    const showProducts = ()=>
    {
        return props.readyRooms.roomProducts.map((val)=>
        {
            return <Product  val={val} />
        })
    }

  return (
    <div>
        <h1 className='roomInfo'>Room Name : {props.readyRooms.roomName}</h1>
        <h1 className='roomInfo'>Room Type : {props.readyRooms.roomType}</h1>
        <h1 className='roomInfo'>Room Products : {showProducts()}</h1>
        <button onClick={()=>{setFlag(!flag)}} className='addRoom'>Add Product</button>
        {/* {roomProducts()} */}
        {addProduct()}
    </div>
  )
}
