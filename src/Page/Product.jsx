import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
  const productId = useParams().id;
  return (
    <>
      <div>{productId} 페이지</div>
    </>
  )
}
