import SessionCoupons from "../../components/collections/SessionCoupons";
import * as IMAGECOLLECTION from "../../assets/products"
import * as React from "react"
import * as IMAGE_LIST from "../../assets/home";
import { Tag } from 'antd';
import { Pagination } from 'antd';
import CartHome from "../../components/carts/Home/CartHome";
import { Select } from 'antd';
import { Link } from "react-router-dom";

const { Option } = Select;
const ListInfor =
    {
        brand: [{
            value: 'Cotton On Body'
        },
        {
            value: 'EGANY'
        },
        {
            value: "Mango"
        },
        {
            value: "Levi's"
        },
        {
            value: 'CK'
        },
        {
            value: 'Tommy Hilfiger'
        },],
        colors: [{
            color: "Đỏ",
        },{
            color: "Cam",
        },{
            color: "Tím",
        },{
            color: "Xám",
        },{
            color: "Trắng",
        },{
            color: "Đen",
        },],
        budgets:[{
            budget: 'Giá dưới 1,000,000'
        },{
            budget: '1,000,000 - 2,000,000'
        },{
            budget: '2,000,000 - 3,000,000'
        },{
            budget: '3,000,000 - 5,000,000'
        },{
            budget: '5,000,000 - 7,000,000'
        },{
            budget: 'Giá trên 10,000,000'
        },],
        categorys:[{
            type: 'Váy',
        },{
            type: 'Đồ bơi',
        },{
            type: 'Đồ thể thao',
        },{
            type: 'Quần',
        },{
            type: 'Áo',
        },{
            type: 'Đồ ngủ',
        },{
            type: 'Vest blazer',
        },{
            type: 'Đồ lót',
        },{
            type: 'Phụ kiện',
        },{
            type: 'Váy trễ 2 vai',
        }],
        deliveryService:[{
            delivery:'Miễn phí giao hàng',
        },{
            delivery:'Giao hàng nhanh 4h',
        },{
            delivery:'Giao hàng tiết kiệm',
        },]
    }
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
        price: '2,350,000',
        compare_price: '4,700,000',
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
        price: '3,550,000',
        compare_price: '7,100,000',
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
        price: '2,150,000',
        compare_price: '4,300,000',
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
        price: '8,400,000',
        compare_price: '16,800,000',
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
        price: '5,430,000',
        compare_price: '10,860,000',
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
        price: '3,240,000',
        compare_price: '6,480,000',
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
        price: '3,240,000',
        compare_price: '6,480,000',
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
        price: '3,240,000',
        compare_price: '6,480,000',
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
        price: '3,240,000',
        compare_price: '6,480,000',
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
        price: '3,240,000',
        compare_price: '6,480,000',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img: IMAGE_LIST.img16,
        }],
        product_promo_tag_img: '',
        percentCompleted: '80',
        number: '320'
    },
    {
        id: '011',
        img_1: IMAGE_LIST.img1,
        img_2: IMAGE_LIST.img2,
        like: '0',
        vendor: 'EGANY',
        title: 'Váy Catarina',
        url:'/products/vay-easty-maxi',
        rating: '2',
        price: '2,350,000',
        compare_price: '4,700,000',
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
        id: '012',
        img_1: IMAGE_LIST.img3,
        img_2: IMAGE_LIST.img4,
        like: '1',
        vendor: 'EGANY',
        title: 'Đầm xoè Taylor',
        url:'/products/vay-easty-maxi',
        rating: '',
        price: '3,550,000',
        compare_price: '7,100,000',
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
        id: '013',
        img_1: IMAGE_LIST.img5,
        img_2: IMAGE_LIST.img10,
        like: '1',
        vendor: 'EGANY',
        title: 'Váy East Maxi',
        url:'/products/vay-easty-maxi',
        rating: '',
        price: '2,150,000',
        compare_price: '4,300,000',
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
        id: '014',
        img_1: IMAGE_LIST.img11,
        img_2: IMAGE_LIST.img12,
        like: '0',
        vendor: "Levi's",
        title: 'Đầm Ngọc San Hô AYDA',
        url:'/products/dam-ngoc-san-ho-ayda',
        rating: '',
        price: '8,400,000',
        compare_price: '16,800,000',
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
        id: '015',
        img_1: IMAGE_LIST.img13,
        img_2: IMAGE_LIST.img14,
        like: '0',
        vendor: 'EGANY',
        title: 'Đầm dạ hội Raya',
        url:'/products/dam-da-hoi-raya',
        rating: '',
        price: '5,430,000',
        compare_price: '10,860,000',
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
        id: '016',
        img_1: IMAGE_LIST.img15,
        img_2: IMAGE_LIST.img16,
        like: '0',
        vendor: 'EGANY',
        title: 'Đầm cổ vuông Laura',
        url:'/products/dam-co-vuong-laura',
        rating: '',
        price: '3,240,000',
        compare_price: '6,480,000',
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
        id: '017',
        img_1: IMAGE_LIST.img15,
        img_2: IMAGE_LIST.img16,
        like: '0',
        vendor: 'EGANY',
        title: 'Đầm cổ vuông Laura',
        url:'/products/dam-co-vuong-laura',
        rating: '',
        price: '3,240,000',
        compare_price: '6,480,000',
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
        id: '018',
        img_1: IMAGE_LIST.img15,
        img_2: IMAGE_LIST.img16,
        like: '0',
        vendor: 'EGANY',
        title: 'Đầm cổ vuông Laura',
        url:'/products/dam-co-vuong-laura',
        rating: '',
        price: '3,240,000',
        compare_price: '6,480,000',
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
        id: '019',
        img_1: IMAGE_LIST.img15,
        img_2: IMAGE_LIST.img16,
        like: '0',
        vendor: 'EGANY',
        title: 'Đầm cổ vuông Laura',
        url:'/products/dam-co-vuong-laura',
        rating: '',
        price: '3,240,000',
        compare_price: '6,480,000',
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
        id: '020',
        img_1: IMAGE_LIST.img15,
        img_2: IMAGE_LIST.img16,
        like: '0',
        vendor: 'EGANY',
        title: 'Đầm cổ vuông Laura',
        url:'/products/dam-co-vuong-laura',
        rating: '',
        price: '3,240,000',
        compare_price: '6,480,000',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img: IMAGE_LIST.img16,
        }],
        product_promo_tag_img: '',
        percentCompleted: '80',
        number: '320'
    },
    {
        id: '021',
        img_1: IMAGE_LIST.img15,
        img_2: IMAGE_LIST.img16,
        like: '0',
        vendor: 'EGANY',
        title: 'Đầm cổ vuông Laura',
        url:'/products/dam-co-vuong-laura',
        rating: '',
        price: '3,240,000',
        compare_price: '6,480,000',
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
const listItem_2 =  [
    {
        id: '001',
        img_1: IMAGE_LIST.img1,
        img_2: IMAGE_LIST.img2,
        like: '0',
        vendor: 'EGANY',
        title: 'Váy Catarina',
        url:'/products/vay-easty-maxi',
        rating: '2',
        price: '2,350,000',
        compare_price: '4,700,000',
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
        price: '3,550,000',
        compare_price: '7,100,000',
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
        price: '2,150,000',
        compare_price: '4,300,000',
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
        price: '8,400,000',
        compare_price: '16,800,000',
        discount: '50%',
        item_color_chosen:[{
            color: 'Xanh',
            img: IMAGE_LIST.img11,
        }],
        product_promo_tag_img: '',
        percentCompleted: '23',
        number: '6'
    },]
const colors = ['magenta', 'red', 'volcano', 'orange', 'gold','lime','green','cyan','blue','geekblue','purple'];
const CollectionAll = (props) => {
    const [checkedValues, setCheckedValues] = React.useState([]);
    const {item, tittle} = props;
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage, setitemsPerPage] = React.useState(12); 
    const totalItems = listItem_1.length;

    // const currentItems = listItem_1.slice(indexOfFirstItem, indexOfLastItem);
    const [currentItems, setCurrentItems] = React.useState([]);
    const handlePageChange = (page, pageSize) => {
        setCurrentPage(page);
        setitemsPerPage(pageSize);
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
          
          setCheckedValues([...checkedValues, value]);
        } else {
          
          setCheckedValues(checkedValues.filter(item => item !== value));
        }
      };
    const randomColors = checkedValues.map(() => colors[Math.floor(Math.random() * colors.length)]);
    const handleChange=(value)=>{
        console.log(value.value)
        if(value.value === 'increase'){
            const sortedList = currentItems.slice().sort((a, b) => {
                const titleA = a.price; 
                const titleB = b.price;
            
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }
                return 0;
            });
            setCurrentItems(sortedList);
        }
        if(value.value === 'decrease'){
            const sortedList = currentItems.slice().sort((a, b) => {
                const titleA = a.price; 
                const titleB = b.price;
            
                if (titleA > titleB) {
                    return -1;
                }
                if (titleA < titleB) {
                    return 1;
                }
                return 0;
            });
            setCurrentItems(sortedList);
        }
    }

    React.useEffect(() => {
        const indexOfLastItem = currentPage === 1 ? itemsPerPage : currentPage * itemsPerPage;
        const indexOfFirstItem = currentPage === 1 ? 0 : (currentPage - 1) * itemsPerPage;
        setCurrentItems(listItem_1.slice(indexOfFirstItem, indexOfLastItem));
    }, [currentPage, itemsPerPage]);

    return (
        <div id="collection-list">
            <div id="shop-system-page" className="dflex-center-column">
                <div className="w85-per">
                    <div className="content-top-page">
                        <ul className="d-inline-flex g-2"> 
                            <li>
                                <Link to="/">
                                    <span className="text" style={{color:"#000000"}}>Trang chủ</span>
                                </Link>
                            </li> 
                            <p>/</p>
                            <li>
                                <Link to="/pages/he-thong-cua-hang">
                                    <span style={{color:"#BFBFBF"}} className="text">Tất cả sản phẩm</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/collections/all" >
                        <img className="image-top" alt="top" src={IMAGECOLLECTION.img_top}/>
                    </Link>
                </div>
                <SessionCoupons/>    
                <div className="row body-collection w85-per">
                    <div className="mobile-container-1">
                        <div className="col-3 ">
                            <h3 className="text tittle-text ">Tất cả sản phẩm</h3>
                        </div>
                        <div className="col-9 row">
                            <div className="d-flex container-span col-10 align-items-center">
                                {checkedValues.map((value, index) => (
                                        <Tag color={randomColors[index]} className="deco-span text" key={value}>
                                            {value}
                                        </Tag>
                                    ))} 
                            </div>
                            <div className="fill col-2 d-flex">
                                <span className="text nowrap">Sắp xếp :</span>
                                <Select
                                    labelInValue
                                    defaultValue={{ key: 'Mới nhất' }}
                                    style={{ width: 170 }}
                                    onChange={handleChange}
                                >
                                    <Option value="increase">Giá tăng dần</Option>
                                    <Option value="decrease">Giá giảm dần</Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-left">
                        <div>
                            <h3 className="text">THƯƠNG HIỆU</h3>
                            {ListInfor.brand && (
                                <>
                                    <ul>
                                        {ListInfor.brand.map((brand, index) =>(
                                            <li name='brand'>
                                                <input 
                                                    type="checkbox" 
                                                    value={brand.value} 
                                                    name={index}
                                                    checked={checkedValues.includes(brand.value)}
                                                    onChange={handleCheckboxChange}
                                                />
                                                <label className="text" for={index}>{brand.value}</label>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                        {/* color */}
                        <div>
                            <h3 className="text">MÀU SẮC</h3>
                            {ListInfor.colors && (
                                <>
                                    <ul>
                                        {ListInfor.colors.map((color, index) =>(
                                            <li name='color'>
                                                <input  
                                                    type="checkbox" 
                                                    value={color.color} 
                                                    name={index}
                                                    checked={checkedValues.includes(color.color)}
                                                    onChange={handleCheckboxChange}
                                                    />
                                                <label className="text" for={index}>{color.color}</label>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                        {/* budget */}
                        <div>
                            <h3 className="text">MỨC GIÁ</h3>
                            {ListInfor.budgets && (
                                <>
                                    <ul>
                                        {ListInfor.budgets.map((budget, index) =>(
                                            <li name='budget'>
                                                <input 
                                                    type="checkbox" 
                                                    value={budget.budget} 
                                                    name={index}
                                                    checked={checkedValues.includes(budget.budget)}
                                                    onChange={handleCheckboxChange}/>
                                                <label className="text" for={index}>{budget.budget}</label>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                        {/* categoty */}
                        <div>
                            <h3 className="text">LOẠI</h3>
                            {ListInfor.categorys && (
                                <>
                                    <ul>
                                        {ListInfor.categorys.map((type, index) =>(
                                            <li name='category'>
                                                <input 
                                                    type="checkbox" 
                                                    value={type.type} 
                                                    name={index}
                                                    checked={checkedValues.includes(type.type)}
                                                    onChange={handleCheckboxChange}/>
                                                <label className="text" for={index}>{type.type}</label>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                        {/* color */}
                        <div>
                            <h3 className="text">DỊCH VỤ GIAO HÀNG</h3>
                            {ListInfor.deliveryService && (
                                <>
                                    <ul>
                                        {ListInfor.deliveryService.map((delivery, index) =>(
                                            <li name='delivery'>
                                                <input 
                                                    type="checkbox" 
                                                    value={delivery.delivery} 
                                                    name={index}
                                                    checked={checkedValues.includes(delivery.delivery)}
                                                    onChange={handleCheckboxChange}/>
                                                <label className="text" for={index}>{delivery.delivery}</label>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="col-9 col-right d-flex flex-column container-cart">
                       

                        <div className="flash-body"> 
                            
                            <div className="tab_first">
                                {currentItems.map((item, index)=>(
                                    <>
                                        <CartHome item={item}/>
                                    </>
                                ))}
                            </div>
                               
                        </div>
                        <div className="d-flex justify-content-center">
                            <Pagination
                                    total={totalItems}
                                    current={currentPage}
                                    pageSize= {itemsPerPage}
                                    pageSizeOptions={['12', '24', '36', '48']}
                                    showSizeChanger
                                    showQuickJumper
                                    showTotal={(total) => `Total ${total} items`}
                                    onChange={handlePageChange}
                                />
                        </div>
                    </div>
                    <div className="d-flex flex-column seen">
                        <h3 className="text">Sản phẩm đã xem</h3>
                       
                        <div className="flash-body"> 
                            <div className="tab_first">
                                {listItem_2.map((item, index)=>(

                                    <CartHome item={item}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}
export default CollectionAll;