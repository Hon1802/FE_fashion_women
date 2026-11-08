import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import toast from 'react-hot-toast';
import { img15 } from '../../assets/home';
import { COUPONS } from '../../constants/shop-config';

const STORAGE_KEY = 'home_promo_popup_seen';
const welcomeCoupon = COUPONS.find((coupon) => coupon.code === 'NEWMIRA');

// Chỉ hiển thị popup khuyến mãi một lần trong mỗi phiên truy cập
const shouldShowPopup = () => {
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== '1';
  } catch (e) {
    return true;
  }
};

const ModalHome = ({ isOpen = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(() => Boolean(isOpen) && shouldShowPopup());

  const handleClose = () => {
    setIsModalOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {
      // sessionStorage không khả dụng (chế độ ẩn danh...), bỏ qua
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(welcomeCoupon.code);
      toast.success(`Đã sao chép mã ${welcomeCoupon.code}`);
    } catch (e) {
      toast.error('Không thể sao chép, vui lòng nhập mã thủ công');
    }
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleClose}
      footer={null}
      centered
      width={720}
      className="home-promo-modal"
      destroyOnHidden
    >
      <div className="promo-modal">
        <div className="promo-modal-media">
          <img src={img15} alt="Đầm cổ vuông hoa nhí Laura" />
        </div>
        <div className="promo-modal-body">
          <h2>Tặng bạn {welcomeCoupon.value}</h2>
          <p>{welcomeCoupon.desc}. {welcomeCoupon.condition2}.</p>
          <button type="button" className="promo-modal-code" onClick={handleCopy} title="Sao chép mã">
            {welcomeCoupon.code}
            <span>Sao chép</span>
          </button>
          <Link to="/collections/all" className="page-btn" onClick={handleClose}>Mua sắm ngay</Link>
        </div>
      </div>
    </Modal>
  );
};
export default ModalHome;
