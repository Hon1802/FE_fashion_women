
import React, { useState, useEffect } from 'react';
const TopBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleButtonClick = () => {
        setIsVisible(false);
    };
    const handleScroll = () => {
        const header = document.getElementById('header');
        if(isVisible && header)
        {
            if (window.scrollY >= 50) {
                header.style.top = '0px';
            } else {
                header.style.top = '40px';
            }
        }
    };
    useEffect(() => {
        const header = document.getElementById('header');
        if (!isVisible && header) {
            header.style.top = '0px';
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [isVisible]);
    return (
        <>
            {isVisible && (
                <div id="top-banner-home">
                    <a href='/collections/all'>CHÀO HÈ SÔI NỔI - MỎI TAY SĂN QUÀ - ƯU ĐÃI X3</a>
                    <button type='button' onClick={handleButtonClick} aria-label='Đóng thông báo'><span aria-hidden='true'>×</span></button>
                </div>
            )}
        </>
    );
}
export default TopBanner;