import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import '../css/write.scss';

function Write() {

    return (
        <div className='my-box'>
            <div className='comment-line'>
                <input className='comment-title'placeholder='제목' />
                <input className='comment-pw' type='password' placeholder='비밀번호' />
                <textarea className='comment-text' placeholder='내용' />
                <button type='button' className='comment-btn'>등록</button>
            </div>
            <div className='board-box'>
                <table>
                    <tr className='table-title'>
                        <th>No.</th>
                        <th>제목</th>
                        <th>삭제</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='board-title'>제목</td>
                        <td><FontAwesomeIcon icon={faXmark} /></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='board-title'>제목</td>
                        <td><FontAwesomeIcon icon={faXmark} /></td>
                    </tr>
                </table>
                <div className='board-back'>
                    <div className='board-popup'>
                        <div className='title'>제목</div>
                        <FontAwesomeIcon icon={faXmark} />
                        <div className='sub'>내용</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Write;