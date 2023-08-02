import React, {  } from 'react';
import ReactPlayer from 'react-player';
import '../css/project.scss';

function Gosk() {
  return (
    <div className='my-box'>
      <div className='side-box'>
        <h2>Gosk Projet : 독서실 키오스크</h2>
        <span>
          <br/>
          <p>Github </p><br/> &#9654; <a href='https://github.com/korea-it-study/GoskProject' target='_blank'>페이지 상세 UI 및 세부 기능</a><br/><br/>
          <p>담당 작업 </p><br/> 
          &#9654; <b>front : </b> admin page 레이아웃 배열 <br/>
          &#9654; <b>back : </b> 회원가입, 로그인, admin page의 회원관리 (회원 수정 / 삭제 / 상세 조회) 상품 결제, 구매 내역 조회 <br/><br/>
          <p>작업 기간 </p><br/> 	&#9654; 2022. 12. 21 ~ 2023. 01. 17 ( 총 4주 ) <br/><br/>
          <p>팀원 </p><br/> &#9654; 백민경 | 조** | 오** ( 총 3명 ) <br/>
        </span>
      </div>
      <div className='player-wrapper'>
        <ReactPlayer
            className='react-player'
            url={'https://youtu.be/BFov1IY3G2A'}    // 플레이어 url
            width='500px'         // 플레이어 크기 (가로)
            height='700px'        // 플레이어 크기 (세로)
            muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
            playing={true} 
            loop={true}
        />
      </div>
      <div></div>
    </div>
  )
}
export default Gosk;