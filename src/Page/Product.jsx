import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
  const productId = useParams().id;
  useEffect(()=>{
    const url = `https://kecommerce.shop/api/product/${productId}`
    axios.get(url)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    })
  },[productId])
  return (
    <>
      <div>{productId}</div>
    </>
  )
}
