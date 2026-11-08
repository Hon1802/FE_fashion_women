import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck as regularCheck, faTruck as solidTruck, faMoneyBillTrendUp as solidMoney, faWallet as solidWallet } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import ListProduct, { PRODUCT_GROUPS } from "../../datas/data_product"
import { SHOP, SHOP_POLICIES, COUPONS } from "../../constants/shop-config"
import PageNotFound from "../404"
import { CUTOUT_BY_PRODUCT, getProductTheme } from "../../datas/data_themes"
import { icon_promo } from '../../assets/logo';
import NumberInput from '../../components/inputs/NumberInput'

// 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// 
import { Modal, Result } from 'antd';
// 
import * as IMAGE_LIST from "../../assets/home";
import CartHome from '../../components/carts/Home/CartHome';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
const listItem_2 = PRODUCT_GROUPS.recentlyViewed;

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
    if (!product) {
        return <PageNotFound />
    }

    const toNumber = (text) => Number(String(text).replace(/[^0-9]/g, ''))
    const savings = product.compare_price ? (toNumber(product.compare_price) - toNumber(product.price)).toLocaleString('en-US') + '₫' : ''
    const theme = getProductTheme(product)
    const cutout = CUTOUT_BY_PRODUCT[product.id]
    const categorySlug = { "Đầm": "dam", "Đồ tập": "do-tap", "Đồ đi biển": "do-di-bien", "Phụ kiện": "phu-kien" }[product.category]
    const sameCategory = ListProduct.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4)

    return (
        <>
        <div>
            <div className={`cont-detail theme-page theme-page--${theme.tone}`}>
                    <div className="theme-breadcrumb content-top-page">
                        <Breadcrumb items={[{ label: "Tất cả sản phẩm", to: "/collections/all" }, { label: product.category, to: `/collections/${categorySlug}` }, { label: product.title }]} />
                    </div>
                    <div className='pd'>
                        <div className='pd-stage'>
                            <span className='pd-word' aria-hidden='true'>{product.category}</span>
                            <img id='image-main-left' className={`pd-main popup_MSP${product.id}`} alt={product.title} src={cutout || product.img_1} />
                            <ul className='pd-thumbs'>
                                {[cutout || product.img_1, product.img_2].map((image, index) => (
                                    <li key={image}>
                                        <button type='button' aria-label={`Xem ảnh ${index + 1}`} onClick={()=>choseItemClick_2(image, product.id)}>
                                            <img alt='' src={index === 0 && cutout ? product.img_1 : image} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='pd-info'>
                            <div className='content-right'>
                                <h1 className='pd-title'>{product.title}</h1>
                                <div className='left_vend text'>
                                    <p>Thương hiệu: <span>{product.vendor}</span> | Mã sản phẩm: <span>{product.sku}</span> </p>
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
                                {savings && (<div className='left_vend text'><p>(Tiết kiệm: {savings})</p></div>)}
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
                                        <li className='text'>Nhập mã <strong>{COUPONS[0].code}</strong>: {COUPONS[0].desc} <button onClick={(e) => handleCopy(COUPONS[0].code, e)}>Sao chép</button> </li>
                                        <li className='text'>{SHOP_POLICIES.shipSupport}</li>
                                        <li className='text'>{SHOP_POLICIES.freeShip}</li>
                                        <li className='text'>{SHOP_POLICIES.returnPolicy}</li>
                                    </ul>
                                </div>
                                <div className='size-product'>
                                    <span className='text'>Kích thước:</span>
                                    <div className='radio-button'>
                                        {product.size && product.size.map((size)=>(
                                                <div key={size.sizeId}>
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
                                                <li key={index}><img className={selectedItem === index + 1 ? "select-item" : ""} title={item_color.color} alt={item_color.color} src={item_color.img} onClick={() => handleItemClick(index + 1, item_color.img, product.id)} /></li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className='button-bottom'>
                                        <NumberInput/>
                                        <button className='btn-add' onClick={showModal}>THÊM VÀO GIỎ HÀNG</button>
                                </div>
                                <a href={`/checkout/${product.id}`} className='buy-now text d-flex justify-content-center align-items-center'>
                                    MUA NGAY
                                </a>
                                <span>Gọi đặt mua <a href={SHOP.hotlineHref}>{SHOP.hotline}</a> ({SHOP.workingHours})</span>
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
                                        <p>{product.description}</p>
                                        <ul className="product-spec">
                                            <li>Mã sản phẩm: {product.sku}</li>
                                            <li>Danh mục: {product.category}</li>
                                            <li>Kích thước: {product.size.map((size) => size.sizeId).join(', ')}</li>
                                            <li>Màu sắc: {product.item_color_chosen.map((c) => c.color).join(', ')}</li>
                                        </ul>
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
                                        <p>{SHOP.name} giao hàng toàn quốc qua các đơn vị vận chuyển đối tác. Nội thành TP.HCM nhận hàng trong 1-2 ngày, các tỉnh thành khác 2-5 ngày làm việc.</p>
                                        <p>{SHOP_POLICIES.shipSupport}. {SHOP_POLICIES.freeShip}.</p>
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
                                        <p>{SHOP_POLICIES.returnPolicy}.</p>
                                        <ul className="product-spec">
                                            <li>Sản phẩm còn nguyên tem mác, chưa qua sử dụng hoặc giặt.</li>
                                            <li>Đồ bơi và phụ kiện đã bóc niêm phong không áp dụng đổi trả.</li>
                                            <li>Liên hệ hotline {SHOP.hotline} hoặc email {SHOP.email} để được hỗ trợ.</li>
                                        </ul>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pd-below'>
                        {sameCategory.length > 0 && (
                            <div className='seen'>
                                <h3 className='text section-heading'>Sản phẩm cùng loại</h3>
                                <div className="flash-body">
                                    <div className="tab_first">
                                        {sameCategory.map((item) => (
                                            <CartHome key={item.id} item={item}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className='seen'>
                            <h3 className='text section-heading'>Sản phẩm đã xem</h3>
                            <div className="flash-body">
                                <div className="tab_first">
                                    {listItem_2.filter((item) => item.id !== product.id).map((item) => (
                                        <CartHome key={item.id} item={item}/>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <Modal
                            title="Thêm vào giỏ hàng"
                            open={visible}
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
        </>
    )
}
export default ProductDetail;