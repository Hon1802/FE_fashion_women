import React from 'react';
import * as IMAGE_LIST from "../../assets/home";
import { DatePicker, Space } from 'antd';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { PRODUCT_GROUPS } from "../../datas/data_product";
const { RangePicker } = DatePicker;

const listItem_2 = PRODUCT_GROUPS.cart;

const Carts = () => {

      const calculateTotalPrice = (list) => {
        let totalPrice = 0;
        list.forEach(item => {
            // Chuyển đổi giá thành số và loại bỏ dấu phẩy
            const priceWithoutComma = parseFloat(item.price.replace(/,/g, ''));
            // Nếu giá hợp lệ (không phải NaN) thì cộng vào tổng
            if (!isNaN(priceWithoutComma)) {
                totalPrice += priceWithoutComma;
            }
        });
        return totalPrice;
    };
    
    const totalPrice = calculateTotalPrice(listItem_2);

    return (
        <>
            <div id="checkout-page" className="dflex-center-column">
                <div className="w85-per">
                    <div className="content-top-page">
                        <Breadcrumb items={[{ label: "Giỏ hàng" }]} />
                    </div>
                    <div >
                        <h3 className="title-page">Thông tin đơn hàng</h3>
                        <span className="text">Bạn đã có tài khoản ? <a className="text" href="/account/login">Đăng nhập</a></span>
                    </div>
                    <div className='row cs-moblie'>
                        <div className='col-9 d-flex flex-column right' style={{background:'#ffffff', height:'fit-content'}}>
                            <div className='product-cart'>
                                <div className='row '>
                                    {listItem_2.map((item, index)=>(
                                        <div className='d-flex' key={item.id} style={{marginBottom:'20px'}}> 
                                            <span className='col-1'></span>                                       
                                            <img className='col-1' alt='img' src={item.img_1} />
                                            <span className='col-1'></span> 
                                            <span className='col-6'>{item.title}</span>
                                            <span className='col-3'>{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-3 d-inline-flex flex-column ' style={{background:'#e1e1e1', height:'fit-content', gap: '20px', padding:'20px 10px'}}> 
                            <h4 className='text'>HẸN GIỜ NHẬN HÀNG</h4>
                            <div>
                                <Space direction="vertical" size={12}>
                                    <RangePicker />                                
                                </Space>
                            </div>
                            <div className='d-inline-flex' style={{gap: '10px'}}>
                                <input type="checkbox" />
                                <label>Xuất hóa đơn công ty</label>
                            </div>
                            <div className='row w-100'>
                                <div className='col-8'>
                                    Tổng cộng
                                </div>
                                <div className='col-4'>
                                    {totalPrice.toLocaleString()}
                                </div>
                            </div>
                            <a href='/checkout/001' className='btn text w-100' style={{background:'#000000', color:'#fff'}}>Thanh toán</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Carts;