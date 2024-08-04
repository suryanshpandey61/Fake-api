import React from 'react'
import  { useEffect, useState } from 'react'

function Cart() {

   


  const getCartItem = () => {
    let item = localStorage.getItem('cart')
    let parsedItem = JSON.parse(item);
    return parsedItem || " ";
  }
  const [cartItem,setCartItem] = useState(getCartItem());

 console.log(cartItem);


  return (
    <div className='flex'>
      {
        cartItem.map((item,index)=>(
          <div
              key={index}
              className="w-[250px]
                 
                   space-y-6  p-4 mx-auto mt-8 rounded-md border border-black  bg-white"
            >
              <p className="text-xl font-bold"> {item.title}</p>
              <img src={item.image} className="h-[200px] mx-auto  " />
              <p className="text-sm text-slate-500">
                {item.description.substring(0, 100)}...
              </p>
              <div className="flex justify-between">
                <p className="text-green-600 font-medium">${item.price}</p>
                <button 
                
                className="border border-black rounded-md px-6 py-2  text-red-700"
                 onClick={()=>localStorage.removeItem(item)}
                >
                  Remove Item
                  
                </button>
              </div>
            </div>
        ))
      }
    </div>
  )
}

export default Cart