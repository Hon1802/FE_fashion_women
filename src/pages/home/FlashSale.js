import CartHome from "../../components/carts/Home/CartHome";
import { flash_sale_icon } from "../../assets/logo";
import React, { useState, useRef, useEffect } from 'react';
import { Tabs } from 'antd';
import Countdown from 'react-countdown';
const {TabPane} = Tabs;
const listItem_1 =  [
    {
        img_1: '',
        img_2: '',
        vendor: 'EGANY',
        title: 'Váy Catarina',
        rating: '',
        price: '2,350,000₫',
        compare_price: '4,700,000₫',
        item_color_chosen:[{
            color: 'Xanh',
            icon:''
        }],
        product_promo_tag_img: '',
        flashsale_progressbar:[{
            img_flash: '',
            number: ''
        }]
    },
    {
        img_1: '',
        img_2: '',
        vendor: 'EGANY',
        title: 'Váy Catarina',
        rating: '',
        price: '2,350,000₫',
        compare_price: '4,700,000₫',
        item_color_chosen:[{
            color: 'Xanh',
            icon:''
        }],
        product_promo_tag_img: '',
        flashsale_progressbar:[{
            img_flash: '',
            number: ''
        }]
    },
    {
        img_1: '',
        img_2: '',
        vendor: 'EGANY',
        title: 'Váy Catarina',
        rating: '',
        price: '2,350,000₫',
        compare_price: '4,700,000₫',
        item_color_chosen:[{
            color: 'Xanh',
            icon:''
        }],
        product_promo_tag_img: '',
        flashsale_progressbar:[{
            img_flash: '',
            number: ''
        }]
    },
    {
        img_1: '',
        img_2: '',
        vendor: 'EGANY',
        title: 'Váy Catarina',
        rating: '',
        price: '2,350,000₫',
        compare_price: '4,700,000₫',
        item_color_chosen:[{
            color: 'Xanh',
            icon:''
        }],
        product_promo_tag_img: '',
        flashsale_progressbar:[{
            img_flash: '',
            number: ''
        }]
    },
    {
        img_1: '',
        img_2: '',
        vendor: 'EGANY',
        title: 'Váy Catarina',
        rating: '',
        price: '2,350,000₫',
        compare_price: '4,700,000₫',
        item_color_chosen:[{
            color: 'Xanh',
            icon:''
        }],
        product_promo_tag_img: '',
        flashsale_progressbar:[{
            img_flash: '',
            number: ''
        }]
    },
    {
        img_1: '',
        img_2: '',
        vendor: 'EGANY',
        title: 'Váy Catarina',
        rating: '',
        price: '2,350,000₫',
        compare_price: '4,700,000₫',
        item_color_chosen:[{
            color: 'Xanh',
            icon:''
        }],
        product_promo_tag_img: '',
        flashsale_progressbar:[{
            img_flash: '',
            number: ''
        }]
    },
]

const FlashSale = () => {

    const [value, setValue] = useState('1');

    const endDate = new Date(); 
    endDate.setHours(endDate.getHours() + 1);

    const Completionist = () => <span>You are good to go!</span>;
    // Renderer callback with condition
        const renderer = ({ hours, minutes, seconds, completed }) => {
            
            const formatTime = (time) => {
                return time < 10 ? `0${time}` : `${time}`;
              };
            if (completed) {
            // Render a complete state
            return <Completionist />;
            } else {
            // Render a countdown
            return (
                <div className="container-countdown">
                    <div className="hours countdown-item">
                        <span className="countdown-run">{formatTime(hours)}</span>
                        <span className="text-under">Giờ</span>
                    </div>
                    <div className="minius countdown-item">
                        <span className="countdown-run">{formatTime(minutes)}</span>
                        <span className="text-under">Phút</span>
                    </div>
                    <div className="second countdown-item">
                        <span className="countdown-run">{formatTime(seconds)}</span>
                        <span className="text-under">Giây</span>
                    </div>
                </div>
            );
            }
        };

    // tab
    const onChange = (key) => {
        console.log(key);
      };

    return (
        <>
            <div className="flash-sale-container">
                <div className="flash-time">
                    <div className="flash-left">
                        <a href="https://ega-style.myharavan.com/collections/san-pham-noi-bat" title="GIẢM SỐC 50%">GIẢM SỐC 50%</a>
                        <img src={flash_sale_icon} title="flash sale icon"></img>
                    </div>
                    <div className="flash-right">
                        <span className="flashsale__countdown-label">Kết thúc sau</span>
                        <div className="flashsale__countdown">
                            <Countdown date={endDate}  renderer={renderer} />
                        </div>
                    </div>
                </div>
                <div className="flash-body"> 
                    <Tabs>
                        <Tabs.TabPane tab="Hàng hiệu -50%" key="1">
                            {listItem_1.map((item, index)=>(
                                <>
                                    <CartHome item={item}/>
                                    <div>This is content tab 1</div>
                                </>
                            ))}
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Năng động ngày hè" key="2">
                            <div>This is content tab 2</div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Chào biển nắng mới" key="3">
                            <div>This is content tab 3</div>
                        </Tabs.TabPane>
                    </Tabs>
                    {/* <Tabs className="tab-design" defaultActiveKey="1" items={items} onChange={onChange} /> */}
                </div>
            </div>
            
        </>
    );
};

export default FlashSale;
