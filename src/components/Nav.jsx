import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { categoryList } from '../category';

export default function Nav() {

  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  // function searchClick() {
  //   navigate(`/search?name=asdf`)
  // }
  // function searchChange(e) {
  //   setKeyword(e.target.value)
  // }

  const category = categoryList

  const categoryPrint = category.map(function(item, index){
    return <li key={index}><Link to={`/categories/${item}`} state={{key:"gd"}}>{item}</Link></li>
  });

  return (
    <header className='flex flex-col items-center '>
      <div className='bg-red-100 w-[1200px]'> 
        <div className=' flex justify-between items-center'> 
          <div id='logo'><Link to='/'>로고 넣을꺼임</Link></div>
          <div className='text-sm'>
            <ul className='flex [&>li]:after:text-gray-200 [&>li]:after:mx-2 [&>li:last-child]:after:mx-0 [&>li]:after:content-["|"] [&>li:last-child]:after:content-[""]'>
              <li>LOGIN</li>
              <li>JOIN US</li>
              <li>CART <span>0</span></li>
              <li>MY PAGE</li>
              {/* <li>
                <input type="text" onChange={searchChange} value={keyword} />
                <button onClick={searchClick}>검색</button>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className='h-[100px] flex flex-col justify-center'>
        <div>
          여기도 로고 넣을지 말지 생각중
        </div>
      </div>
      <nav className='bg-blue-100 w-[1200px]'>
        <ul className='flex space-x-4 justify-evenly text-xl'>
          {categoryPrint}
        </ul>
      </nav>
    </header>
  )
}
