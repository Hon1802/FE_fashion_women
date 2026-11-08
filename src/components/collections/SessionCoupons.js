import React, { useState, useRef, useEffect } from 'react';
import { img_1, img_2, img_3, img_4 } from "../../assets/coupons";
import { COUPONS } from "../../constants/shop-config";

const COUPON_IMAGES = [img_1, img_2, img_3, img_4];
const coupons_list = COUPONS.map((coupon, index) => ({
  img: COUPON_IMAGES[index % COUPON_IMAGES.length],
  title: coupon.code,
  desc: coupon.desc,
  condition: coupon.condition,
  condition2: coupon.condition2,
}));

const SessionCoupons = () => {
  const [showPopupIndex, setShowPopupIndex] = useState(null);
  const popupRef = useRef(null);

  const togglePopup = (index) => {
    setShowPopupIndex(showPopupIndex === index ? null : index);
  };

  const handleCopy = (text_cop, e) => {
    const elementCop = e.target;
    if (text_cop) {
      navigator.clipboard.writeText(text_cop)
        .then(() => {
          elementCop.textContent = 'Đã sao chép';
          setTimeout(() => {
            elementCop.textContent = 'Sao chép';
          }, 3000);
        })
        .catch(() => {
          elementCop.textContent = 'Lỗi sao chép';
        });
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopupIndex(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div id="container-coupons" className="coupons-body">
      {coupons_list.map((item, index) => (
        <div className="coupons-item" key={index}>
          <div className="coupons-images">
            <img src={item.img} alt={`Mã ${item.title}`} />
          </div>
          <div className="coupons-info">
            <h2 className="text" >NHẬP MÃ: {item.title}</h2>
            <span className="text"> {item.desc}</span>
            <div className="coupons-btn">
              <button onClick={(e) => handleCopy(item.title, e)} className="coppy-btn text btn-coppy">Sao chép</button>
              <button onClick={() => togglePopup(index)} className="condition-btn text">Điều kiện</button>
            </div>
          
          {showPopupIndex === index && (
            <div className="popup-overlay">
              <div className="popup">
                <div className="popup-content">
                  <div ref={popupRef} className="popup-style">
                    <h2 className="text">NHẬP MÃ: {item.title}</h2>
                    <div className="code_coupons">
                      <div className="text-coupon">Mã khuyến mãi:</div>
                      <span>{item.title}</span>
                    </div>
                    <div className="condition-popup">
                      <div className="text-condi text">Điều kiện: </div>
                      <div className="text-condi2 text">
                        <p> - {item.condition} <br /> - {item.condition2}</p>
                      </div>
                    </div>
                    <div className="btn-popup">
                      <button onClick={() => togglePopup(index)} className="close-popup text">Đóng </button>
                      <button onClick={(e) => handleCopy(item.title, e)} className="coppy-btn text btn-coppy">Sao chép</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SessionCoupons;
