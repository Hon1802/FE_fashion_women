import React from 'react';
import * as IMAGE_LIST from "../../assets/home";
import { Button, Form, Input, Space, Select} from 'antd';
const { Option } = Select;
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
const SubmitButton = ({ form, children }) => {
    const [submittable, setSubmittable] = React.useState(false);
  
    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
      form
        .validateFields({
          validateOnly: true,
        })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));
    }, [form, values]);   
    return (
      <Button type="primary" htmlType="submit" disabled={!submittable}>
        {children}
      </Button>
    );
    
  };
const CheckOut = () => {
    const [form] = Form.useForm();
    const onProvinceChange = (value) => {
        switch (value) {
          case 'male':
            form.setFieldsValue({
              note: 'Hi, man!',
            });
            break;
          case 'female':
            form.setFieldsValue({
              note: 'Hi, lady!',
            });
            break;
          case 'other':
            form.setFieldsValue({
              note: 'Hi there!',
            });
            break;
          default:
        }
      };
    const onCityChange = (value) => {
        switch (value) {
          case 'HANOI':
            form.setFieldsValue({
              note: 'Hà Nội',
            });
            break;
          case 'DAN':
            form.setFieldsValue({
              note: 'Đà Nẵng',
            });
            break;
          case 'HCM':
            form.setFieldsValue({
              note: 'Hồ Chí Minh',
            });
            break;
          case 'other':
            form.setFieldsValue({
              note: 'Nơi khác',
            });
            break;
          default:
        }
      };
    
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
                                <a href="/">
                                    <span className="text" style={{color:"#000000"}}>Giỏ hàng</span>
                                </a>
                            </li> 
                            <p>/</p>
                            <li>
                                <a href="/pages/kiem-tra-don-hang">
                                    <span style={{color:"#BFBFBF"}} className="text">Thông tin đơn hàng</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <h3 className="title-page">Thông tin đơn hàng</h3>
                        <span className="text">Bạn đã có tài khoản ? <a className="text" href="/account/login">Đăng nhập</a></span>
                    </div>
                    <div className='row cs-moblie'>
                        <div className='col-6 left'>
                            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                                <Form.Item
                                    name="fullName"
                                    label="Họ và Tên"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập họ tên của bạn',
                                    },
                                    ]}
                                >
                                    <Input placeholder='Họ và Tên'/>
                                </Form.Item>
                                <Form.Item
                                    name="phone"
                                    label="Số điện thoại"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập số điện thoại',
                                    },
                                    {
                                        type: 'number',
                                        message: 'Vui lòng nhập đúng định dạng',
                                    },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập địa chỉ email!',
                                        },
                                        {
                                            type: 'email',
                                            message: 'Email không đúng định dạng!',
                                        },
                                        ]}
                                >
                                    <Input placeholder='Email'/>
                                </Form.Item>
                                <Form.Item
                                    name="address"
                                    label="Địa chỉ"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập địa chỉ',
                                    },
                                    ]}
                                >
                                    <Input placeholder='Địa chỉ' />
                                </Form.Item>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Form.Item
                                            name="city"
                                            label="chọn tỉnh / thành"
                                        >
                                            <Select
                                                    placeholder="Select a option and change input text above"
                                                    onChange={onCityChange}
                                                    allowClear
                                                    >
                                                    <Option value="HaNoi">Hà Nội</Option>
                                                    <Option value="DAN">Đà Nẵng</Option>
                                                    <Option value="HCM">Hồ Chí Minh</Option>
                                                    <Option value="other">other</Option>
                                                </Select>
                                        </Form.Item>
                                    </div>
                                    <div className='col-6'>
                                        <Form.Item
                                        name="province"
                                        label="chọn quận / huyện"
                                        >
                                             <Select
                                                    placeholder="Select a option and change input text above"
                                                    onChange={onProvinceChange}
                                                    allowClear
                                                    >
                                                    <Option value="HaNoi">Hà Nội</Option>
                                                    <Option value="DAN">Đà Nẵng</Option>
                                                    <Option value="HCM">Hồ Chí Minh</Option>
                                                    <Option value="other">other</Option>
                                                </Select>
                                        </Form.Item>
                                    </div>
                                </div>
                                <div>
                                    Phương thức vận chuyển
                                </div>
                                <div>
                                    Phương thức thanh toán
                                    <ul>
                                        <li>
                                        <label>
                                            <input type="checkbox" checked/> 
                                            Thanh toán khi giao hàng (COD)
                                            </label>

                                            </li>
                                    </ul>
                                </div>
                                <Form.Item>
                                    <Space>
                                    <SubmitButton form={form}>Hoàn tất đơn hàng</SubmitButton>
                                    </Space>
                                </Form.Item>
                            </Form>
                        </div>
                        <div className='col-6 d-flex flex-column right' style={{background:'#e1e1e1', height:'fit-content'}}>
                            <div className='product-cart'>
                                <div className='row'>
                                    {listItem_2.map((item, index)=>(
                                        <>                                        
                                            <img className='col-3' alt='img' src={item.img_1}/>
                                            <span className='col-6'>{item.title}</span>
                                            <span className='col-3'>{item.price}</span>
                                        </>
                                    ))}
                                </div>
                            </div>
                            <div className=' w-100 row'>
                                <input style={{background:'#fff', border:'1px solid', borderRadius:'10px', marginLeft:'10px'}} className='col-7' placeholder='Mã giảm giá'/>
                                <button className='col-4 btn' style={{ background:'#717171', color:'#fff', marginLeft:'10px' }}>Áp dụng</button>
                            </div>
                            <div className='row w-100'>
                                <div className='col-8'>
                                    Tạm tính
                                </div>
                                <div className='col-4'>
                                    {totalPrice.toLocaleString()}
                                </div>
                            </div>
                            <div className='row w-100'>
                                <div className='col-8'>
                                    Phí vận chuyển
                                </div>
                                <div className='col-4'>
                                    000
                                </div>
                            </div>
                            <div className='row w-100'>
                                <div className='col-8'>
                                    Tổng cộng
                                </div>
                                <div className='col-4'>
                                    {totalPrice.toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default CheckOut;