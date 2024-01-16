import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

export default function Product() {
  const category = useParams().id;
  const [products, setProducts] = useState({});
  const [page, setPage] = useState(2)
  
  
  useEffect(()=>{
    const url = `https://kecommerce.shop/api/categories/${category}/detail?page=${page}`
    axios.get(url)
    .then(function (response) {
      setProducts(response.data.entity.products)
    })
    .catch(function (error) {
      console.log(error);
    })
  },[category])

  return (
    <main className='flex justify-center'>
      <div className=''>
        <ul className='flex flex-wrap gap-[50px] w-[1200px]'>
          {
          products.length > 0 ? products.map((item) => {
            return <Link  key={item.id} to={`/product/${item.id}`}><li className='w-[200px] hover:bg-gray-200 p-3'>
            <img src="https://placehold.co/200x200" alt={item.name} />
            <p>{item.name}</p>
            <p>{Number(item.price).toLocaleString()}</p>
          </li></Link>
          }) :"못받음"
          }
        </ul>
        <div className='flex justify-between'>
          <button className='bg-slate-100 p-2'>왼쪽</button>
          <button className='bg-slate-100 p-2'>오른쪽</button>
        </div>
      </div>
    </main>
  )
}
