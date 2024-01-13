// import axios from 'axios';

import Nav from './components/Nav';
import Fotter from './components/Footer'

function App() {
  // const url = 'https://kecommerce.shop/api';

  //   axios.get(url + '/categories/TOP')
  //   .then(function (response) {
  //     // 성공 핸들링
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // 에러 핸들링
  //     console.log(error);
  //   })
  //   .finally(function () {
    //     // 항상 실행되는 영역
    //   });

    

  return (
    <>
      <Nav />
      <div className='h-[1200px]'></div>
      <Fotter />
    </>
  );
}

export default App;
