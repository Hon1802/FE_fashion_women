import React from 'react';
import * as IMAGE_LIST from "../../assets/home";
import { Button, Form, Input, Space, Select} from 'antd';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { PRODUCT_GROUPS } from "../../datas/data_product";
const { Option } = Select;
const listItem_2 = PRODUCT_GROUPS.cart;
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
                        <Breadcrumb items={[{ label: "Giỏ hàng", to: "/cart" }, { label: "Thông tin đơn hàng" }]} />
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
                                            <input type="checkbox" defaultChecked/> 
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
                                        <React.Fragment key={index}>                                        
                                            <img className='col-3' alt='img' src={item.img_1}/>
                                            <span className='col-6'>{item.title}</span>
                                            <span className='col-3'>{item.price}</span>
                                        </React.Fragment>
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