import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ListProduct from '../../datas/data_product';
import { img29 } from '../../assets/home';
import { Link } from "react-router-dom"
const ModalHome = (props) => {
  const {isOpen} = props;
  const randomList = ['001', '002', '003', '004','005', '006', '007', '008' ];
  const findProductById = (productId) => {
    return ListProduct.find(product => product.id === productId);
    };

// Sử dụng hàm findProductById để tìm sản phẩm với id cụ thể
  const product = findProductById(randomList[Math.floor(Math.random() * randomList.length)]);

  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}>
        
          <Link to="/collections/all" >

            <img alt='img-banner' src={img29} style={{width:'100%'}}/>
          </Link>
      </Modal>
    </>
  );
};
export default ModalHome;