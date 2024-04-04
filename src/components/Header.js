import React, { useEffect, useState, memo, forwardRef } from "react";
import Navbar from "./Navbar"
import { Link, useLocation } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import {logo} from '../assets/logo'
import { btnMobi } from "../assets";
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const navs = [
{
    id: "/",
    value: "Trang chủ",

},
{
    id: "/collections/all",
    value: "Sản phẩm",
    subchill: 'true',
    submenu: [
        {
            title: 'Bộ sưu tập',
            url: '/collections/all',
            submenuchill: [
                {
                    subname: 'Hoa cỏ mùa xuân',
                    url: '/collections/all'
                },
                {
                    subname: 'Bộ sưu tập mùa hè',
                    url: '/collections/all'
                },
                {
                    subname: 'Bộ sưu tập mùa thu',
                    url: '/collections/all'
                },
                {
                    subname: 'Bộ sưu tập mùa đông',
                    url: '/collections/all'
                },
                {
                    subname: 'Giáng sinh',
                    url: '/collections/all'
                },
                {
                    subname: 'Bộ sưu tập áo cưới',
                    url: '/collections/all'
                },
                {
                    subname: 'Bộ sưu tập outfits',
                    url: '/collections/all'
                },
            ]
        },
        {
            title: 'Mặc theo dịp',
            url: '/collections/all',
            submenuchill: [
                {
                    subname: 'Đi du lịch',
                    url: '/collections/all'
                },
                {
                    subname: 'Đi làm',
                    url: '/collections/all'
                },
                {
                    subname: 'Đi event',
                    url: '/collections/all'
                },
                {
                    subname: 'Đi tiệc',
                    url: '/collections/all'
                },
                {
                    subname: 'Lễ Halloween',
                    url: '/collections/all'
                },
                {
                    subname: 'Lễ Tình Nhân',
                    url: '/collections/all'
                },
                {
                    subname: 'Lễ Quốc Tế Thiếu Nhi',
                    url: '/collections/all'
                },
            ]
        },
        {
            title: 'Thời trang nữ',
            url: '/collections/thoi-trang-nu',
            submenuchill: [
                {
                    subname: 'Đầm dạ hội',
                    url: '/collections/all'
                },
                {
                    subname: 'Vest - Blazer',
                    url: '/collections/all'
                },
                {
                    subname: 'Áo sơ mi',
                    url: '/collections/all'
                },
                {
                    subname: 'Quần âu',
                    url: '/collections/all'
                },
                {
                    subname: 'Đồ ngủ',
                    url: '/collections/all'
                },
                {
                    subname: 'Đồ lót',
                    url: '/collections/all'
                },
                {
                    subname: 'Chân váy',
                    url: '/collections/all'
                },
            ]
        },
        {
            title: 'Thời trang vận động',
            url: '/collections/all',
            submenuchill: [
                {
                    subname: 'Đồ thể thao',
                    url: '/collections/all'
                },
                {
                    subname: 'Đồ bơi',
                    url: '/collections/all'
                },
                {
                    subname: 'Đồ tập gym',
                    url: '/collections/all'
                },
                {
                    subname: 'Đồ tập yoga',
                    url: '/collections/all'
                },
                {
                    subname: 'Đồ bộ',
                    url: '/collections/all'
                },
                {
                    subname: 'Phụ kiện gym',
                    url: '/collections/all'
                },
                {
                    subname: 'Phụ kiện yoga',
                    url: '/collections/all'
                },
            ]
        }
    ],
},
{
    id: "/collections/all",
    value: "Chương trình khuyến mãi",
    submenu: [
        {
            title: 'Landing Page - Flash Sale',
            url: '/collections/flash-sale',
        },
        {
            title: 'Landing Page - Black Friday',
            url: '/pages/landing-page-black-friday',
        },
        {
            title: 'Landing Page - Xmas',
            url: 'https://ega-style.myharavan.com/pages/landing-page-xmas',
        },
        {
            title: 'Landing Page - OnePage',
            url: 'https://ega-style.myharavan.com/pages/landing-page-onepage',
        }
    ],


},
{
    id: "/pages/kiem-tra-don-hang",
    value: "Đơn hàng",

},
{
    id: "/pages/he-thong-cua-hang",
    value: "Hệ thống cửa hàng",

},
{
    id: "/pages/about-us",
    value: "Giới thiệu",

},
{
    id: "/blogs/news",
    value: "Tin tức",

},
{
    id: "/pages/lien-he",
    value: "Liên hệ",
}
]


const Header = () => {
    const [open, setOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();
    const isLogin = location?.state?.isLogin

    // nav-mobile
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    // 

    useEffect(() => {
    }, [isSticky]);
   
    return (
        <>
            <header id="header" className={isSticky ? "sticky" : ""}>
                <div className="navb">
                    {/* <div className="overlay" /> */}
                    <img onClick={()=>handleClickOpen()} className="btn-mobile" alt="btn" src={btnMobi} ></img>
                    <div className="menu-mobile">
                        <div className="navbar-navb-mobile-btn"> 
                            <Dialog
                                className='custom-menu'
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-describedby="alert-dialog-slide-description"
                                fullWidth={true}
                                maxWidth="lg"
                                PaperProps={{
                                style: {
                                    height: '100%',
                                    width: '100%',
                                    maxWidth:'100%',
                                    margin: '0px',
                                    position: 'absolute',
                                    top: '0px',
                                    overflowY: 'visible',
                                }
                                }}
                            >
                                <DialogContent>
                                    <div>
                                        <div className="menu-top">
                                            <FontAwesomeIcon className="" icon={faUserCircle} fontSize={50} color="#fff"/>
                                            <div className="">
                                                <h3 className="text-1 text-font-1-3em">Tài khoản</h3>
                                                <a className="text-1 text-font-14" href='/login'>Đăng nhập</a>
                                            </div>
                                        </div>
                                        <div className="list-menu-mobile">
                                            <ul>
                                                {navs.map((item, index)=>(
                                                    <>
                                                        {item.submenu ? (
                                                            <>
                                                                <li className="text-font-1em">
                                                                    <a href={item.id} style={{color:'#000000'}} >
                                                                        {item.value} <ExpandMoreIcon sx={{ fontSize: 20 }} />
                                                                    </a>
                                                                </li>
                                                            </>
                                                        ):(

                                                            <li className="text-font-1em">
                                                                <a href={item.id} style={{color:'#000000'}} >
                                                                    {item.value}
                                                                </a>
                                                            </li>
                                                        )}
                                                    </>

                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <a to="/" className="navbar-title">
                        <img src={logo}></img>               
                    </a>
                    <nav className="nav_actions">
                        <Navbar />
                    </nav>
                    <div className="user-dropdown">
                        <UserDropdown />
                    </div>
                    {/* {isLogin || JSON.parse(localStorage.getItem("userDataUser"))?.token ?
                        <UserDropdown />
                        : <Link to="/login">
                            <div className="btn">Login</div>
                        </Link>
                    }  */}
                </div>
            </header>
        </>
    );
};

export default memo(Header);
