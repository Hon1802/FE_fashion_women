import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck as regularCheck, faTruck as solidTruck, faMoneyBillTrendUp as solidMoney, faWallet as solidWallet } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import ListProduct from "../../datas/data_product"
import { icon_promo } from '../../assets/logo';
import NumberInput from '../../components/inputs/NumberInput'

// 
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// 
import { Modal, Button, Result } from 'antd';
// 
import * as IMAGE_LIST from "../../assets/home";
import CartHome from '../../components/carts/Home/CartHome';
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

const ProductDetail = (props) => {
    const [ModalText, setModalText] = React.useState('Content of the modal');
    const [visible, setvisible] = React.useState(false);
    const [confirmLoading, setconfirmLoading] = React.useState(false);

    const [selectedItem, setSelectedItem] = React.useState(1); 
    const { param } = useParams();
    const findProductById = (productId) => {
        return ListProduct.find(product => product.id === productId);
    };
    
    // Sử dụng hàm findProductById để tìm sản phẩm với id cụ thể
    const product = findProductById(param);

    const handleCopy = (text_cop, e) => {
        const elementCop = e.target;
        if (text_cop) {
          navigator.clipboard.writeText(text_cop)
            .then(() => {
              elementCop.textContent = 'Đã sao chép';
              setTimeout(() => {
                elementCop.textContent = 'Sao chép';
              }, 3000);
            })
            .catch(err => {
              elementCop.textContent = 'Lỗi sao chép';
            });
        }
      }
    // end

    const handleItemClick = (index, url, className) => {
        const name_class = 'MSP'+className;
        const product_show = document.querySelector(`.${name_class}`);

        const name_class_popup = 'popup_MSP'+className;
        const product_show_popup = document.querySelector(`.${name_class_popup}`);

        if (product_show) {
            product_show.src = url;
        }
        if (product_show_popup) {
            product_show_popup.src = url;
        }
        setSelectedItem(index); 
    };

    // choose item
    const choseItemClick = (sizeId)=>{
        const elementCheck = document.querySelector(`.${sizeId}`);
        const listElementCheck = document.getElementsByClassName('checked');
        if (listElementCheck.length > 0) {
            Array.from(listElementCheck).forEach(item => {
                item.style.visibility = 'hidden';
            });
        }
    
        // Hiển thị phần tử có class tương ứng
        if (elementCheck) {
            elementCheck.style.visibility = 'visible';      
        }     
    }
    const choseItemClick_2 = (url_img, className)=>{
        const name_class_popup = 'popup_MSP'+className;
        const product_show_popup = document.querySelector(`.${name_class_popup}`);
        if (product_show_popup) {
            product_show_popup.src = url_img;
        }
    }
// 
    

    const showModal = () => {
        setvisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setconfirmLoading(true)
        setTimeout(() => {
            setvisible(false);
            setconfirmLoading(false);       
        }, 2000);
    };

    const handleCancel = () => {
        
        setvisible(false)
    };
// 
    return (
        <>
        <div>
            <div className="cont-detail dflex-center-column">
                <div className="w85-per flex-column">
                    <div className="content-top-page">
                        <ul className="d-inline-flex g-2"> 
                            <li>
                                <Link to="/">
                                    <span className="text" style={{color:"#000000"}}>Trang chủ</span>
                                </Link>
                            </li> 
                            <p>/</p>
                            <li>
                                <Link to="/collections/all">
                                    <span className="text" style={{color:"#000000"}}>Tất cả sản phẩm</span>
                                </Link>
                            </li> 
                            <p>/</p>
                            <li>
                                <Link to="/pages/he-thong-cua-hang">
                                    <span style={{color:"#BFBFBF"}} className="text">{product.title}</span>
                                </Link>
                            </li>
                        </ul>                    
                    </div>
                    <div className='container-product-detail row'>
                        <div className='col-6 row row-img' style={{maxHeight: '700px'}}>
                            <div className='col-3 image-list'>
                            <ul className='image-list-ul'>
                                <li>
                                    <button onClick={()=>choseItemClick_2(product.img_1, product.id)}>
                                        <img className='image-list-left' alt='' src={product.img_1} />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={()=>choseItemClick_2(product.img_2, product.id)}>
                                        <img className='image-list-left' alt='' src={product.img_2} />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={()=>choseItemClick_2(product.img_1, product.id)}>
                                        <img className='image-list-left' alt='' src={product.img_1} />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={()=>choseItemClick_2(product.img_2, product.id)}>
                                        <img className='image-list-left' alt='' src={product.img_2}/>
                                    </button>
                                </li>
                            </ul>
                            </div>
                            <div className='col-9 image-main'>
                                <img id='image-main-left' className={`popup_MSP${product.id}`}  alt='' src={product.img_1} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='content-right'>
                                <Link to={`/products/${product.id}`} className='text'>
                                    {product.title}
                                </Link>
                                <div className='left_vend text'>
                                    <p>Thương hiệu: <span>{product.vendor}</span> | Mã sản phẩm: <span>{product.id}</span> </p>
                                </div>
                                <span style={{ visibility: product.rating ? 'visible' : 'hidden' , paddingLeft: '5px' }}>({product.rating} đánh giá)</span>
                                <div className='quickview-info'>
                                    <p className='text'>{product.price}</p>
                                    <p className='text'>{product.compare_price}</p>
                                    <div className='discount text'>
                                        {product.discount  && product.discount.trim() !== '' &&(
                                            <div>-{product.discount}</div>
                                        )}
                                    </div>
                                </div>
                                <div className='left_vend text'>
                                    <p>
                                        (Tiết kiệm: {
                                            (Number(product.compare_price.replace(/\D/g,'')) - Number(product.price.replace(/\D/g,'')))
                                                .toLocaleString()
                                        })
                                    </p>
                                    
                                </div>
                                <div className='product-promotion hidden'>
                                    {product.product_promo_tag_img  && product.product_promo_tag_img.trim() !== '' &&(
                                        <div style={{display: 'flex'}}>
                                            <span>Bán chạy</span>
                                            <img alt='' src={product.product_promo_tag_img}/>
                                        </div>
                                    )}
                                </div>
                                <div className='group-promotion'>
                                    <span><i><img src={icon_promo} alt='icon promotion'/></i>KHUYẾN MÃI - ƯU ĐÃI</span>
                                    <ul>
                                        <li className='text'>Nhập mã EGANY thêm 5% đơn hàng <button onClick={(e) => handleCopy(product.title, e)}>Sao chép</button> </li>
                                        <li className='text'></li>
                                        <li className='text'>Hỗ trợ 10.000 phí Ship cho đơn hàng từ 200.000đ</li>
                                        <li className='text'>Miễn phí Ship cho đơn hàng từ 300.000đ</li>
                                        <li className='text'>Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì</li>
                                    </ul>
                                </div>
                                <div className='size-product'>
                                    <span className='text'>Kích thước:</span>
                                    <div className='radio-button'>
                                        {product.size && product.size.map((size, category)=>(
                                                <div>
                                                    <button name="size-chose" onClick={()=>choseItemClick(size.sizeId)}>
                                                        {size.sizeId}
                                                    </button>
                                                    <div className={`checked ${size.sizeId}`}>                                                
                                                        <FontAwesomeIcon icon={regularCheck} color='#ffffff' fontSize={8}/>
                                                    </div>
                                                </div>
                                        ))}
                                </div>
                                </div>
                                <div className='color-product'>
                                    <span className='text'>Màu sắc:</span>
                                    <div className='item-color-chosen'>
                                        <ul>
                                            {product.item_color_chosen.map((item_color, index)=>(
                                                <li ><img key={index} className={selectedItem === index + 1 ? "select-item" : ""} title={item_color.color} alt={item_color.color} src={item_color.img} onClick={() => handleItemClick(index + 1, item_color.img, product.id)} /></li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className='button-bottom'>
                                        <NumberInput/>
                                        <button className='btn-add' onClick={showModal}>THÊM VÀO GIỎ HÀNG</button>
                                </div>
                                <Link to={`/checkout/${product.id}`} className='buy-now text d-flex justify-content-center align-items-center'>
                                    MUA NGAY
                                </Link>
                                <span>Gọi đặt mua 1800.0000 (7:30 - 22:00)</span>
                                <div className='row delive-con'>
                                    <div className='col-4 row'>
                                        <span className='col-3 d-flex align-items-center color-t-red'><FontAwesomeIcon icon={solidTruck} /></span>
                                        <span className='col-9 text color-t-red'>Giao hàng toàn quốc</span>
                                    </div>
                                    <div className='col-4 row'>
                                        <span className='col-3 d-flex align-items-center color-t-red'><FontAwesomeIcon icon={solidMoney}/></span>
                                        <span className='col-9 text color-t-red'>Tích điểm tất cả sản phẩm</span>
                                    </div>
                                    <div className='col-4 row'>
                                        <span className='col-3 d-flex align-items-center color-t-red'><FontAwesomeIcon icon={solidWallet}/></span>
                                        <span className='col-9 text color-t-red'>Giảm 5% khi thanh toán online</span>
                                    </div>
                                </div>
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        >
                                        Mô tả sản phẩm
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        Venus Dress là sản phẩm thời trang quần áo chủ đạo trong BST "Chào hè 2022" năm nay của nhà thiết kế D.K Rain. Một trong những nhà thiết kế nổi tiếng của Việt Nam, BST được lấy ý tưởng từ hoa thuỷ tiên đỏ, loài hoa nhỏ nhắn dịu dàng nhưng cũng không kém phần trang nhã, với tông chủ đạo đỏ đô, thiết kế nhẹ nhàng đơn giản nhưng cũng không kém phần sang trọng, chất liệu thoáng mát mềm mại, dễ thấm hút sẽ giúp bạn thoải mái hoạt động mà không sợ ướt mồ hôi. BST "Chào hè 2022" sẽ được tổ chức tại TPHCM vào tháng 09/2022. Mọi thông tin cần biết xin liên hệ nhận vé: 0999999999
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                        >
                                        Chính sách giao hàng
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        EGA Style có dịch vụ giao hàng tận nơi trên toàn quốc, áp dụng cho khách mua hàng trên website, fanpage và gọi điện thoại, không áp dụng cho khách mua trực tiếp tại cửa hàng.

Đơn hàng sẽ được chuyển phát đến tận địa chỉ khách hàng cung cấp thông qua công ty vận chuyển trung gian.
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3-content"
                                        id="panel3-header"
                                        >
                                        Chính sách đổi trả
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    1. Điều kiện đổi trả

Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:

Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.
Không đủ số lượng, không đủ bộ như trong đơn hàng.
Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…
 Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa. 
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                       <div className='col-1'>
                            <img alt='' src={product.img_1} style={{width: '100%'}} />                     
                       </div>
                       <div className='col-5'>
                            <div className='quickview-info'>
                                <p className='text'>{product.price}</p>
                                <p className='text'>{product.compare_price}</p>
                                <div className='discount text'>
                                        {product.discount  && product.discount.trim() !== '' &&(
                                            <div>-{product.discount}</div>
                                        )}
                                    </div>
                            </div>
                            <div className='left_vend text'>
                                <p>
                                    (Tiết kiệm: {
                                        (Number(product.compare_price.replace(/\D/g,'')) - Number(product.price.replace(/\D/g,'')))
                                            .toLocaleString()
                                    })
                                </p>                                
                            </div>
                        </div>
                       <div className='cs-moblie-2 col-6 d-inline-flex justify-content-center align-items-center' style={{gap: '20px'}}>
                            <NumberInput/>
                            <button className='btn-add' onClick={showModal}>THÊM VÀO GIỎ HÀNG</button>
                       </div>
                        <div className='fe-back d-flex align-items-center text'>
                            Đánh giá sản phẩm
                        </div>
                        <div className='fe-back d-flex align-items-center text'>
                            Hỏi đáp, bình luận
                        </div>
                        <div className='seen'>
                            <h3 className='text' style={{fontSize:'32px', fontWeight:'500'}}>Sản phẩm cùng phân khúc</h3>
                            <div className="flash-body"> 
                            <div className="tab_first">
                                {listItem_2.map((item, index)=>(

                                    <CartHome item={item}/>
                                ))}
                            </div>
                        </div>
                        
                        <div className='seen'>
                            <h3 className='text' style={{fontSize:'32px', fontWeight:'500'}}>Sản phẩm cùng phân khúc</h3>
                            <div className="flash-body"> 
                                <div className="tab_first">
                                    {listItem_2.map((item, index)=>(

                                        <CartHome item={item}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='seen'>
                            <h3 className='text' style={{fontSize:'32px', fontWeight:'500'}}>Sản phẩm cùng loại</h3>
                            <div className="flash-body"> 
                                <div className="tab_first">
                                    {listItem_2.map((item, index)=>(

                                        <CartHome item={item}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='seen'>
                            <h3 className='text' style={{fontSize:'32px', fontWeight:'500'}}>Sản phẩm đã xem</h3>
                            <div className="flash-body"> 
                                <div className="tab_first">
                                    {listItem_2.map((item, index)=>(

                                        <CartHome item={item}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                        </div>

                        <div>
                            <Modal
                            title="Thêm vào giỏ hàng"
                            visible={visible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            >
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div style={{borderBottom: '1px solid', marginBottom:'10px'}}>

                                    <Result
                                        status="success"
                                        title="Thêm vào giỏ thành công"/>
                                </div>
                                <h4 className='text'> Sản phẩm :</h4>
                                <div className='d-inline-flex' style={{gap: '20px', background:'#ced4da'}}>
                                    <img alt='' src={product.img_1} style={{width: '20%'}} />  
                                    <div className='d-flex flex-column'> 
                                        <span className='text'>{product.title}</span>
                                        <span className='text'>{product.item_color_chosen[0].color}</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width:'100%', marginTop:'10px', padding:'10px 40px'}}>
                                    <span className='text'>
                                        Giỏ hàng hiện có
                                    </span>
                                    <span className='text' style={{color:'red'}}>
                                        {product.price}
                                    </span>
                                </div>
                            </div>
                            </Modal>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductDetail;