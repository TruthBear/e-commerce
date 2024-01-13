import React from 'react'

export default function Nav() {
  return (
    <header className='flex flex-col items-center '>
      
      <div className='bg-red-100 w-[1200px]'> 
        <div className=' flex justify-between items-center'> 
          <div id='logo'>로고 넣을꺼임</div>
          <div className='text-sm'>
            <ul className='flex [&>li]:after:text-gray-200 [&>li]:after:mx-2 [&>li:last-child]:after:mx-0 [&>li]:after:content-["|"] [&>li:last-child]:after:content-[""]'>
              <li>LOGIN</li>
              <li>JOIN US</li>
              <li>CART <span>0</span></li>
              <li>MY PAGE</li>
              <li>
                <input className='bg-slate-300' type="text" placeholder='검색창으로 쓸꺼임' />
              </li>
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
          <li>TOP</li>
          <li>OUTER</li>
          <li>PANTS</li>
          <li>ONEPIECE</li>
          <li>SKIRT</li>
          <li>SNEAKERS</li>
          <li>SHOES</li>
          <li>HEAD_WEAR</li>
          <li>ACCESSORY</li>
        </ul>
      </nav>
    </header>
  )
}
