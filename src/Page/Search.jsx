import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Search() {
  const location = useLocation();
  const url = new URLSearchParams(location.search)
  console.log(url.get("name"))

  useEffect(()=>{
    const url = `https://kecommerce.shop/api/categories/${category}/detail?page=${page}`
    axios.get(url)
    .then(function (response) {
      setProducts(response.data.entity.products)
    })
    .catch(function (error) {
      console.log(error);
    })
  },[])
  return (
    <div>Search</div>
  )
}
