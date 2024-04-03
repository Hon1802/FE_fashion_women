
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as ICONSFONT from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Input, Space } from 'antd';
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
const ContactUS = () => {
    const [form] = Form.useForm();
    return (
        <>
        <div id="shop-system-page" className="dflex-center-column">
                <div className="w85-per">
                    <div className="content-top-page">
                        <ul className="d-inline-flex g-2"> 
                            <li>
                                <a href="/">
                                    <span className="text" style={{color:"#000000"}}>Trang chủ</span>
                                </a>
                            </li> 
                            <p>/</p>
                            <li>
                                <a href="/pages/he-thong-cua-hang">
                                    <span style={{color:"#BFBFBF"}} className="text">Liên hệ</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <h3 className="title-page">Công ty TNHH EGANY</h3>
                    </div>
                    <div className="row custom-row-shop">
                        <div className="col-6 col-left d-flex flex-column" >
                            <div className='d-flex flex-column' style={{borderBottom: '1px solid', marginBottom:'20px'}}>

                                <div className="d-inline-flex align-items-center" style={{gap:'20px'}}>
                                    <FontAwesomeIcon icon={ICONSFONT.faMapMarkedAlt}/>
                                    <div className="content">Địa chỉ:
                                        <span className='text'>150/8 Nguyễn Duy Cung, Phường 12, Tp.HCM</span>                                
                                    </div> 
                                </div>
                                <div className="d-inline-flex align-items-center" style={{gap:'20px'}}>
                                    <FontAwesomeIcon icon={ICONSFONT.faMobileAlt}/>
                                    <div className="content">
                                        Số điện thoại: <a className="link" title="19001393" href="tel:19001393">19001393</a>
                                    </div>
                                </div>
                                <div className="d-inline-flex align-items-center" style={{gap:'20px'}}>
                                    <FontAwesomeIcon icon={ICONSFONT.faEnvelope}/>
                                    <div className="content">
                                        Email: <a title="support@egany.com" className="link" href="mailto:support@egany.com">support@egany.com</a>
                                    </div> 
                                </div>
                            </div>
                            <h4 className='text'>Liên hệ với chúng tôi</h4>
                            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                                        <Form.Item
                                            name="FullName"
                                            label="Họ và tên"
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập họ tên của bạn',
                                            },
                                            ]}
                                        >
                                            <Input placeholder='Họ và tên'/>
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
                                        
                                        <Form.Item>
                                            <Space>
                                            <SubmitButton form={form}>Gửi liên hệ của bạn</SubmitButton>
                                            </Space>
                                        </Form.Item>
                                        </Form>
                        </div>
                        <div className="col-6">
                            <iframe
                                title='map'
                                width="100%"
                                height="100%"
                                frameborder="0"
                                src={`https://www.google.com/maps/place/150+Nguy%E1%BB%85n+Duy+Cung,+Ph%C6%B0%E1%BB%9Dng+12,+G%C3%B2+V%E1%BA%A5p,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+727010/@10.8394699,106.6423993,17z/data=!3m1!4b1!4m6!3m5!1s0x3175299cc282f5d9:0x7a1a1342b1de2f3f!8m2!3d10.8394699!4d106.6423993!16s%2Fg%2F11j8g_7ysr?entry=ttu`}
                                allowfullscreen=""
                                aria-hidden="false"
                                tabindex="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUS;