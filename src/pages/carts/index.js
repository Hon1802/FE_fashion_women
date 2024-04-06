import React from 'react';
import * as IMAGE_LIST from "../../assets/home";
import { DatePicker, Space, Select} from 'antd';
import { Link } from 'react-router-dom';
const { RangePicker } = DatePicker;

const listItem_2 =  [
    {
        id: '001',
        img_1: IMAGE_LIST.img1,
        img_2: IMAGE_LIST.img2,
        like: '0',
        vendor: 'EGANY',
        title: 'Váy Catarina',
        url:'/products/vay-easty-maxi',
        rating: '2',
        price: '2,350,000',
        compare_price: '4,700,000',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img: IMAGE_LIST.img1,
        }],
        product_promo_tag_img: '',
        percentCompleted: '67',
        number: '543',
        size:[
            {
                sizeId: 'S',
                category: '0'
            },
            {
                sizeId: 'L',
                category: '1'
            },
            {
                sizeId: 'M',
                category: '1'
            },
        ],
        add_Info:[{
            code: 'EGANY',
            condition_1: 'Hỗ trợ 10.000 phí Ship cho đơn hàng từ 200.000đ',
            condition_2: 'Miễn phí Ship cho đơn hàng từ 300.000đ',
            condition_3: 'Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì',
        }]
    },
    {
        id: '002',
        img_1: IMAGE_LIST.img3,
        img_2: IMAGE_LIST.img4,
        like: '1',
        vendor: 'EGANY',
        title: 'Đầm xoè Taylor',
        url:'/products/vay-easty-maxi',
        rating: '',
        price: '3,550,000',
        compare_price: '7,100,000',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img: IMAGE_LIST.img3,
        }],
        product_promo_tag_img: '',
        percentCompleted: '57',
        number: '323'
    },
    {
        id: '003',
        img_1: IMAGE_LIST.img5,
        img_2: IMAGE_LIST.img10,
        like: '1',
        vendor: 'EGANY',
        title: 'Váy East Maxi',
        url:'/products/vay-easty-maxi',
        rating: '',
        price: '2,150,000',
        compare_price: '4,300,000',
        discount: '50%',
        item_color_chosen:[{
            color: 'Hồng',
            img: IMAGE_LIST.img5,
        }],
        product_promo_tag_img: '',
        percentCompleted: '12',
        number: '33',
        size:[
            {
                sizeId: 'S',
                category: '0'
            },
            {
                sizeId: 'M',
                category: '1'
            },
        ],
    },
    {
        id: '004',
        img_1: IMAGE_LIST.img11,
        img_2: IMAGE_LIST.img12,
        like: '0',
        vendor: "Levi's",
        title: 'Đầm Ngọc San Hô AYDA',
        url:'/products/dam-ngoc-san-ho-ayda',
        rating: '',
        price: '8,400,000',
        compare_price: '16,800,000',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img: IMAGE_LIST.img11,
        }],
        product_promo_tag_img: '',
        percentCompleted: '23',
        number: '6'
    },]

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
                        <ul className="d-inline-flex g-2"> 
                            <li>
                                <Link to="/">
                                    <span className="text" style={{color:"#000000"}}>Giỏ hàng</span>
                                </Link>
                            </li> 
                            <p>/</p>
                            <li>
                                <Link to="/pages/kiem-tra-don-hang">
                                    <span style={{color:"#BFBFBF"}} className="text">Giỏ hàng</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <h3 className="title-page">Thông tin đơn hàng</h3>
                        <span className="text">Bạn đã có tài khoản ? <Link className="text" to="/account/login">Đăng nhập</Link></span>
                    </div>
                    <div className='row cs-moblie'>
                        <div className='col-9 d-flex flex-column right' style={{background:'#ffffff', height:'fit-content'}}>
                            <div className='product-cart'>
                                <div className='row '>
                                    {listItem_2.map((item, index)=>(
                                        <div className='d-flex' style={{marginBottom:'20px'}}> 
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
                            <Link to='/checkout/001' className='btn text w-100' style={{background:'#000000', color:'#fff'}}>Thanh toán</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Carts;