import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect} from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const collection = [
    {
        src:'//theme.hstatic.net/200000525857/1001199676/14/brand_1.jpg?v=6',
        alt: 'brand_1_title',
        title: "Ngày hội online",
        href: "/collections/all" 
    },
    {
        src:'//theme.hstatic.net/200000525857/1001199676/14/brand_2.jpg?v=6',
        alt: 'brand_2_title',
        title: "Xả hàng giá sốc",
        href: "/collections/all" 
    },
    {
        src:'//theme.hstatic.net/200000525857/1001199676/14/brand_3.jpg?v=6',
        alt: 'brand_3_title',
        title: "Bách hóa sale vô vàn",
        href: "/collections/all" 
    },
    {
        src:'//theme.hstatic.net/200000525857/1001199676/14/brand_4.jpg?v=6',
        alt: 'brand_4_title',
        title: "Mua sắm thoải mái",
        href: "/collections/all" 
    },
    {
        src:'//theme.hstatic.net/200000525857/1001199676/14/brand_5.jpg?v=6',
        alt: 'brand_5_title',
        title: "alt",
        href: "/collections/all" 
    },
    {
        src:'//theme.hstatic.net/200000525857/1001199676/14/brand_7.jpg?v=6',
        alt: 'brand_6_title',
        title: "Ngày hội online",
        href: "/collections/all" 
    },
    {
        src:'//theme.hstatic.net/200000525857/1001199676/14/brand_8.jpg?v=6',
        alt: 'brand_7_title',
        title: "Ngày hội online",
        href: "/collections/all" 
    }
]

const postsList = [
    {
        img: '//file.hstatic.net/200000525857/article/frame_2_4daac0fef8e34c2e8ee0fb2b957d5e5c_medium.jpg', 
        alt: 'Sự lên ngôi của 6 xu hướng hứa hẹn sẽ làm bùng nổ làng thời trang hè 2022',
        href:'/blogs/news/su-len-ngoi-cua-6-xu-huong-hua-hen-se-lam-bung-no-lang-thoi-trang-thu-dong-2019',
        title:'Sự lên ngôi của 6 xu hướng hứa hẹn sẽ làm bùng nổ làng thời trang hè 2022',
        time: 'Th 5 09/06/2022',
        content: 'Chào mùa mới, các tín đồ thời trang lại rục rịch tìm kiếm ý tưởng độc – lạ để refresh...',
    },
    {
        img: '//file.hstatic.net/200000525857/article/frame_3_cdad2237d84f4f14aa49f83f853f2eeb_medium.jpg',  
        alt:'Bye bye ngay mái tóc bết dính khó ưa chỉ với 6 mẹo siêu dễ',
        href:'/blogs/news/bye-bye-ngay-mai-toc-bet-dinh-kho-ua-chi-voi-6-meo-sieu-de', 
        title:'Bye bye ngay mái tóc bết dính khó ưa chỉ với 6 mẹo siêu dễ',
        time: 'Th 5 09/06/2022',
        content: 'Tình trạng mái tóc đổ dầu bết dính, khó chịu và ngứa ngáy vào những ngày hè nắng “đổ lửa”...',
    },
    {
        img: 'src="//file.hstatic.net/200000525857/article/frame_4_094d386d986b4a2b9ea23c0d22c80041_medium.jpg',
        alt:'Nghệ thuật tiết kiệm tiền hiệu quả từ những tín đồ sống tối giản',
        href:'/blogs/news/nghe-thuat-tiet-kiem-tien-hieu-qua-tu-nhung-tin-do-song-toi-gian', 
        title: 'Nghệ thuật tiết kiệm tiền hiệu quả từ những tín đồ sống tối giản',
        time: 'Th 5 09/06/2022',
        content: 'Những mẹo sau có thể giúp bạn lập được kế hoạch quản lý tài chính chặt chẽ nhưng vẫn cảm...',
    },
    {
        img: '//file.hstatic.net/200000525857/article/frame_5_bd219c804e494c24a9c042d35b2f8bbb_medium.jpg',
        alt:'Diện #OOTD siêu xinh, loạt người đẹp Việt tỏa sáng hơn cả nắng hè',
        href:'blogs/news/dien-ootd-sieu-xinh-loat-nguoi-dep-viet-toa-sang-hon-ca-nang-he',
        title:'Diện #OOTD siêu xinh, loạt người đẹp Việt tỏa sáng hơn cả nắng hè',
        time: 'Th 5 09/06/2022',
        content: 'Mùa hè đã trôi qua được nửa chặng đường, trên trang cá nhân của hotgirl Việt cũng ngập tràn các...',
    },
    {
        img:'//file.hstatic.net/200000525857/article/frame_6_46d54b10ae1d4fe0b98ccc144514fe01_medium.jpg',
        alt:'Bí kíp da mịn dáng xinh nằm trong 8 loại trà thiên nhiên này',
        href:'/blogs/news/bi-kip-da-min-dang-xinh-nam-trong-8-loai-tra-thien-nhien-nay',
        title:'Bí kíp da mịn dáng xinh nằm trong 8 loại trà thiên nhiên này',
        time: 'Th 5 09/06/2022',
        content: 'Không những mang đến những hiệu quả đáng ngờ trong việc cải thiện làn da và vóc dáng, trà thảo...',
    },
]

