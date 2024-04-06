import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle as iconGG, faFacebook as iconFA } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom";
const Login = () => {
    return ( 
        <div id="login-page" className="dflex-center-column">
            <div className="w85-per">
                <div>
                    <ul className="d-inline-flex g-2"> 
                        <li>
                            <Link to="/">
                                <span className="text" style={{color:"#000000"}}>Trang chủ</span>
                            </Link>
                        </li> 
                        <p>/</p>
                        <li>
                            <Link to="/login">
                                <span style={{color:"#BFBFBF"}} className="text">Đăng nhập</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="container">
                        <div className="wrap-background-aside">
                            <div className="heading-bar text-center">
                                <h1 className="title-page text mb-0">Đăng nhập tài khoản</h1>
                                <p className="mb-0 text">Bạn chưa có tài khoản ?
                                <Link to="/account/register" className="btn-link-style btn-register"> Đăng ký tại đây</Link></p>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-5 offset-md-3 py-3 mx-auto">
                                    <div className="page-login ">
                                        <div id="login" >
                                            <form accept-charset='UTF-8' action='/account/login' id='customer_login' method='post'>
                                                <input name='form_type' type='hidden' value='customer_login'/>
                                                <input name='utf8' type='hidden' value='✓'/>

                                                <div className="form-signup margin-bottom-15" style={{color: 'red'}}>
                                                
                                                </div>
                                                <div className="form-signup clearfix">
                                                    <fieldset className="form-group">
                                                        <label>Email <span className="required">*</span></label>
                                                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" className="form-control " value="" name="email" id="customer_email" placeholder="Email" Required />
                                                    </fieldset>
                                                    <fieldset className="form-group">
                                                        <label>Mật khẩu <span className="required">*</span> </label>
                                                        <input type="password" className="form-control " value="" name="password" id="customer_password" placeholder="Mật khẩu" Required/>
                                                        <small className="d-block my-2">Quên mật khẩu? Nhấn vào<Link to="/account/forgot-password" className="btn-link-style text-primary" > đây </Link></small>
                                                    </fieldset>
                                                    <div className="pull-xs-left button_bottom a-center  mb-3">
                                                        <button className="btn btn-block btn-style  btn-login"  type="submit" value="Đăng nhập">Đăng nhập</button>
                                                    </div>
                                                </div>
                                            
                                                <input id='b7622ec08b704d2ba194cf869f58cf21' name='g-recaptcha-response' type='hidden'/>
                                            </form>
                                        </div>
                                        
                                        <div id="recover-password" style={{display: 'none'}} className="form-signup page-login text-center">
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
                                                    <Link to="/account/login" className="btn btn-style link btn-style-active ">Quay lại</Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                        <div className="block social-login--facebooks margin-top-20 text-center">
                                        <p className="a-center text-secondary">
                                            Hoặc đăng nhập bằng
                                        </p>
                                        <div className="wrap-social-login-plus d-inline-flex " style={{gap:'30px'}}>
                                            <button className="d-inline-flex btn justify-content-center align-items-center " style={{gap:'10px', border: '1px solid red', width:'200px'}}>
                                                <i>
                                                    <FontAwesomeIcon icon={iconGG} color="red"/>
                                                </i>
                                                Google
                                            </button>
                                            <button className="d-inline-flex btn justify-content-center align-items-center " style={{gap:'10px', border: '1px solid #3b5998', width:'200px'}}>
                                                <i>
                                                    <FontAwesomeIcon icon={iconFA} color="#3b5998"/>
                                                </i>
                                                Facebook
                                            </button>
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
export default Login;