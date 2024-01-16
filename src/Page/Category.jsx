import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

export default function Product() {
  const category = useParams().id;
  const [products, setProducts] = useState({});
  
  
  useEffect(()=>{
    const url = `https://kecommerce.shop/api/categories/${category}`
    axios.get(url)
    .then(function (response) {
      setProducts(response.data.entity.products)
      console.log(url)
    })
    .catch(function (error) {
      console.log(error);
    })
  },[category])

  

  

  // const url = `https://kecommerce.shop/api/categories/${category}`
  // fetch(url)
  // .then(res => res.json())
  // .then(json => {
  //   setPoriducts(json)
  //   console.log(products)
  // })
  // .catch(err => console.error('error:' + err));
    
  return (
    <main className='flex justify-center'>
      <div className='w-[1200px] pt-10'>
        <ul className='flex flex-wrap gap-[50px]'>
          {
          products.length > 0 ? products.map((item) => {
            return <li key={item.id} className='w-[200px] hover:bg-gray-200 p-3'>
              <img src="https://placehold.co/200x200" alt={item.name} />
              <p>{item.name}</p>
              <p>{Number(item.price).toLocaleString()}</p>
            </li>
          }) :"못받음"
          }
        </ul>    
      </div>
    </main>
  )
}
