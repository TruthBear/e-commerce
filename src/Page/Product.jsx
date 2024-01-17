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
      <div className='w-[1000px] flex justify-between bg-slate-100'>
        <div>
          <img src="https://placehold.co/400" alt="상품이름" />
        </div>
        <div>
          <p>상품 제목</p>
        </div>
      </div>
    </div>
  )
}
