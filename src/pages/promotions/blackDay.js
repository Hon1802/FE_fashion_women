import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faExternalLink as faLink} from "@fortawesome/free-solid-svg-icons"
import { img30, img31 } from '../../assets/home';
import ListProduct from '../../datas/data_product';

import MultiActionAreaCard from '../../components/carts/Promotion';
import { Link } from 'react-router-dom';
function HomeBanner() {
  return (
    <div className="home-banner" data-setting="banner">
      <img src="https://mixcdn.egany.com/themes/assets/blackfriday_001_banner_img.jpg" alt="blackfriday_001_banner_img"/>
      <div id="countdown" data-setting="clock"></div>
      <Link id="#banner-top" className="next-section scroll-to fa fa-angle-down ega-hidden ega-block--sm"></Link>
    </div>
  );
}



const Block1=({url, title}) =>{
  return (
    <div id="block-1" className="block block--deals-1" data-setting="collection__1">
      <h2 className="block__title">
        <img alt='block' src={url}/>
      </h2>
      <div className="d-inline-flex flex-column justify-content-center align-items-center block-width ">
        <span>{title}</span>
        <Link className="fa fa-external-link" to="/collections/all">Xem tất cả</Link>
      </div>
    </div>
  );
}


// Define other components and their structure accordingly
const BlackDay=()=> {
  const firstEightProducts = ListProduct.slice(0, 8);

  return (
    <div id='blackDay'>
      <HomeBanner />
      <div className='d-inline-flex row'>
        
        <div className='col-4'>
          <Block1 url="https://mixcdn.egany.com/salespage/ega-style/blackfriday_001_banner_top_img_1.jpg" alt="blackfriday_001_banner_top_img_1.jpg" title="HÀNG TRIỆU ƯU ĐÃI"/>
        </div>
        <div className='col-4'> 
          <Block1 url="https://mixcdn.egany.com/salespage/ega-style/blackfriday_001_banner_top_img_2.jpg" title="SĂN HÀNG NGÀN KHUYẾN MÃI"/>
        </div>
        <div className='col-4'> 
          <Block1 url="https://mixcdn.egany.com/salespage/ega-style/blackfriday_001_banner_top_img_3.jpg" title="CHÀO HÈ RỰC CHÁY 2022"/>
        </div>
      </div>
      <h2>THỜI THƯỢNG VƯỢT QUA ĐẲNG CẤP</h2>
      <span style={{width:"100%"}}>
        <Link className='d-inline-flex justify-content-center align-items-center text' style={{width:"100%", gap:'10px'}} to='/collections/all' >Xem tất cả
          <i>
            <FontAwesomeIcon icon={faLink} fontSize={14} color='red'/>
          </i>
        </Link>
        </span>
        <div className='row'>
          <div className='col-3'>
            <img alt='left' src={img30} style={{width:'100%'}}/>
          </div>
          <div className='col-9'>
            <div className='cart-black'>
              {firstEightProducts.map((item, index)=>(
                <MultiActionAreaCard item={item}/>
              ))}
            </div>
          </div>
        </div>

        <h2>NĂNG ĐỘNG KHOE ĐƯỜNG CON</h2>
      <span style={{width:"100%"}}>
        <Link className='d-inline-flex justify-content-center align-items-center text' style={{width:"100%", gap:'10px'}} to='/collections/all' >Xem tất cả
          <i>
            <FontAwesomeIcon icon={faLink} fontSize={14} color='red'/>
          </i>
        </Link>
        </span>
        <div className='row'>
         
          <div className='col-9'>
            <div className='cart-black'>
              {firstEightProducts.map((item, index)=>(
                <MultiActionAreaCard item={item}/>
              ))}
            </div>
          </div>
          <div className='col-3'>
            <img alt='left' src={img31} style={{width:'100%'}}/>
          </div>
        </div>
      {/* Add other components */}
    </div>
  );
}

export default BlackDay;
