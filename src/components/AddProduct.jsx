import React, { useState } from 'react'

export default function AddProduct(props) {

    const [select,setSelect] = useState()
  
    let products = ()=>
    {
        return props.products.map((val,idx)=>
        {
            return <option>{val}</option>
        })
    }


    let checkSterio = ()=>
    {
        let productsOnly = props.readyRooms.roomProducts.map((val)=>
        {
            return val.product
        })
        return productsOnly
    }

    console.log(checkSterio())

   const addProduct = ()=>
   {

       if((checkSterio().includes('Sterio')) && (select === 'Sterio'))
       {
           alert('Cannot Add Product')
           props.setFlag(false)
       }
       else if((select === 'Solar Parel') && (props.readyRooms.roomType !== 'Bathroom') )
       {
           alert('Cannot Add Product')
           props.setFlag(false)
       }
       else if((props.readyRooms.roomProducts.length < 5))
       {
           props.readyRooms.roomProducts.push({product : select, color : 'red'})
           props.setFlag(false)
       }
        else if ((props.readyRooms.roomProducts.length >= 5))
        {
            alert('Cannot Add Product')
            props.setFlag(false)
        }
        


   }
  
    return (
    <div>
        <br /><br />
        <select className='selectRoom' style={{marginRight:'5%'}} onChange={(e)=>{setSelect(e.target.value)}} name="add" id="add">
        <option></option>
        {products()}
        </select>

        <button onClick={addProduct} className='addRoom'>Add Product</button>
    </div>
  )
}
