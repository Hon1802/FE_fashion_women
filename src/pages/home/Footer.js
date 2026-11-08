import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as ICONFORTAWESOME from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [openMenu_1, setOpenMenu_1] = useState(true);
    const [openMenu_2, setOpenMenu_2] = useState(true);

    const openMenu = (className) =>{
        // const menuSelect = document.getElementsByClassName(className);
        // console.log(menuSelect)
        // if(menuSelect){
        //     menuSelect[0].style.display = "flex";
        // }
        if(className==='ul-poli')
        {
            setOpenMenu_1(!openMenu_1);
        } else{
            setOpenMenu_2(!openMenu_2);
        }
    }
    return (
        <>
            <footer id='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 dfl-center ">
                            <div className="footer-block dfl-center-column">
                                <a href="/" className="logo-wrapper mb-3 d-block ">	
                                    <img loading="lazy"
                                        src="//theme.hstatic.net/200000525857/1001199676/14/logo-footer.png?v=6" 
                                        alt="logo EGA Style"
                                        width="164" 
                                        height="50"/>
                                </a> 
                                <div className="dgrid-2 pb10">
                                    <FontAwesomeIcon icon={ICONFORTAWESOME.faMapMarkedAlt} fontSize={16} color='white'/>
                                    <div className="text-footer">Địa chỉ:
                                        <span className='text-footer'>150/8 Nguyễn Duy Cung, Phường 12, Tp.HCM</span>
                                    </div>
                                </div>
                                <div className="dgrid-2 pb10">
                                    <FontAwesomeIcon icon={ICONFORTAWESOME.faMobileAlt} fontSize={16} color='white'/>
                                    <div className="text-footer">
                                        Số điện thoại: <a className="link" title="19001393" href="tel:19001393">19001393</a>
                                    </div>
                                </div>
                                <div className="dgrid-2 pb10">
                                    <FontAwesomeIcon icon={ICONFORTAWESOME.faEnvelope} fontSize={16} color='white'/>
                                    <div className="text-footer">
                                        Email: <a title="support@egany.com" className="link" href="mailto:support@egany.com">support@egany.com</a>
                                    </div>
                                </div> 
                                <div id="copyright" className="fot_copyright mt-3">                               
                                    <span className="text-footer">
                                    © Bản quyền thuộc về <a className='text-footer-3' href="https://egany.com" rel="nofollow noopener noreferrer" target="_blank">EGANY</a>
                                    | Cung cấp bởi <a className='text-footer-3' href="https://www.haravan.com/?utm_campaign=poweredby&utm_medium=haravan&utm_source=onlinestore" rel="nofollow noopener noreferrer" title="Haravan" target="_blank">Haravan</a>
                                    </span>
                                </div> 
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row mobile-footer-custom">
                                <div className="col-lg-4 dfl-center m-item">
                                    <div className="footer-block dfl-start-column">
                                        <h3 className="text-footer-4 d-flex gap-2" onClick={()=>openMenu('ul-poli')}>
                                            CHÍNH SÁCH 
                                            <i>
                                                <FontAwesomeIcon className='btn-mobile' icon={ICONFORTAWESOME.faArrowDown} fontSize={16} color='white'/>
                                            </i>
                                        </h3>
                                        <ul className='ul-poli' style={{display: `${openMenu_1 ? 'block' : 'none' } ` }}>
                                            <li>
                                                <a className="text-footer"  href="/pages/about-us" title="Giới thiệu">Giới thiệu</a>
                                            </li>
                                            <li>
                                                <a className="text-footer"  href="/pages/he-thong-cua-hang" title="Hệ thống cửa hàng">Hệ thống cửa hàng</a>
                                            </li>
                                            <li>
                                                <a className="text-footer"  href="/pages/cau-hoi-thuong-gap" title="Câu hỏi thường gặp">Câu hỏi thường gặp</a>
                                            </li>
                                            <li>
                                                <a className="text-footer"  href="/pages/goi-dien-dat-hang" title="Gọi điện đặt hàng">Gọi điện đặt hàng</a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 dfl-center m-item">
                                    <div className="footer-block dfl-start-column">
                                        <h3 className="text-footer-4 d-flex gap-2" onClick={()=>openMenu('ul-support')}>
                                            HỖ TRỢ KHÁCH HÀNG
                                            <i>
                                                <FontAwesomeIcon className='btn-mobile' icon={ICONFORTAWESOME.faArrowDown} fontSize={16} color='white'/>
                                            </i>
                                        </h3>
                                        <ul className='ul-support' style={{display: `${openMenu_2? 'block' : 'none'}`}}>
                                            <li>
                                                <a className='text-footer'  href="/pages/lien-he" title="Thông tin liên hệ">Thông tin liên hệ</a>
                                            </li>
                                            <li>
                                                <a className='text-footer'  href="/pages/chinh-sach-giao-hang" title="Chính sách giao hàng">Chính sách giao hàng</a>
                                            </li>
                                            <li>
                                                <a className='text-footer'  href="/pages/chinh-sach-doi-tra" title="Chính sách đổi hàng">Chính sách đổi hàng</a>
                                            </li>
                                            <li>
                                                <a className='text-footer'  href="/pages/chinh-sach-ban-hang" title="Chính sách bán hàng">Chính sách bán hàng</a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 dfl-center m-item">
                                    <div className="footer-block dfl-start-column">
                                        <h3 className="text-footer-4">ĐĂNG KÝ NHẬN TIN</h3>
                                        <div className="form_register ">
                                            <form acceptCharset='UTF-8' action='/account/contact' className='contact-form' method='post'>
                                                <input name='form_type' type='hidden' value='customer'/>
                                                <input name='utf8' type='hidden' value='✓'/>
                                                <div className="input-group">
                                                    <input type="hidden" id="newsletter-tags" name="contact[tags]" value="khách hàng tiềm năng, bản tin" />     
                                                    <input className="form-control" aria-label="Địa chỉ Email" type="email" placeholder="Nhập địa chỉ email"  id="newsletter-email" name="contact[email]"   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required autoComplete="off" />
                                                    <div className="btn-action dflex-center-row">
                                                        <button className='text-footer' type="submit" aria-label="Đăng ký nhận tin" name="subscribe">Đăng ký</button>
                                                    </div> 
                                                </div>
                                            </form>
                                        </div>
                                        <ul className="d-inline-flex flex-wrap align-items-center list-unstyled mt-2" style={{gap:'15px'}}>	
                                            <li>
                                                <a className="facebook link" href="https://www.facebook.com/egany.tech"
                                                title="Theo dõi Facebook EGA Style">
                                                    <img src="//theme.hstatic.net/200000525857/1001199676/14/facebook.png?v=6" loading="lazy" width="32" height="32" alt="facebook"/>	
                                                </a>
                                            </li>
                                            
                                            <li>
                                                <a className="zalo link" href="https://zalo.me/834141234794359440"   title="Theo dõi zalo EGA Style">
                                                    <img src="//theme.hstatic.net/200000525857/1001199676/14/zalo.png?v=6" loading="lazy" width="32" height="32" alt="zalo"/>	
                                                </a>
                                            </li>
                                            
                                            
                                            <li>
                                                <a className="instgram link" href="https://www.instagram.com/an.lihn/"   title="Theo dõi instgram EGA Style">
                                                    <img src="//theme.hstatic.net/200000525857/1001199676/14/instagram.png?v=6" loading="lazy" width="32" height="32" alt="instgram"/>	
                                                </a>
                                            </li>
                                             
                                            <li>
                                                <a className="youtube link" href="https://www.youtube.com/channel/UCh5jj4Q-vqQMdEhwRZAeZMA"   title="Theo dõi youtube EGA Style">
                                                    <img src="//theme.hstatic.net/200000525857/1001199676/14/youtube.png?v=6" loading="lazy" width="36" height="36" alt="youtube"/>	
                                                </a>
                                            </li> 
                                            <li>
                                                <a className="tiktok link" href="https://www.tiktok.com/@60giay.com"   title="Theo dõi tiktok EGA Style">
                                                    <img src="//theme.hstatic.net/200000525857/1001199676/14/tiktok.png?v=6" loading="lazy" width="36" height="36" alt="tiktok"/>	
                                                </a>
                                            </li> 
                                        </ul>
                                    </div>
                                </div>	
                            </div>
                            <div className="row">
                                <div className="col-lg-4"> 
                                    <a className="d-inline-block mt-3"  href="/collections/all" title="Logo bộ công thương">
                                    <img className="img-fluid" loading="lazy" 
                                        src="//theme.hstatic.net/200000525857/1001199676/14/logo_bct.png?v=6" 
                                        width="350"
                                        height="50"
                                        alt="Logo bộ công thương" />
                                    </a>
                                </div>
                                <div className="col-lg-4"> 
                                    <div className="trustbadge-wrap mt-4">                                     <div className="product-trustbadge d-flex flex-wrap align-items-center">
                                        <a href="/collections/all" 
                                        target="_blank"
                                        title="Phương thức thanh toán">
                                            <img className=" img-fluid" loading="lazy"
                                                src="//theme.hstatic.net/200000525857/1001199676/14/footer_trustbadge.png?v=6" 
                                                alt="Phương thức thanh toán"
                                                width=""
                                                height=""
                                                />
                                        </a>
                                   </div>
                                </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;