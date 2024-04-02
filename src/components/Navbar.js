import { useState, useEffect} from 'react'
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {icon_menu} from '../assets/logo'

import { hover } from '@testing-library/user-event/dist/hover';
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
                        url: '/collections/do-ngu'
                    },
                ]
            },
            {
                title: 'Thời trang nữ',
                url: '/collections/thoi-trang-nu',
                submenuchill: [
                    {
                        subname: 'Đầm dạ hội',
                        url: '/collections/dam'
                    },
                    {
                        subname: 'Vest - Blazer',
                        url: '/collections/vest-blazer'
                    },
                    {
                        subname: 'Áo sơ mi',
                        url: '/collections/ao-so-mi'
                    },
                    {
                        subname: 'Quần âu',
                        url: '/collections/quan-au'
                    },
                    {
                        subname: 'Đồ ngủ',
                        url: '/collections/do-ngu'
                    },
                    {
                        subname: 'Đồ lót',
                        url: '/collections/do-lot'
                    },
                    {
                        subname: 'Chân váy',
                        url: '/collections/all'
                    },
                ]
            },
            {
                title: 'Thời trang vận động',
                url: '/collections/do-the-thao',
                submenuchill: [
                    {
                        subname: 'Đồ thể thao',
                        url: '/collections/do-the-thao'
                    },
                    {
                        subname: 'Đồ bơi',
                        url: '/collections/do-boi'
                    },
                    {
                        subname: 'Đồ tập gym',
                        url: '/collections/do-the-thao'
                    },
                    {
                        subname: 'Đồ tập yoga',
                        url: '/collections/do-the-thao'
                    },
                    {
                        subname: 'Đồ bộ',
                        url: '/collections/do-ngu'
                    },
                    {
                        subname: 'Phụ kiện gym',
                        url: '/collections/phu-kien'
                    },
                    {
                        subname: 'Phụ kiện yoga',
                        url: '/collections/phu-kien'
                    },
                ]
            }
        ],
    },
    {
        id: "/collections/all",
        value: "Chương trình khuyến mãi",
        icon: icon_menu,
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
                url: '/pages/landing-page-xmas',
            },
            {
                title: 'Landing Page - OnePage',
                url: '/pages/landing-page-onepage',
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


//Mobile expand button

const Navbar = () => {
  
    const [clicked, setClicked] = useState(false);

    const [btnState, setBtnState] = useState(false);
    // combine size with displayitem
    const combineDisplayedItems = (winsize) => {
   
        switch (true) {
            case window.innerWidth <= 900:
                return 1;
            case window.innerWidth <= 1200:
                return 2;
            case window.innerWidth <= 1350:
                return 3;
            case window.innerWidth <= 1450:
                return 4;
            case window.innerWidth <= 1700:
                return 5;
            case window.innerWidth <= 1900:
                return 6;
            case window.innerWidth <= 2100:
                return 7;
            default:
                return 8;
        }
    };
    const [displayedItems, setDisplayedItems] = useState(combineDisplayedItems(window.innerWidth)); 
    // 
    
    // Array display
    const [displayedNavs, setDisplayedNavs] = useState(navs.slice(0, displayedItems));

    // is last item
    const [isLastItem, setIsLastItem] = useState(false);

    // is first item
    const [isFirstItem, setIsFirstItem] = useState(true);

    function clickMenuBtn() {
        if (!btnState) {
            setBtnState(true);
        }

        else if (btnState) {
            setBtnState(false);
        }
    }

    const updateDisplayedItems = () => {
        setDisplayedItems(combineDisplayedItems(window.innerWidth))
        updateState(0, displayedItems)
        setIsFirstItem(true);
        setIsLastItem(false);  
        console.log(window.innerWidth)
        setClicked(!clicked);
    };

    const handleButtonClick =()=> {
        const displayedNavsLength = displayedNavs.length;
        const navsLength = navs.length;
        setIsFirstItem(displayedNavs[0] === navs[0]);
        setIsLastItem(displayedNavs[displayedNavsLength - 1] === navs[navsLength-1]);      
    }

    useEffect(()=>{
        // Lắng nghe sự kiện thay đổi kích thước màn hình
        window.addEventListener('resize', updateDisplayedItems);

        document.addEventListener('click', handleButtonClick);

        // Hủy lắng nghe khi component bị unmount
        return () => window.removeEventListener('resize', updateDisplayedItems);
    },[clicked])
    const updateState = (displayedNavslength, navslength) =>{
        setDisplayedNavs(navs.slice(displayedNavslength, navslength));
        return displayedNavs;
    }
    const handleShowRemainingItemsPrev = () => {
        const displayedNavsLength = combineDisplayedItems(window.innerWidth);
        const navsLength = navs.length;
        let numberPrev = displayedNavsLength;
        let numberNext = navsLength;
        
        numberPrev = navs.indexOf(displayedNavs[0]);
        if((numberPrev - displayedNavsLength ) > 0 )
        {
            numberNext = numberPrev;
            numberPrev = numberNext - displayedNavsLength ;
        } else{
            numberNext = numberPrev;
            numberPrev = 0;
        }
        
        updateState(numberPrev, numberNext)
        setClicked(!clicked);
    };

    
    const handleShowRemainingItemsNext = () => {
        const displayedNavsLength = displayedNavs.length;
        const navsLength = navs.length;
        console.log(displayedNavsLength, navsLength)
        let numberPrev = displayedNavsLength;
        let numberNext = navsLength;
        console.log(displayedNavs);
        console.log();
       
        numberPrev = navs.indexOf(displayedNavs[displayedNavsLength - 1]) + 1;
        console.log('1', numberPrev)
        if((displayedNavsLength + numberPrev) > navsLength)
        {
            numberNext = navsLength;
        } else{

            numberNext = displayedNavsLength + numberPrev;
        }
        
        console.log(numberPrev, numberNext)
        updateState(numberPrev, numberNext)
        setClicked(!clicked);
    };

    return (
        <div id="ftc-nav">
            
            
            <div className='navigation-horizontal'>
                <ul className="navbar-navb">
                    {displayedNavs.map((nav, index) => {
                        return (
                            <>
                                {nav.submenu ? (
                                    <li className="navb-item" key={index} style={{ cursor: "pointer" }}>
                                        <a className="navb-link" >
                                            <span><img src={nav.icon}></img>{nav.value} <ExpandMoreIcon sx={{ fontSize: 20 }} /></span>
                                        </a>

                                        {nav.subchill ? (
                                            <div className='dropdown2'>
                                                {nav.submenu.map((submenu, index) =>(
                                                    <div className='grid-item'>
                                                        <a key={index} href={submenu.url}><span>{submenu.title}</span></a>
                                                        <ul>
                                                            {submenu.submenuchill.map((chillmenu, index2)=>(
                                                                <li key={index2}>
                                                                    <a href={chillmenu.url}>{chillmenu.subname}</a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>                     
                                            ) : (
                                                <ul className="dropdown">
                                                    {nav.submenu.map((submenu, index) => (
                                                        <li key={index} className="dropdown-item">
                                                            <a href={submenu.url}><span>{submenu.title} </span></a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )
                                        }                                        
                                    </li >                                   
                                ) : (
                                    <li className="navb-item" key={index} >
                                        <a href={nav.id} className="navb-link" >
                                            <span>{nav.icon}{nav.value}</span>
                                        </a>
                                    </li>
                                )
                                }
                            </>
                        );
                    })}
                </ul>
                <div className='navigation-arrows '>
                    <button id='btn-prev' className={isFirstItem ? 'disable-button' : ''} disabled={isFirstItem} onClick={handleShowRemainingItemsPrev}><ArrowBackIosNewIcon sx={{ fontSize: 18 }}/></button>
                    <button id='btn-next' className={isLastItem ? 'disable-button' : ''} disabled={isLastItem} onClick={handleShowRemainingItemsNext}><ArrowForwardIosIcon sx={{ fontSize: 18 }}/></button>
                </div>
            </div>
        </div>
    );
}


export default Navbar;