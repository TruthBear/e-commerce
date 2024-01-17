import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { categoryList } from '../category';
import { Link } from 'react-router-dom';



export default function Home() {
  const category = categoryList;
  const [inputValue, setInputValue] = useState('')
  const [selectCategory, setSelectCategory] = useState('TOP');

  function onChangeCategory(e) {
    setSelectCategory(e.target.value)
  }

  function onChangeInputValue(e) {
    setInputValue(e.target.value)
    console.log(e.target.value)
  }


  
  return (
    <div>
      <div className='bg-white w-[800px] overflow-hidden rounded-full flex'>
        <input onChange={onChangeInputValue} value={inputValue} type="text" className='w-[70%] text-2xl outline-none p-3 pl-10 ' placeholder='검색하셈' />
        <select onChange={onChangeCategory} name="" id="" className='text-2xl w-[20%] px-5 outline-none'>
          {
            category.map((item, index) => <option value={item} key={index}>{item}</option>)
          }
        </select>
        <Link to={`/search`} state={{category:selectCategory}} className='bg-black text-2xl w-[10%] text-white flex justify-center items-center pr-1 ml-5'><FaSearch /></Link>
      </div>
    </div>
  )
}
