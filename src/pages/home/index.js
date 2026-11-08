import Banner from "./Banner";
import FlashSale from "./FlashSale";
import Policies from "./Policies";
import SessionCollection from "./SessionCollection";
import SessionCoupons from "./SessionCoupons";
import BannerCenter from "./BannerCenter";
import CollectionSummer from "./CollectionSummer";
import PlayVideo from "./PlayVideo";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle as playBtn} from '@fortawesome/free-regular-svg-icons';
import CollectionBottom from "./CollectionBottom";
import LookBook from "./LookBook";
import Comments from "./Comments";
import FashionTrends from "./FashionTrends";
import ModalHome from "../../components/modals/home";

const Home = () => {
    const [isOpen, setOpen] = useState(false);
   
    const openVideo = (event) => {
       
        setOpen(!isOpen);
    };

    

    return (
        <div id="home">
            <div className="main-wrapper">
                <ModalHome isOpen />
                <Banner/>
                <Policies/>
                <SessionCollection/>
                <SessionCoupons/>
                <FlashSale/>
                <BannerCenter/>
                <CollectionSummer/>
                <section className="section-section-video">	
                    <div className="container-section-video">
                        {isOpen ? (
                            <>  
                                <div className="emb-video">
                                    <PlayVideo isOpen={isOpen} close={openVideo} />
                                </div>
                            </>

                        ):(
                            <>
                                <div className="embed-responsive">               
                                    <picture>
                                        <source media="(max-width: 480px)" srcSet="//theme.hstatic.net/200000525857/1001199676/14/section_video_bg_large.jpg?v=6"/>
                                        <source media="(max-width: 991px)" srcSet="//theme.hstatic.net/200000525857/1001199676/14/section_video_bg.jpg?v=6" />		
                                        <img alt="video" className="img-fluid object-contain" 
                                            src="//theme.hstatic.net/200000525857/1001199676/14/section_video_bg.jpg?v=6" 
                                            width="1170"
                                            height="600"
                                            loading="lazy"/>
                                        </picture>
                                </div>
                                <div className="video-play-button-wrap">
                                <div className="video-play-button"> 
                                    <svg className="icon" onClick={openVideo}>
                                        <FontAwesomeIcon icon={playBtn} color='white'/>
                                    </svg>				
                                </div>
                                </div> 
                            </>
                        )}
                    </div>
                </section>
                <CollectionBottom/>
                <LookBook/>
                <Comments/>
                <FashionTrends/>
                
                {/* <Footer/> */}
            </div>
        </div>
    )
}
export default Home;