import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import { img29 } from '../../assets/home';

const STORAGE_KEY = 'home_promo_popup_seen';

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

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleClose}
      footer={null}
      centered
      width={480}
      className="home-promo-modal"
      destroyOnHidden
    >
      <Link to="/collections/all" onClick={handleClose} aria-label="Xem chương trình khuyến mãi">
        <img alt="Chương trình khuyến mãi" src={img29} className="home-promo-modal-img" />
      </Link>
    </Modal>
  );
};
export default ModalHome;
