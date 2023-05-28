import React, {  } from 'react';
import '../css/mainBox.scss';

function Main() {
  return (
    <div className="my-box">
      <div className='pic-box'>
        <div><img className='my-pic' src='img/my-pic.jpg'></img></div>
        <span>
        <img src='img/java.png'></img>
        <img src='img/javascript.png'></img>
        <img src='img/react.png'></img><br/>
        <img src='img/spring.png'></img>
        <img src='img/mariadb.png'></img>
        <img src='img/git.png'></img>
        </span>
      </div>
      <div className="my-intro">
        <span>
          <p>Name </p> 백민경 <br/>
          <p>Bday </p> 1995. 11. 30<br/>
          <p>Address </p> 경기도 수원시 영통구<br/>
          <p>Phone </p> 010 - 8384 - 0713<br/>
          <p>E-mail </p> qorals1121@naver.com<br/>
          <br/>
          <p>Github </p> <a href="https://github.com/qorals1121" target="_blank">github.com/qorals1121</a><br/>
          <p>Linkedin </p> <a href='https://www.linkedin.com/in/backmin1121/' target='_blank'>linkedin.com/in/backmin1121</a><br/>
          <p>Notion </p> <a href='https://regal-veil-72f.notion.site/b71206342e764ace8f145884fdf204c0' target='_blank'>qorals1121.notion.site</a>
        </span>
      </div>
      <div className='education-box'>
            <span>
            <p>2014.03 ~ 2019.02</p> 동서대학교 | 치위생학과 졸업 <br/>
            <p>2019.01 ~ 2022.07</p> 치위생사 | 치과에서 근무 <br/>
            <p>2022.05 ~ 2022.06</p> 코리아IT아카데미 | JAVA 과정 수료 <br/>
            <p>2022.07 ~ 2022.12</p> 코리아IT아카데미 | 백엔드 과정 수료 <br/>
            <p>2022.11 ~ 2022.12</p> Spakle 사이트 클론 코딩 프로젝트 진행<br/>
            <p>2022.12 ~ 2023.01</p> Gosk 독서실 키오스크 클론 프로젝트 <br/>
            <p>2023.05 ~ </p> 리액트 공부 중
            </span>
      </div>
       <div className='skill-box'>

        </div>
    </div>
  )
}
export default Main;