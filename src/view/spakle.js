import React, {  } from 'react';
import ReactPlayer from 'react-player';
import '../css/project.scss';

function Spakle() {
  return (
    <div className='my-box'>
      <div className='side-box'>
        <h2>Spakle Projet : 생수 판매 홈페이지</h2>
        <span>
          <br/>
          <p>Github </p><br/> &#9654; <a href='https://github.com/Dr-Cheokcheok/sparkle' target='_blank'>페이지 상세 UI 및 세부 기능</a><br/><br/>
          <p>담당 작업 </p><br/> 
          &#9654; <b>front : </b> footer, mypage, admin page의 상품 조회,<br/> index page 상품 조회 <br/>
          &#9654; <b>back : </b> 주문배송 / 주문 상세 / 관리자 페이지 상품 /<br/> 제품 상세 페이지 조회, 주문 결제, 회원 탈퇴,<br/> 관리자 페이지 상품 삭제 <br/><br/>
          <p>작업 기간 </p><br/> 	&#9654; 2022. 11. 09 ~ 2022. 12. 07 ( 총 4주 ) <br/><br/>
          <p>팀원 </p><br/> &#9654; 백민경 | 조** | 조** | 이** ( 총 4명 ) <br/>
        </span>
      </div>
      <div className='player-wrapper'>
        <ReactPlayer
            className='react-player'
            url={'https://youtu.be/_vzIlvvlkUo'}    // 플레이어 url
            width='700px'         // 플레이어 크기 (가로)
            height='500px'        // 플레이어 크기 (세로)
            muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
            playing={true} 
            loop={true}
        />
      </div>
    </div>
  )
}
export default Spakle;