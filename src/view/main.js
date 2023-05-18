import React, {  } from 'react';

function Main() {
  return (
    <div className="my-box">
      <div className="my-pic"></div>
      <div className="my-intro">
        <span>
            언제나 편리함을 추구하는 신입 개발자, 백민경입니다.<br/>
            우리가 누리는 편리 뒤에는 기술이 숨어있습니다.<br/>
            그 기술을 끊임없이 연구하고,<br/> 직접 개발하는 개발자가 되고 싶습니다.<br/>
            <br/>
            <p>name : </p> 백민경 <br/>
            <p>bday : </p> 1995. 11. 30<br/>
            <p>phone : </p> 010 - 8384 - 0713<br/>
            <p>email : </p> qorals1121@naver.com<br/>
            <p>Git : </p> <a href="https://github.com/qorals1121" target="_blank">github.com/qorals1121</a>
        </span>
      </div>
      <div className='education-box'>
            <span>
            <p>2011.03 ~ 2014.02</p> 삼성여자고등학교 졸업 <br/>
            <p>2014.03 ~ 2019.02</p> 동서대학교 치위생학과 졸업 <br/>
            <p>2019.01 ~ 2022.07</p> 치과에서 근무 <br/>
            <p>2022.05 ~ 2022.06</p> 코리아IT아카데미 서면점 JAVA 과정 수료 <br/>
            <p>2022.07 ~ 2022.12</p> 코리아IT아카데미 서면점 백엔드 과정 수료 <br/>
            <p></p> java와 spring boot, front의 기초 학습<br/>
            <p></p> Spakle 사이트 클론 코딩 프로젝트 진행<br/>
            <p>2022.12 ~ 2023.01</p> Gosk 독서실 키오스크 클론 프로젝트 <br/>
            <p>2023.05 ~ </p> 리액트 독학 중
            </span>
      </div>
       <div className='skill-box'>
            <div className='btn-box'>
              <button className='front-btn'>front</button>
              <button className='back-btn'>back</button>
            </div>
            <div className='front-box'></div>
            <div className='back-box'></div>
        </div>
    </div>
  )
}
export default Main;