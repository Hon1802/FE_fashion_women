import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react';

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
const News = () => {
    
    return (
        <>
        <div id="news-page" className="dflex-center-column">
                <div className="w85-per">
                    <div className="content-top-page">
                        <ul className="d-inline-flex g-2"> 
                            <li>
                                <a href="/">
                                    <span className="text" style={{color:"#000000"}}>Trang chủ</span>
                                </a>
                            </li> 
                            <p>/</p>
                            <li>
                                <a href="/pages/he-thong-cua-hang">
                                    <span style={{color:"#BFBFBF"}} className="text">Tin tức</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <div className="news dflex-center">
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
                </div>
            </div>
        </>
    )
}
export default News;