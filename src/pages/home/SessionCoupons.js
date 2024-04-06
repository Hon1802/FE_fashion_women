import React, { useState, useRef, useEffect } from 'react';
import { img_1, img_2, img_3, img_4 } from "../../assets/coupons";
import { Link } from 'react-router-dom';

const coupons_list = [
  {
    img: img_1,
    title: 'EGA10',
    desc: 'Mã giảm 10% cho đơn hàng tối thiểu 2tr',
    condition: 'Mã giảm 10% cho đơn hàng có giá trị tối thiểu 2 triệu',
    condition2: 'Giảm tối đa 500k'
  },
  {
    img: img_2,
    title: 'EGA15',
    desc: 'Mã giảm 15% cho đơn hàng tối thiểu 5tr',
    condition: 'Mã giảm 15% cho đơn hàng có giá trị tối thiểu 5 triệu',
    condition2: 'Giảm tối đa 2 triệu'
  },
  {
    img: img_3,
    title: 'EGA2022',
    desc: 'Đồng giá 2tr các sản phẩm ',
    link: 'Đầm AYADA',
    condition: 'Đồng giá 2 triệu cho nhóm sản phẩm',
    condition2: 'Tổng giá trị sản phẩm từ 5 triệu trở lên'
  },
  {
    img: img_4,
    title: 'EGAFREESHIP',
    desc: 'Miễn phí ship cho đơn hàng tối thiểu 1tr',
    condition: 'Miễn phí ship 100K cho đơn hàng tối thiểu từ 1 triệu',
    condition2: 'Áp dụng cho tất cả tỉnh / thành phố'
  },
];

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
        .catch(err => {
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
            <img src={item.img} alt="Coupon" />
          </div>
          <div className="coupons-info">
            <h2 className="text" id="coupons_code" value={item.title}>NHẬP MÃ: {item.title}</h2>
            <span className="text"> {item.desc} <Link to="/collections/san-pham-dong-gia/">{item.link}</Link></span>
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
                        <p> - {item.condition} <Link to='/collections/san-pham-dong-gia/'>{item.link}</Link> <br /> - {item.condition2}</p>
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