const FashionTrends = () => {
    const [clicked, setClicked] = useState(false);
    const [btnState, setBtnState] = useState(false);
    const combineDisplayedItems = (winsize) => {
        switch (true) {
            case window.innerWidth <= 1200:
                return 2;
            case window.innerWidth <= 1450:
                return 4;
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
    const [displayedcollection, setDisplayedcollection] = useState(collection.slice(0, displayedItems));

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

    useEffect(()=>{
        // Lắng nghe sự kiện thay đổi kích thước màn hình
        window.addEventListener('resize', updateDisplayedItems);

        document.addEventListener('click', handleButtonClick);

        // Hủy lắng nghe khi component bị unmount
        return () => window.removeEventListener('resize', updateDisplayedItems);
    },[clicked])
    
    const handleButtonClick =()=> {
        const displayedcollectionLength = displayedcollection.length;
        const collectionLength = collection.length;

        setIsFirstItem(displayedcollection[0] === collection[0]);
        setIsLastItem(displayedcollection[displayedcollectionLength - 1] === collection[collectionLength-1]);      
    }

    const updateState = (displayedcollectionlength, collectionlength) =>{
        setDisplayedcollection(collection.slice(displayedcollectionlength, collectionlength));
        return displayedcollection;
    }
    const handleShowRemainingItemsPrev = () => {
        const displayedcollectionLength = combineDisplayedItems(window.innerWidth);
        const collectionLength = collection.length;
        let numberPrev = displayedcollectionLength;
        let numberNext = collectionLength;
        
        numberPrev = collection.indexOf(displayedcollection[0]);
        if((numberPrev - displayedcollectionLength ) > 0 )
        {
            numberNext = numberPrev;
            numberPrev = numberNext - displayedcollectionLength ;
        } else{
            numberNext = displayedcollectionLength;
            numberPrev = 0;
        }
        
        updateState(numberPrev, numberNext)
        setClicked(!clicked);
    };
    const handleShowRemainingItemsNext = () => {
        const displayedcollectionLength = displayedcollection.length;
        const collectionLength = collection.length;
        let numberPrev = displayedcollectionLength;
        let numberNext = collectionLength;
        numberPrev = collection.indexOf(displayedcollection[displayedcollectionLength - 1]) + 1;
        if((displayedcollectionLength + numberPrev) > collectionLength)
        {
            numberPrev = collectionLength -displayedcollectionLength ;
            numberNext = collectionLength;
        } else{

            numberNext = displayedcollectionLength + numberPrev;
        }
        updateState(numberPrev, numberNext)
        setClicked(!clicked);
    };
    return (
        <>
            <div id="fashion-trends">
               <div className="trend-top">
                    <div className="left">
                        <img class="img-fluid mx-auto" src="//theme.hstatic.net/200000525857/1001199676/14/imgtext_2_img.jpg?v=6" width="795" height="475" alt="imgtext_img"/>
                    </div>
                    <div className="right">
                        <h2 className="text">Xu hướng thời trang 2022</h2>
                        <p className="text">
                            Khoe eo! Mùa Hè mang đến lời mời gọi hãy để chiếc eo thon là tâm điểm phong cách. BST Miu Miu ngập tràn crop top với hơi hướng Y2K đầy sức sống. Versace cũng cho thấy làn da rám nắng tuyệt đẹp khi diện crop top mang dấu ấn thập niên 80. Và crop top còn được thấy ở khắp các BST thời trang mùa Xuân – Hè 2022 của Chanel, Salvatore Ferragamo, Givenchy, Lanvin,…
                        </p>
                        <a class="link" href="/collections/all">Xem chi tiết</a>
                    </div>
                </div> 
                <h2 className="text" style={{fontSize: '32px', fontWeight:'700'}}>@ Follow Instagram</h2>
                <div className="trend-follow">
                    <div className="content-trend-follow">
                        <a class="insta_item " href="https://www.instagram.com">
                            <img loading="lazy"
                                src="//theme.hstatic.net/200000525857/1001199676/14/insta_1_img.jpg?v=6" 
                                alt="insta_1_img.jpg"/>
                            <div class="insta-icon-wrap">
                                <div class="insta-icon">
                                    <FontAwesomeIcon icon={faInstagram} />				
                                </div>
                            </div>
                        </a>
                        <a class="insta_item " href="https://www.instagram.com">
                            <img loading="lazy"
                                src="//theme.hstatic.net/200000525857/1001199676/14/insta_2_img.jpg?v=6" 
                                alt="insta_2_img.jpg"/>
                            <div class="insta-icon-wrap">
                                <div class="insta-icon">
                                    <FontAwesomeIcon icon={faInstagram} />						
                                </div>
                            </div>
                        </a>
																								
                        <a class="insta_item " href="https://www.instagram.com">
                            <img loading="lazy"
                                src="//theme.hstatic.net/200000525857/1001199676/14/insta_3_img.jpg?v=6" 
                                alt="insta_3_img.jpg"/>
                            <div class="insta-icon-wrap">
                                <div class="insta-icon">
                                     <FontAwesomeIcon icon={faInstagram} />							
                                </div>
                            </div>
                        </a>
																								
                        <a class="insta_item " href="https://www.instagram.com">
                            <img loading="lazy"
                                src="//theme.hstatic.net/200000525857/1001199676/14/insta_4_img.jpg?v=6" 
                                alt="insta_4_img.jpg"/>
                            <div class="insta-icon-wrap">
                                <div class="insta-icon">
                                     <FontAwesomeIcon icon={faInstagram} />							
                                </div>
                            </div>
                        </a>
																								
                        <a class="insta_item " href="https://www.instagram.com">
                            <img loading="lazy"
                                src="//theme.hstatic.net/200000525857/1001199676/14/insta_5_img.jpg?v=6" 
                                alt="insta_5_img.jpg"/>
                            <div class="insta-icon-wrap">
                                <div class="insta-icon">
                                     <FontAwesomeIcon icon={faInstagram} />							
                                </div>
                            </div>
                        </a>
                    </div>
                </div>  
                <div className="outstanding-brand">
                    <h2 class="text">
                        <a class='link' href="/" title="Thương hiệu nổi bật">Thương hiệu nổi bật</a>
                    </h2>
                    <div className='body-outstanding-brand'>
                        {displayedcollection.map((coll, index) => (
                            <> 
                                <div className="item " key={index}>
                                    <a href="/collections/all" 
                                    title={coll.title}
                                    style={{width:'157px',height: '67px' }}
                                    > 					
                                        <img loading="lazy" 
                                            src={coll.src}
                                            alt= {coll.alt}
                                            width="157" 
                                            height="67"/>
                                    </a>
                                </div> 
                            </>
                        ))}
                        
                        <button 
                            className={`btn-prev ${isFirstItem ? 'disable-button' : ''}`} 
                            disabled={isFirstItem} 
                            onClick={handleShowRemainingItemsPrev}>
                                <ArrowBackIosNewIcon sx={{ fontSize: 18 }}/>
                            </button>
                        <button 
                            className={`btn-next ${isLastItem ? 'disable-button' : ''}`} 
                            disabled={isLastItem} 
                            onClick={handleShowRemainingItemsNext}>
                                <ArrowForwardIosIcon sx={{ fontSize: 18 }}/>
                            </button>
                        
                        
                    </div>
                </div> 
                <div className="news dflex-center w-85">
                    {/* start */}
                    <div class="title-module-main" style={{backgroundColor: '#212121'}}>
                        <h2 class="dflex-center-row text "> 
                            <a class='link' href="/blogs/news" title="TIN TỨC"  style={{color: '#ffffff', fontSize:'32px', padding:'10px'}}>TIN TỨC</a>
                        </h2>
                    </div>
                    <div class='dflex-center-column '> 
                        <div class="d-grid-2 mobile-custom-blog">
                            <div class="blog-list">
                                <div class="blogwp " >
                                    <a  class="text"
                                    href="/blogs/news/cam-hung-co-dien-hoi-sinh-thoi-lan-gio-moi-vao-xu-huong-phu-kien-thu-dong-2019" 
                                    title="Cảm hứng cổ điển “hồi sinh” thổi làn gió mới vào xu hướng phụ kiện thu đông 2022"
                                    >
                                        <img loading="lazy" 
                                            class="img-fluid m-auto mh-100 w-auto"
                                            src="https://file.hstatic.net/200000525857/article/frame_1_d23a5649648b4bc9b2ebcd350d088af2.jpg"
                                            alt="Cảm hứng cổ điển “hồi sinh” thổi làn gió mới vào xu hướng phụ kiện thu đông 2022"/>
                                    </a>
                                    <div class="content-blog">
                                        <h3 class='text-h3 '>
                                            <a class='text-h3' href="/blogs/news/cam-hung-co-dien-hoi-sinh-thoi-lan-gio-moi-vao-xu-huong-phu-kien-thu-dong-2019" title="Cảm hứng cổ điển “hồi sinh” thổi làn gió mới vào xu hướng phụ kiện thu đông 2022">Cảm hứng cổ điển “hồi sinh” thổi làn gió mới vào xu hướng phụ kiện thu đông 2022</a>
                                        </h3>
                                        <div class="media">
                                            <div class="media-body">
                                                <span className='text-2'>
                                                    <FontAwesomeIcon icon={faCalendarDay} fontSize={16} className='pl10 pr10'/>					
                                                    Th 3 14/06/2022	
                                                </span>
                                                <span class="text-2">
                                                    <FontAwesomeIcon icon={faClock}  fontSize={16} className='pl10 pr10'/>    
                                                    2 phút đọc 
                                                </span>
                                            </div>
                                        </div>
                                        <p class="dflex-center-column bottom-content-left">
                                            <span class="text text-2 pr20"> 
                                                Trong khi những chiếc túi xách có xu hướng nhỏ dần đều, phụ kiện bông tai càng dài lại càng được lòng các&nbsp;fashionistas trong mùa mốt...
                                            </span>
                                            <a class="button_link text" href="/blogs/news/cam-hung-co-dien-hoi-sinh-thoi-lan-gio-moi-vao-xu-huong-phu-kien-thu-dong-2019" title="Đọc tiếp">Đọc tiếp</a>
                                        </p>
                                    </div>
                                </div>									
                            </div> 
                            <div class="post-list">
                                {postsList.map((post, index)=>(
                                    <div className='post-item'>
                                        <a href={post.href}>
                                            <img loading="lazy" class="img-fluid" src={post.img} alt={post.alt}/>
                                        </a> 
                                        <div class="content-blog-b dflex-center-column">
                                            <a href={post.href} 
                                            title={post.title}>
                                                {post.title}
                                                </a>
                                            <span>
                                                {post.time}
                                            </span>
                                            <p class="text"> 
                                                {post.content}
                                            </p>                                    
                                            <a class="button_custome link" 
                                                href={post.href} 
                                                title="Đọc tiếp">
                                                    Đọc tiếp
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div> 
                        </div>
                        <div class="text-center">
                            <a href="blogs/news" title="Xem tất cả" class="btn-view dflex-center-row">
                                Xem tất cả 
                                <ArrowForwardIosIcon sx={{ fontSize: 18 }}/>
                            </a>
                        </div>
                    </div>
                    {/* end */}
                </div> 
            </div>
        </>
    );
};

export default FashionTrends;
