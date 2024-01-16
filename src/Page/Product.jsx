import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
  const productId = useParams().id;
  const [product, setProduct] = useState();
  useEffect(()=>{
    const url = `https://kecommerce.shop/api/product/${productId}`
    axios.get(url)
    .then(function (response) {
      console.log(response.data.entity == false)
      setProduct(response.data.entity)
    })
    .catch(function (error) {
      console.log(error);
    })
  },[productId])
  return (
    <main className='flex justify-center'>
      <div className='w-[1200px] flex justify-center'>
        {
            
        }        

        {/* <div>
          <img src="https://placehold.co/600" alt="상품이름" />
        </div>
        <div>
          <p>상품 제목</p>
          <p>상품 브랜드</p>
          <p>상품가격</p>
        </div> */}
      </div>
    </main>
  )
}
