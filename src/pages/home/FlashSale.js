import ProductGrid from "../../components/products/ProductGrid";
import * as IMAGE_LIST from "../../assets/home";
import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import Countdown from 'react-countdown';
import jsonData from '../../datas/data.json';
import { PRODUCT_GROUPS } from "../../datas/data_product";

const maxFlashDiscount = Math.max(...PRODUCT_GROUPS.flashSale.map((product) => parseInt(product.discount, 10) || 0));


const FlashSale = () => {
    const [value, setValue] = useState('1');

    const endDate = new Date(); 
    endDate.setHours(23, 59, 59, 0);

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

    useEffect(() => {
        const fetchData = async () => {
          try {
            if (Array.isArray(jsonData)) {
                jsonData.map((item, index) => {
                //   console.log(item);
                  return null;
                });
              }

          } catch (error) {
            console.error('Error fetching JSON file:', error);
          }
        };
    
        fetchData();
      }, []);

    const onChange = (key) => {
      };

    return (
        <>
            <div className="flash-sale-container">
                <div className="flash-time">
                    <div className="flash-left">
                        <a href="/collections/flash-sale" title="Flash Sale">GIẢM ĐẾN {maxFlashDiscount}%</a>
                    </div>
                    <div className="flash-right">
                        <span className="flashsale__countdown-label">Kết thúc sau</span>
                        <div className="flashsale__countdown">
                            <Countdown date={endDate}  renderer={renderer} />
                        </div>
                    </div>
                </div>
                <div className="flash-body"> 
                    <Tabs items={[
                        { key: "1", label: "Giảm giá sốc", children: <ProductGrid items={PRODUCT_GROUPS.flashSale} /> },
                        { key: "2", label: "Năng động ngày hè", children: <ProductGrid items={PRODUCT_GROUPS.active} /> },
                        { key: "3", label: "Chào biển nắng mới", children: <ProductGrid items={PRODUCT_GROUPS.beach} /> }
                    ]} />
                </div>
                <div className="btn-botton-flash">
                    <button>Xem Tất Cả &gt; </button>
                </div>
            </div>
            
        </>
    );
};

export default FlashSale;
