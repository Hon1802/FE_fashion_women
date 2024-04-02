import React, { useState, useEffect } from 'react';
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
        console.log(openMenu_1);
        console.log(openMenu_2);
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
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 dfl-center ">
                            <div class="footer-block dfl-center-column">
                                <a href="/" class="logo-wrapper mb-3 d-block ">	
                                    <img loading="lazy"
                                        src="//theme.hstatic.net/200000525857/1001199676/14/logo-footer.png?v=6" 
                                        alt="logo EGA Style"
                                        width="164" 
                                        height="50"/>
                                </a> 
                                <div class="dgrid-2 pb10">
                                    <FontAwesomeIcon icon={ICONFORTAWESOME.faMapMarkedAlt} fontSize={16} color='white'/>
                                    <div class="text-footer">Địa chỉ:
                                        <span className='text-footer'>150/8 Nguyễn Duy Cung, Phường 12, Tp.HCM</span>
                                    </div>
                                </div>
                                <div class="dgrid-2 pb10">
                                    <FontAwesomeIcon icon={ICONFORTAWESOME.faMobileAlt} fontSize={16} color='white'/>
                                    <div class="text-footer">
                                        Số điện thoại: <a class="link" title="19001393" href="tel:19001393">19001393</a>
                                    </div>
                                </div>
                                <div class="dgrid-2 pb10">
                                    <FontAwesomeIcon icon={ICONFORTAWESOME.faEnvelope} fontSize={16} color='white'/>
                                    <div class="text-footer">
                                        Email: <a title="support@egany.com" class="link" href="mailto:support@egany.com">support@egany.com</a>
                                    </div>
                                </div> 
                                <div id="copyright" class="fot_copyright mt-3">                               
                                    <span class="text-footer">
                                    © Bản quyền thuộc về <a className='text-footer-3' href="https://egany.com" rel="nofollow" target="_blank">EGANY</a>
                                    | Cung cấp bởi <a className='text-footer-3' href="https://www.haravan.com/?utm_campaign=poweredby&utm_medium=haravan&utm_source=onlinestore" rel="nofollow" title="Haravan" target="_blank">Haravan</a>
                                    </span>
                                </div> 
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="row mobile-footer-custom">
                                <div class="col-lg-4 dfl-center m-item">
                                    <div class="footer-block dfl-start-column">
                                        <h3 class="text-footer-4 d-flex gap-2" onClick={()=>openMenu('ul-poli')}>
                                            CHÍNH SÁCH 
                                            <i>
                                                <FontAwesomeIcon className='btn-mobile' icon={ICONFORTAWESOME.faArrowDown} fontSize={16} color='white'/>
                                            </i>
                                        </h3>
                                        <ul className='ul-poli' style={{display: `${openMenu_1 ? 'block' : 'none' } ` }}>
                                            <li>
                                                <a class="text-footer"  href="/pages/about-us" title="Giới thiệu">Giới thiệu</a>
                                            </li>
                                            <li>
                                                <a class="text-footer"  href="/pages/he-thong-cua-hang" title="Hệ thống cửa hàng">Hệ thống cửa hàng</a>
                                            </li>
                                            <li>
                                                <a class="text-footer"  href="/pages/cau-hoi-thuong-gap" title="Câu hỏi thường gặp">Câu hỏi thường gặp</a>
                                            </li>
                                            <li>
                                                <a class="text-footer"  href="/pages/goi-dien-dat-hang" title="Gọi điện đặt hàng">Gọi điện đặt hàng</a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-4 dfl-center m-item">
                                    <div class="footer-block dfl-start-column">
                                        <h3 class="text-footer-4 d-flex gap-2" onClick={()=>openMenu('ul-support')}>
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
                                            <form accept-charset='UTF-8' action='/account/contact' class='contact-form' method='post'>
                                                <input name='form_type' type='hidden' value='customer'/>
                                                <input name='utf8' type='hidden' value='✓'/>
                                                <div class="input-group">
                                                    <input type="hidden" id="newsletter-tags" name="contact[tags]" value="khách hàng tiềm năng, bản tin" />     
                                                    <input class="form-control" aria-label="Địa chỉ Email" type="email" placeholder="Nhập địa chỉ email"  id="newsletter-email" name="contact[email]"   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required autocomplete="off" />
                                                    <div class="btn-action dflex-center-row">
                                                        <button className='text-footer' type="submit" aria-label="Đăng ký nhận tin" name="subscribe">Đăng ký</button>
                                                    </div> 
                                                </div>
                                            </form>
                                        </div>
                                        <ul className="d-inline-flex flex-wrap align-items-center list-unstyled mt-2" style={{gap:'15px'}}>	
                                            <li>
                                                <a class="facebook link" href="https://www.facebook.com/egany.tech"
                                                title="Theo dõi Facebook EGA Style">
                                                    <img src="//theme.hstatic.net/200000525857/1001199676/14/facebook.png?v=6" loading="lazy" width="32" height="32" alt="facebook"/>	
                                                </a>
                                            </li>
                                            
                                            <li>
                                                <a class="zalo link" href="https://zalo.me/834141234794359440"   title="Theo dõi zalo EGA Style">
                                                    <img src="//theme.hstatic.net/200000525857/1001199676/14/zalo.png?v=6" loading="lazy" width="32" height="32" alt="zalo"/>	
                                                </a>
                                            </li>
                                            
                                            
                                            <li>
                                                <a class="instgram link" href="https://www.instagram.com/an.lihn/"   title="Theo dõi instgram EGA Style">
                                                    <img src="//theme.hstatic.net/200000525857/1001199676/14/instagram.png?v=6" loading="lazy" width="32" height="32" alt="instgram"/>	
                                                </a>
                                            </li>
                                             
                                            <li>
                                                <a class="youtube link" href="https://www.youtube.com/channel/UCh5jj4Q-vqQMdEhwRZAeZMA"   title="Theo dõi youtube EGA Style">
                                                    <img src="//theme.hstatic.net/200000525857/1001199676/14/youtube.png?v=6" loading="lazy" width="36" height="36" alt="youtube"/>	
                                                </a>
                                            </li> 
                                            <li>
                                                <a class="tiktok link" href="https://www.tiktok.com/@60giay.com"   title="Theo dõi tiktok EGA Style">
                                                    <img src="//theme.hstatic.net/200000525857/1001199676/14/tiktok.png?v=6" loading="lazy" width="36" height="36" alt="tiktok"/>	
                                                </a>
                                            </li> 
                                        </ul>
                                    </div>
                                </div>	
                            </div>
                            <div class="row">
                                <div class="col-lg-4"> 
                                    <a class="d-inline-block mt-3"  href="/collections/all" title="Logo bộ công thương">
                                    <img class="img-fluid" loading="lazy" 
                                        src="//theme.hstatic.net/200000525857/1001199676/14/logo_bct.png?v=6" 
                                        width="350"
                                        height="50"
                                        alt="Logo bộ công thương" />
                                    </a>
                                </div>
                                <div class="col-lg-4"> 
                                    <div class="trustbadge-wrap mt-4">                                     <div class="product-trustbadge d-flex flex-wrap align-items-center">
                                        <a href="/collections/all" 
                                        target="_blank"
                                        title="Phương thức thanh toán">
                                            <img class=" img-fluid" loading="lazy"
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