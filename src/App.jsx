import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [products,setProducts]=useState([])
  useEffect(()=>{

    function getProduct(){
      axios.get('https://dummyjson.com/products').then((data)=>{
        setProducts(data.data.products)
      })

      
    }
    getProduct()

    
  },[])
  
  console.log(products)

  return (
    <div className='flex flex-wrap '>

    {products.map((item)=>{
      return (

      <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img class="h-48 w-full object-cover object-center" src={item.thumbnail} alt="Product Image" />
        <div class="p-4">
          <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">{item.title}</h2>
          <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
          <div class="flex items-center">
            <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{item.price}</p>
            <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
            <p class="ml-auto text-base font-medium text-green-500">20% off</p>
          </div>
        </div>
      </div>
      )
    })}
    </div>
  )
}

export default App