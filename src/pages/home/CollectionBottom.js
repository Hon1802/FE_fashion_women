import CartHome from "../../components/carts/Home/CartHome";
import * as IMAGE_LIST from "../../assets/home";
import { Link } from "react-router-dom"
import { Select } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { Tabs } from 'antd';
import jsonData from '../../datas/data.json';
import { Button } from "reactstrap"
const {TabPane} = Tabs;
const { Option } = Select;
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
    }  
]

const CollectionBottom = () => {
    const [activeTab, setActiveTab] = useState('1');
    const handleChange = (value) =>{
        if(value.value)
        {
            console.log(value.value)
            setActiveTab(value.value);
        }else{
            console.log(value)
            setActiveTab(value);
            console.log(activeTab)
        }
        }
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

    return (
        <>
            <div className="collection-container-bottom">
                
                <div className="collection-header">
                    <h2 className="text">Bạn đang xem</h2>
                    <Select
                        labelInValue
                        defaultValue={{ key: 'Sản phẩm hot' }}
                        style={{ width: 120 }}
                        onChange={handleChange}
                    >
                        <Option value="1">Sản phẩm hot</Option>
                        <Option value="2">Sản phẩm outfits</Option>
                    </Select>
                </div>

                <div className="flash-body"> 
                    <Tabs activeKey={activeTab} onChange={handleChange}>
                        <Tabs.TabPane tab="Sản phẩm hot" key="1">
                            <div className="tab_first">
                                {listItem_1.map((item, index)=>(
                                    <>
                                        <CartHome item={item}/>
                                    </>
                                ))}
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Sản phẩm outfits" key="2">
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
                    <Button tag={Link} to="/collections/all"  >Xem Tất Cả &gt; </Button>
                </div>
            </div>
            
        </>
    );
};

export default CollectionBottom;
