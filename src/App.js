import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Main from './view/main';
import Spakle from './view/spakle';
import Gosk from './view/gosk';
import Write from './view/write';
import './css/index.scss';

  /*Link를 사용하면 A태그와 달리 새로고침이 없어서 부드러운 전환이 가능하다*/
  /*JS에서 Export할때는 항상 첫글자가 대문자여야 오류가 발생하지 않는다*/

function App() {

  let [click, setClick] = useState("main");

  return (
  <BrowserRouter>
   <nav className='navi'>
     <Link to='/'>
         <button type='button' onClick={() => setClick("main")} className={click === 'main' ? 'btn click' : 'btn'}>main</button>
     </Link>
     <br />
     <Link to='/spakle'>
         <button type='button' onClick={() => setClick("spakle")} className={click === 'spakle' ? 'btn click' : 'btn'}>project 1</button>
     </Link>
     <br />
     <Link to='/gosk'>
         <button type='button' onClick={() => setClick("gosk")} className={click === 'gosk' ? 'btn click' : 'btn'}>project 2</button>
     </Link>
     <br />
     <Link to='/write'>
         <button type='button' onClick={() => setClick("write")} className={click === 'write' ? 'btn click' : 'btn'}>write</button>
     </Link>
   </nav>
  <div className='main-box'>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/spakle" element={<Spakle />} />
      <Route path="/gosk" element={<Gosk />} />
      <Route path="/write" element={<Write />} />
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;