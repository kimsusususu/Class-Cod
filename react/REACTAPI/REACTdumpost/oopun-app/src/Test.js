import React, { useState } from 'react';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

const Test = () => {
    //파업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    //파업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    };

    //파업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    };

    return(
        <div>
            <button type='button' onClick={openPostCode}>우편번호 검색</button>
            <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode onClose={closePostCode}/>
                    </PopupDom>
                )}
            </div>
        </div>
    )
}

export default Test;