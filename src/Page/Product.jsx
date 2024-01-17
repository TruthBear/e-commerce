import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function Product() {
  const productId = useParams().id;
  const [product, setProduct] = useState();
  
  useEffect(()=>{
    const url = `https://kecommerce.shop/api/product/${productId}`
    axios.get(url)
    .then(function (response) {
      setProduct(response.data.entity)
      console.log(response.data.entity)
    })
    .catch(function (error) {
      console.log(error);
    })
  },[])
  return ( 
    <div className='w-[1200px] flex flex-col items-center'>     
      <div className='w-[1000px] bg-white shadow-lg flex flex-col p-10 space-y-5'>
        <div className=''>
          <p className='text-5xl'>{product?.name}</p>
        </div>
        <div className='flex justify-between'>
          <div>
            <img src="https://placehold.co/400" alt="상품이름" />
          </div>
          <div className='text-2xl w-2/5 space-y-2 flex flex-col justify-between'>
            <div>
              <p><span className='text-gray-400'>Brand: </span>{product?.brandName}</p>
              <p><span className='text-gray-400'>Price: </span>{product?.price.toLocaleString()}원</p>
              <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, a!</p>
            </div>
            <div className='flex flex-col space-y-3 '>
              <button className='p-5 border border-black'>Add to Cart</button>
              <button className='p-5 bg-black text-white'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
