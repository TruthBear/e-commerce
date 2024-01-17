import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { Link, useLocation, useParams } from 'react-router-dom'

export default function Product() {
  const category = useParams().id;
  const [products, setProducts] = useState({});
  const [page, setPage] = useState(1)
  const location = useLocation();
  
  useEffect(()=>{
    const url = `https://kecommerce.shop/api/categories/${category}/detail?page=${page}`
    axios.get(url)
    .then(function (response) {
      setProducts(response.data.entity.products)
    })
    .catch(function (error) {
      console.log(error);
    })
  },[category, page])

  function handlePageChange(page) {
    console.log(`active page is ${page}`);
    setPage(page);
  }
  
  return (
    <div className=''>
      <ul className='flex flex-wrap gap-x-[50px] gap-y-[10px] w-[1200px]'>
        {
        products.length > 0 ? products.map((item) => {
          return <Link  key={item.id} to={`/product/${item.id}`}><li className='w-[200px] hover:bg-gray-200 p-3'>
          <img src="https://placehold.co/200x200" alt={item.name} />
          <p>{item.name}</p>
          <p>{item.price.toLocaleString()}원</p>
        </li></Link>
        }) :"못받음"
        }
      </ul>
      <div className='flex justify-center'>
        <Pagination
          activePage={page}
          itemsCountPerPage={20}
          totalItemsCount={10000}
          pageRangeDisplayed={10}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </div>
    </div>
  )
}
