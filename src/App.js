import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './view/main';
import Project from './view/project';
import Notion from './view/notion';
import Write from './view/write';
import './css/mainBox.scss';

  /*Link를 사용하면 A태그와 달리 새로고침이 없어서 부드러운 전환이 가능하다*/
  /*JS에서 Export할때는 항상 첫글자가 대문자여야 오류가 발생하지 않는다*/

function App() {
  return (
  <BrowserRouter>
   <nav className='navi'>
     <Link to='/'>
         <button type='button' className='main-btn btn'>MAIN</button>
     </Link>
     <br />
     <Link to='/project'>
         <button type='button' className='project-btn btn'>PROJECT</button>
     </Link>
     <br />
     <Link to='/notion'>
         <button type='button' className='notion-ton btn'>NOTION</button>
     </Link>
     <br />
     <Link to='/write'>
         <button type='button' className='write-btn btn'>WRITE</button>
     </Link>
   </nav>
  <div className='main-box'>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/project" element={<Project />} />
      <Route path="/notion" element={<Notion />} />
      <Route path="/write" element={<Write />} />
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;