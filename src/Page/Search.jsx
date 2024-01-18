import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Search() {
  const _ = require('lodash')
  const location = useLocation();
  const querys = new URLSearchParams(location.search);
  const [category, setCategory] = useState(location.state.category);
  const [pageNumber, setPageNumber] = useState(querys.get("page"));
  const [searchName, setSearchName] = useState(querys.get("name"));
  const [brandName, setBrandName] = useState(null)
  const [minPrice, setMinprice] = useState(null);
  const [maxPrice, setMaxprice] = useState(null);
  const [sort, setSort] = useState(null);


  // useEffect(()=>{
    const url = `https://kecommerce.shop/api/categories/${category}/detail?`
    const queryString = new URLSearchParams(
      _.pickBy({
      page: pageNumber,
      name : searchName,
      brandName : brandName,
      minPrice : minPrice,
      maxPrice : maxPrice,
      sort : sort
      })
    )
    console.log(url + queryString)
  //   axios.get(url)
  //   .then(function (response) {
  //     console.log(response)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // },[pageNumber])
  
  return (
    <div className='flex w-[1200px] '>
      <div className='w-1/4 bg-slate-200'>
        여기에 필터
      </div>
      <div className='w-3/4 bg-red-200'>
        여기에 검색 결과
      </div>
    </div>
  )
}
