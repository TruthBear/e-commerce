import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Search() {
  const location = useLocation();
  const url = new URLSearchParams(location.search)
  console.log(url.get("name"))

  
  return (
    <div>전체 검색은 서비스 종료다!</div>
  )
}
