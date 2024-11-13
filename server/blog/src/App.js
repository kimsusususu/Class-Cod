import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목,글제목변경] = useState(['강남 카페 추천','성수 전시회 추천','노원 디저트 추천']);
 let [하트, 하트변경]= useState(0); //초기값0
  let posts = '공맛 릉집';
  function 제목바꾸기(){
    글제목변경(['여의도 카페 추천','강남 전시회 추천','건대 디저트 추천'])
    var a=글제목
    
  }
  
  return (
    <div className="App">
      <div className='black-nav'>
        <div style={{color :'greenyellow',fontsize : '25px'}}>React Blog</div>
      </div>
      <div className="list">
      <h4>{글제목[0]}<span onClick={ () =>{하트변경(하트 +1)}}>❤</span> {하트} </h4>
      <p>작성자:김범수</p>
      <hr/>
      <h4>{글제목[1]}</h4>
      <p>작성자:김밥수</p>
      <hr/>
      <h4>{글제목[2]}</h4>
      <p>작성자:김도둑</p>
      <hr/>
      <button onClick={제목바꾸기}>Button</button>
      <button onClick={}>원상태</button>
      </div>
    </div>
  );
}

export default App;
