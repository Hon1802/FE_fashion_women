
import React from 'react';
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

const Register = () => {
    const [form] = Form.useForm();
    return (
        <div id="register-page" className="dflex-center-column">
            <div className="w85-per">
                <div>
                    <ul className="d-inline-flex g-2"> 
                        <li>
                            <a href="/">
                                <span className="text" style={{color:"#000000"}}>Trang chủ</span>
                            </a>
                        </li> 
                        <p>/</p>
                        <li>
                            <a href="/login">
                                <span style={{color:"#BFBFBF"}} className="text">Đăng ký</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="container">
                        <div className="wrap-background-aside">
                            <div className="heading-bar text-center">
                                <h1 className="title-page text mb-0">Đăng ký tài khoản</h1>
                                <p className="mb-0 text">Bạn đã có tài khoản ?
                                <a href="/account/login" className="btn-link-style btn-register"> Đăng nhập tại đây</a></p>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-5 offset-md-3 py-3 mx-auto">
                                    <div className="page-register ">
                                    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                                        <Form.Item
                                            name="firstName"
                                            label="Họ"
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập họ của bạn',
                                            },
                                            ]}
                                        >
                                            <Input placeholder='Họ'/>
                                        </Form.Item>
                                        <Form.Item
                                            name="lastName"
                                            label="Tên"
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng tên của bạn!',
                                            },
                                            ]}
                                        >
                                            <Input placeholder='Tên'/>
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
                                            name="password"
                                            label="Mật khẩu"
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập mật khẩu',
                                            },
                                            ]}
                                        >
                                            <Input placeholder='Mật khẩu' type='password'/>
                                        </Form.Item>
                                        <Form.Item>
                                            <Space>
                                            <SubmitButton form={form}>Đăng ký</SubmitButton>
                                            </Space>
                                        </Form.Item>
                                        </Form>
                                    </div>
                                        <div className="block social-login--facebooks margin-top-20 text-center">
                                        <p className="a-center text-secondary">
                                            Hoặc đăng nhập bằng
                                        </p>
                                        <div id="wrap-social-login-plus">
                                            <button>Đăng nhập google</button>
                                            <button>Đăng nhập facebooks</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default Register;