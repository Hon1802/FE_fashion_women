
const ForgotPassword = () => {
    return (
        <div id="login-page" className="dflex-center-column">
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
                            <span style={{color:"#BFBFBF"}} className="text">Quên mật khẩu</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div className="container">
                    <div className="wrap-background-aside">
                        <div className="heading-bar text-center">
                            <h1 className="title-page text mb-0">Đăng nhập tài khoản</h1>
                            <p className="mb-0 text">Bạn chưa có tài khoản ?
                            <a href="/account/register" className="btn-link-style btn-register"> Đăng ký tại đây</a></p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-5 offset-md-3 py-3 mx-auto">
                                <div className="page-login ">
                                    <div id="recover-password" className="form-signup page-login text-center">
                                        <h2>
                                            Đặt lại mật khẩu
                                        </h2>
                                        <p>
                                            Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu.
                                        </p>			
                                        <form accept-charset='UTF-8' action='/account/recover' method='post'>
                                            <input name='form_type' type='hidden' value='recover_customer_password'/>
                                            <input name='utf8' type='hidden' value='✓'/>

                                            <div className="form-signup" style={{color: 'red'}}>
                                                
                                            </div>
                                            <div className="form-signup clearfix">
                                                <fieldset className="form-group">
                                                    <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" className="form-control form-control-lg" value="" name="Email" id="recover-email" placeholder="Email" Required />
                                                </fieldset>
                                            </div>
                                            <div className="action_bottom my-3">
                                                <input className="btn btn-style btn-recover btn-block" type="submit" value="Lấy lại mật khẩu" />
                                                <a href="/account/login" className="btn btn-style link btn-style-active ">Quay lại</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                    <div className="block social-login--facebooks margin-top-20 text-center">
                                    <p className="a-center text-secondary">
                                        Hoặc đăng nhập bằng
                                    </p>
                                    <div id="wrap-social-login-plus"></div>
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
export default ForgotPassword;