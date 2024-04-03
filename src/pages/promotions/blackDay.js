import React from 'react';

function HomeBanner() {
  return (
    <div className="home-banner" data-setting="banner">
      <img src="https://mixcdn.egany.com/themes/assets/blackfriday_001_banner_img.jpg" alt="blackfriday_001_banner_img"/>
      <div id="countdown" data-setting="clock"></div>
      <a href="#banner-top" className="next-section scroll-to fa fa-angle-down ega-hidden ega-block--sm"></a>
    </div>
  );
}

function BannerTop() {
  return (
    <div id="banner-top" className="block--top" data-setting="sub_banner">
      <div className="ega-row"> 
        <div className="ega-col-12 ega-col-md-4" data-setting="sub_banner__1">
          <a className="block--top__item scroll-to" href="#block-1">
            <div className="block--top__img">
              <img src="https://mixcdn.egany.com/salespage/ega-style/blackfriday_001_banner_top_img_1.jpg" alt="blackfriday_001_banner_top_img_1.jpg"/>
            </div>
            <div className="block--top__caption">
              <h3>HÀNG HIỆU TRIỆU ƯU ĐÃI</h3>
              <span className="button__action">XEM NGAY</span>
            </div>
          </a>
        </div>
        {/* Repeat the above structure for sub_banner__2 and sub_banner__3 */}
      </div>
    </div>
  );
}

function Block1() {
  return (
    <div id="block-1" className="block block--deals-1" data-setting="collection__1">
      <h2 className="block__title">
        <img src="//theme.hstatic.net/200000525857/1001199676/14/blackfriday_001_coll_title_icon_img_1.png?v=6" alt="blackfriday_001_coll_title_icon_img_1.png" data-setting="collection__1__title_icon__img_url"/>
        <span>THỜI THƯỢNG VƯỢT ĐẲNG CẤP</span>
      </h2>
      <div className="block__viewall">
        <a className="fa fa-external-link" href="/collections/dam">Xem tất cả</a>
      </div>
      <div className="block__content">
        <div className="ega-row">
          {/* Repeat the product items structure */}
        </div>
      </div>
    </div>
  );
}

// Define other components and their structure accordingly

const BlackDay=()=> {
  return (
    <div>
      <HomeBanner />
      <BannerTop />
      <Block1 />
      {/* Add other components */}
    </div>
  );
}

export default BlackDay;
