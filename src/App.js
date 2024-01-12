import axios from 'axios';

function App() {
  const url = 'https://kecommerce.shop/api';

    axios.get(url + '/categories/TOP')
    .then(function (response) {
      // 성공 핸들링
      console.log(response);
    })
    .catch(function (error) {
      // 에러 핸들링
      console.log(error);
    })
    .finally(function () {
      // 항상 실행되는 영역
    });

    

  return (
    <div>
      그냥 이커머스 
    </div>
  );
}

export default App;
