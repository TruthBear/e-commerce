import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { sortTaps } from '../category';
import { Oval } from 'react-loader-spinner';


export default function Search() {

  const _ = require('lodash');
  const location = useLocation();
  const taps = sortTaps;
  const querys = new URLSearchParams(location.search);
  const [category, setCategory] = useState(location.state.category);
  const [pageNumber, setPageNumber] = useState(querys.get("page"));
  const [searchName, setSearchName] = useState(querys.get("name"));
  const [brandName, setBrandName] = useState(null);
  const [minPrice, setMinprice] = useState(null);
  const [maxPrice, setMaxprice] = useState(null);
  const [sort, setSort] = useState(taps[0].value);
  const [products, setProducts] = useState();
  const [loading, setloading] = useState(true);
  
  const inputMinPrice = useRef();
  const inputMaxPrice = useRef();


  useEffect(()=>{
    const url = `https://kecommerce.shop/api/categories/${category}/detail?`;
    let queryString = new URLSearchParams(
      _.pickBy({
      page: pageNumber,
      name : searchName,
      brandName : brandName,
      minPrice : minPrice,
      maxPrice : maxPrice,
      sort : sort
      })
    )
    axios.get(url+queryString)
    .then(function (response) {
      setProducts(response.data.entity.products)
      let timer = setTimeout(() => {
        setloading(false)
      }, !sort[0] ? 100 : 1000);
    })
    .catch(function (error) {
      console.log(error);
    })
  },[category,pageNumber,searchName,brandName,minPrice,maxPrice,sort,]);
    
  
  function isNumber() {
    if(isNaN(Number(inputMinPrice.current.value))){
      console.log("다시 써라")
    }else {
      console.log("숫자 맞음")
    }
  }

  return (
    <div className='flex w-[1200px] space-x-10 px-[12px]'>
      <div className='w-1/4 bg-slate-200'>
        <div>
          <div>
            <label htmlFor="min-price">최소가격</label>
            <input ref={inputMinPrice} type="text" name="min-price" id="min-price" />
            <button onClick={isNumber} >버튼</button>
          </div>
          <div>
            <label htmlFor="max-price">최대 가격</label>
            <input ref={inputMaxPrice} type="number" name="max-price" id="max-price" />
          </div>
        </div>
      </div>
      <div className='w-3/4 bg-red-200'>
        <ul className='flex justify-end'>
          {
            taps.map((item, index)=>(
              <li key={index} onClick={()=>{
                setSort(item.value);
                if(item.value !== sort) {
                  setloading(true)
                }
              }} id={item.value} className={`
              ${item.value === sort ? "text-red-600" : "text-blue-600"}
              `+ "p-3"}>{item.label}</li>   
            ))
          }
        </ul>
        <ul className='space-y-5'>
          {
            loading === true 
            ? <div className='flex justify-center pt-[200px]'>
                <Oval
                  visible={true}
                  height="80"
                  width="80"
                  color="#a6a6a6"
                  secondaryColor="null"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            : products?.map((item, index) => (
              <li key={index} className='bg-slate-400 duration-100'>
                <div className='bg-white shadow-lg flex p-10 space-x-5'>
                  <div>
                    <img src="https://placehold.co/200" alt="" />
                  </div>
                  <div className='flex flex-col justify-between text-end w-2/5'>
                    <div className='space-y-2'>
                      <p className='text-4xl font-bold'>{item.name}</p>
                      <p className='text-xl text-gray-400'>{item.brandName}</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nulla.</p>
                    <p className='text-3xl font-bold'>{item.price.toLocaleString()}원</p>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
