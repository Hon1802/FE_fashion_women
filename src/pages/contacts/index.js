
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as ICONSFONT from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Input, Space } from 'antd';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { SHOP } from "../../constants/shop-config";
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
                        <Breadcrumb items={[{ label: "Liên hệ" }]} />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <h1 className="title-page">{SHOP.fullName}</h1>
                    </div>
                    <div className="row custom-row-shop">
                        <div className="col-6 col-left d-flex flex-column" >
                            <div className='d-flex flex-column' style={{borderBottom: '1px solid', marginBottom:'20px'}}>

                                <div className="d-inline-flex align-items-center" style={{gap:'20px'}}>
                                    <FontAwesomeIcon icon={ICONSFONT.faMapMarkedAlt}/>
                                    <div className="content">Địa chỉ:
                                        <span className='text'> {SHOP.address}</span>                                
                                    </div> 
                                </div>
                                <div className="d-inline-flex align-items-center" style={{gap:'20px'}}>
                                    <FontAwesomeIcon icon={ICONSFONT.faMobileAlt}/>
                                    <div className="content">
                                        Số điện thoại: <a className="link" href={SHOP.hotlineHref}>{SHOP.hotline}</a>
                                    </div>
                                </div>
                                <div className="d-inline-flex align-items-center" style={{gap:'20px'}}>
                                    <FontAwesomeIcon icon={ICONSFONT.faEnvelope}/>
                                    <div className="content">
                                        Email: <a className="link" href={`mailto:${SHOP.email}`}>{SHOP.email}</a>
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
                                frameBorder="0"
                                src="https://www.google.com/maps?q=Quan+1,+Ho+Chi+Minh&output=embed"
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUS;