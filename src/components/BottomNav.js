
import React, { useEffect } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CategoryIcon from '@mui/icons-material/Category';
import * as ICONFONTAWE from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';
const BottomNav = () => {
   
    useEffect(() => {
       

    }, []);
    return (
        <>
            <div id='bottom-nav'>
                <ul>
                    <li>
                        <a href='tel:19001393'>
                            <i>
                                <FontAwesomeIcon icon={ICONFONTAWE.faPhoneVolume} fontSize={17}/>
                            </i>
                            <span>Gọi điện</span>
                        </a>
                    </li>
                    <li>
                        <a href='mailto:support@egany.com'>
                            <i>
                                <ChatIcon style={{ fontSize: 17 }}/>
                            </i>
                            <span>Nhắn tin</span>
                        </a>
                    </li>
                    <li>
                        <Link to='coupon'>
                            <i>
                                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1925 10.3168C14.1925 10.3168 15.8202 3.97339 11.1847 0.845307C10.8829 3.06802 9.56809 5.05674 7.56779 6.31295C5.38523 7.84235 1.23702 11.3351 0.998304 15.3503C0.725106 18.8483 2.62627 22.209 5.90374 24.0243C6.13369 22.4677 7.03383 21.069 8.40198 20.1454C9.55456 19.4421 10.3483 18.3387 10.6042 17.0833C13.3993 18.7018 15.0807 21.5493 15.0322 24.5752L15.0308 24.5953C18.3206 23.4679 20.625 20.7259 20.9953 17.4988C21.6023 13.7499 19.7194 8.46792 17.8497 6.65348C16.9918 8.14599 15.733 9.40694 14.1925 10.3168Z" fill="url(#paint0_linear_79_196)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_79_196" x1="11.5042" y1="9.41804" x2="10.6412" y2="21.7589" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FB4B21"/>
                                    <stop offset="1" stop-color="#FBFAE3"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                            </i>
                            <span>Ưu đãi</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/collections/all'>
                            <i>
                                <CategoryIcon style={{ fontSize: 17 }}/>
                            </i>
                            <span>Danh mục</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/pages/he-thong-cua-hang'>
                            <i>
                                <FontAwesomeIcon icon={ICONFONTAWE.faLocationDot} fontSize={17}/>
                            </i>
                            <span>Cửa hàng</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default BottomNav;