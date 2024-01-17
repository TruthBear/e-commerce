import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Search() {
  const location = useLocation();
  console.log(location.state)
  const category = location.state.category
  const [pageNumber, setPageNumber] = useState(1);
  
  // const url = new URLSearchParams(location.search)
  // console.log(url.get("name"))

  useEffect(()=>{
    const url = `https://kecommerce.shop/api/categories/${category}/detail?page=${pageNumber}`
    axios.get(url)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    })
  },[])
  
  return (
    <div>전체 검색은 서비스 종료다!</div>
  )
}
