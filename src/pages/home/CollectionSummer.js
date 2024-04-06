import CartHome from "../../components/carts/Home/CartHome";
import * as IMAGE_LIST from "../../assets/home";
// ** React Imports
import { Link } from "react-router-dom"
import { Button } from "reactstrap"
import { flash_sale_icon } from "../../assets/logo";
import React, { useState, useRef, useEffect } from 'react';
import { Tabs } from 'antd';
import Countdown from 'react-countdown';
import jsonData from '../../datas/data.json';
const {TabPane} = Tabs;

const listItem_1 =  [
    {
        id: '001',
        img_1: IMAGE_LIST.img1,
        img_2: IMAGE_LIST.img2,
        like: '0',
        vendor: 'EGANY',
        title: 'Váy Catarina',
        url:'/products/vay-easty-maxi',
        rating: '2',
        price: '2,350,000₫',
        compare_price: '4,700,000₫',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img: IMAGE_LIST.img1,
        }],
        product_promo_tag_img: '',
        percentCompleted: '67',
        number: '543',
        size:[
            {
                sizeId: 'S',
                category: '0'
            },
            {
                sizeId: 'L',
                category: '1'
            },
            {
                sizeId: 'M',
                category: '1'
            },
        ],
        add_Info:[{
            code: 'EGANY',
            condition_1: 'Hỗ trợ 10.000 phí Ship cho đơn hàng từ 200.000đ',
            condition_2: 'Miễn phí Ship cho đơn hàng từ 300.000đ',
            condition_3: 'Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì',
        }]
    },
    {
        id: '002',
        img_1: IMAGE_LIST.img3,
        img_2: IMAGE_LIST.img4,
        like: '1',
        vendor: 'EGANY',
        title: 'Đầm xoè Taylor',
        url:'/products/vay-easty-maxi',
        rating: '',
        price: '3,550,000₫',
        compare_price: '7,100,000₫',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img: IMAGE_LIST.img3,
        }],
        product_promo_tag_img: '',
        percentCompleted: '57',
        number: '323'
    },
    {
        id: '003',
        img_1: IMAGE_LIST.img5,
        img_2: IMAGE_LIST.img10,
        like: '1',
        vendor: 'EGANY',
        title: 'Váy East Maxi',
        url:'/products/vay-easty-maxi',
        rating: '',
        price: '2,150,000₫',
        compare_price: '4,300,000₫',
        discount: '50%',
        item_color_chosen:[{
            color: 'Hồng',
            img: IMAGE_LIST.img5,
        }],
        product_promo_tag_img: '',
        percentCompleted: '12',
        number: '33',
        size:[
            {
                sizeId: 'S',
                category: '0'
            },
            {
                sizeId: 'M',
                category: '1'
            },
        ],
    },
    {
        id: '004',
        img_1: IMAGE_LIST.img11,
        img_2: IMAGE_LIST.img12,
        like: '0',
        vendor: "Levi's",
        title: 'Đầm Ngọc San Hô AYDA',
        url:'/products/dam-ngoc-san-ho-ayda',
        rating: '',
        price: '8,400,000₫',
        compare_price: '16,800,000₫',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img: IMAGE_LIST.img11,
        }],
        product_promo_tag_img: '',
        percentCompleted: '23',
        number: '6'
    },
    {
        id: '004',
        img_1: IMAGE_LIST.img13,
        img_2: IMAGE_LIST.img14,
        like: '0',
        vendor: 'EGANY',
        title: 'Đầm dạ hội Raya',
        url:'/products/dam-da-hoi-raya',
        rating: '',
        price: '5,430,000₫',
        compare_price: '10,860,000₫',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img: IMAGE_LIST.img13,
        }],
        product_promo_tag_img: '',
        percentCompleted: '79',
        number: '443'
    },
    {
        id: '006',
        img_1: IMAGE_LIST.img15,
        img_2: IMAGE_LIST.img16,
        like: '0',
        vendor: 'EGANY',
        title: 'Đầm cổ vuông Laura',
        url:'/products/dam-co-vuong-laura',
        rating: '',
        price: '3,240,000₫',
        compare_price: '6,480,000₫',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img:IMAGE_LIST.img15
        }, {
            color: 'Đỏ',
            img:IMAGE_LIST.img16
        }],
        product_promo_tag_img: IMAGE_LIST.imgPro,
        percentCompleted: '25',
        number: '60'
    },
    {
        id: '007',
        img_1: IMAGE_LIST.img15,
        img_2: IMAGE_LIST.img16,
        like: '0',
        vendor: 'EGANY',
        title: 'Đầm cổ vuông Laura',
        url:'/products/dam-co-vuong-laura',
        rating: '',
        price: '3,240,000₫',
        compare_price: '6,480,000₫',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img: IMAGE_LIST.img15,
        }],
        product_promo_tag_img: IMAGE_LIST.imgPro,
        percentCompleted: '14',
        number: '34'
    },
    {
        id: '008',
        img_1: IMAGE_LIST.img15,
        img_2: IMAGE_LIST.img16,
        like: '0',
        vendor: 'EGANY',
        title: 'Đầm cổ vuông Laura',
        url:'/products/dam-co-vuong-laura',
        rating: '',
        price: '3,240,000₫',
        compare_price: '6,480,000₫',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img:IMAGE_LIST.img15
        }, {
            color: 'Đỏ',
            img:IMAGE_LIST.img1
        }],
        product_promo_tag_img: '',
        percentCompleted: '10',
        number: '20'
    },
    {
        id: '009',
        img_1: IMAGE_LIST.img15,
        img_2: IMAGE_LIST.img16,
        like: '0',
        vendor: 'EGANY',
        title: 'Đầm cổ vuông Laura',
        url:'/products/dam-co-vuong-laura',
        rating: '',
        price: '3,240,000₫',
        compare_price: '6,480,000₫',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img: IMAGE_LIST.img16,
        }],
        product_promo_tag_img: IMAGE_LIST.imgPro,
        percentCompleted: '95',
        number: '390'
    },
    {
        id: '010',
        img_1: IMAGE_LIST.img15,
        img_2: IMAGE_LIST.img16,
        like: '0',
        vendor: 'EGANY',
        title: 'Đầm cổ vuông Laura',
        url:'/products/dam-co-vuong-laura',
        rating: '',
        price: '3,240,000₫',
        compare_price: '6,480,000₫',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img: IMAGE_LIST.img16,
        }],
        product_promo_tag_img: '',
        percentCompleted: '80',
        number: '320'
    },
   
]

const CollectionSummer = () => {
    // tab

    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log("jsonData")
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
        console.log(key);
      };

    return (
        <>
            <div className="collection-container">
                
                <div className="collection-header">
                    <h2 className="text">Bộ sưu tập xuân hè</h2>
                </div>

                <div className="flash-body"> 
                    <Tabs>
                        <Tabs.TabPane tab="EGA New" key="1">
                            <div className="tab_first">
                                {listItem_1.map((item, index)=>(
                                    <>
                                        <CartHome item={item}/>
                                    </>
                                ))}
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="EGA Season" key="2">
                            <div className="tab_first">
                                {listItem_1.map((item, index)=>(
                                    <>
                                        <CartHome item={item}/>
                                    </>
                                ))}
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Top Fashion" key="3">
                        <div className="tab_first">
                            {listItem_1.map((item, index)=>(
                                <>
                                    <CartHome item={item}/>
                                </>
                            ))}
                            </div>
                        </Tabs.TabPane>
                    </Tabs>
                </div>
                <div className="btn-botton-flash">
                    <Button tag={Link} to="/collections/all">Xem Tất Cả &gt; </Button>
                </div>
            </div>
            
        </>
    );
};

export default CollectionSummer;
