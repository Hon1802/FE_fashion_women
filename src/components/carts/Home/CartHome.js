import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye as solidEyes } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart as shoppingCart } from '@fortawesome/free-solid-svg-icons';
import * as ICONFORTAWESOME  from '@fortawesome/free-solid-svg-icons';
import imgFire from '../../../assets/home/fire-icon.svg'; 
import { icon_promo } from '../../../assets/logo';
import React, { useState, useRef, useEffect } from 'react';
import NumberInput from '../../inputs/NumberInput'
import { Link } from 'react-router-dom';
const CartHome = (props) => {
    const {item} = props;
    const [visible, setvisible] = useState(false);
    const [confirmLoading, setconfirmLoading] = useState(false);

    const [showPopupIndex, setShowPopupIndex] = useState(null);
    const popupRef = useRef(null);
    const [isLike, setIsLike] = useState(item.like === '0' ? true : false);
    const [selectedItem, setSelectedItem] = useState(1); 
    const [imageIndex, setImageIndex] = useState(0);
    const handleClick = (e) =>{
        setIsLike(!isLike)
    }

    
    // pop up
    const togglePopup = (index) => {
        setShowPopupIndex(showPopupIndex === index ? null : index);
        document.body.style.overflow = 'hidden';
      };

    //   coppy
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

    // choose item
    const choseItemClick_2 = (url_img, className)=>{
        const name_class_popup = 'popup_MSP'+className;
        const product_show_popup = document.querySelector(`.${name_class_popup}`);
        if (product_show_popup) {
            product_show_popup.src = url_img;
        }
    }


    //  effect
    const images_list = document.getElementsByClassName('image-list-left');
    let currentIndex = 0;
    const printNextImage=()=>{
        if (currentIndex < images_list.length) {
            console.log(images_list[0]); 
            const image_change = document.getElementById('image-main-left');
            image_change.src = images_list[currentIndex].src;
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    }
    //show modal
    

    
    // 
    useEffect(() => { 
        const intervalId = setInterval(printNextImage, 3000);
        function handleClickOutside(event) {
          if (popupRef.current && !popupRef.current.contains(event.target)) {
            document.body.style.overflow = 'auto';
            setShowPopupIndex(null);
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          clearInterval(intervalId);
        };
      }, []);
    // 
    return (
        <>
            <div className='cart-container'>
                <div className='detail-item'>
                    <div className='product-thumbnail'>
                        <Link to={`/products/${item.id}`}>
                            <img className={`img_1 MSP${item.id}`} alt='product' src={item.img_1} />
                        </Link>
                        <Link to={`/products/${item.id}`}>
                            <img className={`img_2 MSP${item.id}`} alt='product'  src={item.img_2} />
                        </Link>
                        <div className='action-bar'>
                            <div className='anchor'>
                                <Link to={`/products/${item.id}`}>
                                    <FontAwesomeIcon icon={shoppingCart}/>
                                </Link>
                                <Link>
                                    <button onClick={() => togglePopup(item.id)}>
                                        <FontAwesomeIcon icon={solidEyes}/>
                                    </button>
                                </Link>                            
                            </div>
                        </div>
                    </div>
                    <div className='product-info'>
                        <div className='info-top'>
                            <span className='product-vendor text'>{item.vendor}</span>
                            <div className='like-heart'>
                                {isLike ?  (
                                    <button title='Yêu thích' onClick={(e) => handleClick(e)}>
                                        <FontAwesomeIcon icon={regularHeart}/>
                                    </button>
                                )
                                :(
                                    <button title='Bỏ yêu thích'  onClick={(e) => handleClick(e)}>
                                        <FontAwesomeIcon icon={solidHeart} color='red'/>
                                    </button>
                                ) }
                               
                            </div>
                        </div>
                        <div className='product-name'>
                            <Link className='text' to={`/products/${item.id}`}>{item.title}</Link>
                        </div>
                        <div className='product-rating'>
                            {item.rating  && item.rating.trim() !== '' &&(
                                <p className='text'>({item.rating} đánh giá)</p>
                            )}
                        </div>
                        <div className='product-item-cta'>
                            <p className='top text'>{item.price}</p>
                            <div className='bottom'>
                                <p className='text'>{item.compare_price}</p>
                                <div className='discount text'>
                                    {item.discount  && item.discount.trim() !== '' &&(
                                        <div>{item.discount}</div>
                                    )}
                                    </div>
                            </div>
                        </div>
                        <div className='item-color-chosen'>
                            <ul>
                                {item.item_color_chosen.map((item_color, index)=>(
                                    <li ><img key={index} className={selectedItem === index + 1 ? "select-item" : ""} title={item_color.color} alt={item_color.color} src={item_color.img} onClick={() => handleItemClick(index + 1, item_color.img, item.id)} /></li>
                                    ))}
                            </ul>
                        </div>
                        <div className='product-promotion hidden'>
                            {item.product_promo_tag_img  && item.product_promo_tag_img.trim() !== '' &&(
                                <img alt='' src={item.product_promo_tag_img}/>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flashsale-bottom'>
                    <div className='flashsale-label'>
                        {item.percentCompleted > 90 ?
                        (
                            <p className='text'><img alt='fire' src={imgFire}/> Sắp cháy hàng</p>   
                        ):(
                            <p className='text'><img alt='fire' src={imgFire}/> Đã bán {item.number} sản phẩm</p>
                        )}
                    </div>
                    <div className='flashsale-percent'>
                        <div className="progress-bar">
                            <div className="progress-completed" style={{ width: `${item.percentCompleted}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='popup-cart' style={{ display: showPopupIndex === item.id ? 'contents' : 'none' }}>
                {showPopupIndex === item.id && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <div ref={popupRef} className="popup-style">
                                <div className='content-left'>
                                    <div className='image-main'>
                                        <img id='image-main-left' className={`popup_MSP${item.id}`}  alt='' src={item.img_1} />
                                    </div>
                                    <div className='image-list'>
                                        <ul className='image-list-ul'>
                                            <li>
                                                <button onClick={()=>choseItemClick_2(item.img_1, item.id)}>
                                                    <img className='image-list-left' alt='' src={item.img_1} />
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={()=>choseItemClick_2(item.img_2, item.id)}>
                                                    <img className='image-list-left' alt='' src={item.img_2} />
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={()=>choseItemClick_2(item.img_1, item.id)}>
                                                    <img className='image-list-left' alt='' src={item.img_1} />
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={()=>choseItemClick_2(item.img_2, item.id)}>
                                                    <img className='image-list-left' alt='' src={item.img_2}/>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='content-right'>
                                    <Link to={`/products/${item.id}`} className='text'>
                                        {item.title}
                                    </Link>
                                    <div className='left_vend text'>
                                        <p>Thương hiệu: <span>{item.vendor}</span> | Mã sản phẩm: <span>{item.id}</span> </p>
                                    </div>
                                    <span style={{ visibility: item.rating ? 'visible' : 'hidden' , paddingLeft: '5px' }}>({item.rating} đánh giá)</span>
                                    <div className='quickview-info'>
                                        <p className='text'>{item.price}</p>
                                        <p className='text'>{item.compare_price}</p>
                                        <div className='discount text'>
                                            {item.discount  && item.discount.trim() !== '' &&(
                                                <div>-{item.discount}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='product-promotion hidden'>
                                        {item.product_promo_tag_img  && item.product_promo_tag_img.trim() !== '' &&(
                                            <div style={{display: 'flex'}}>
                                                <span>Bán chạy</span>
                                                <img alt='' src={item.product_promo_tag_img}/>
                                            </div>
                                        )}
                                    </div>
                                    <div className='size-product'>
                                        <span className='text'>Kích thước:</span>
                                        <div className='radio-button'>
                                            {item.size && item.size.map((size, category)=>(
                                                    <div>
                                                        <button name="size-chose" onClick={()=>choseItemClick(size.sizeId)}>
                                                            {size.sizeId}
                                                        </button>
                                                        <div className={`checked ${size.sizeId}`}>                                                
                                                            <FontAwesomeIcon icon={ICONFORTAWESOME.faCheck} color='#ffffff' fontSize={8}/>
                                                        </div>
                                                    </div>
                                            ))}
                                    </div>
                                    </div>
                                    <div className='color-product'>
                                        <span className='text'>Màu sắc:</span>
                                        <div className='item-color-chosen'>
                                            <ul>
                                                {item.item_color_chosen.map((item_color, index)=>(
                                                    <li ><img key={index} className={selectedItem === index + 1 ? "select-item" : ""} title={item_color.color} alt={item_color.color} src={item_color.img} onClick={() => handleItemClick(index + 1, item_color.img, item.id)} /></li>
                                                    ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='group-promotion'>
                                        <span><i><img src={icon_promo} alt='icon promotion'/></i>KHUYẾN MÃI - ƯU ĐÃI</span>
                                        <ul>
                                            <li className='text'>Nhập mã EGANY thêm 5% đơn hàng <button onClick={(e) => handleCopy(item.title, e)}>Sao chép</button> </li>
                                            <li className='text'></li>
                                            <li className='text'>Hỗ trợ 10.000 phí Ship cho đơn hàng từ 200.000đ</li>
                                            <li className='text'>Miễn phí Ship cho đơn hàng từ 300.000đ</li>
                                            <li className='text'>Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì</li>
                                        </ul>
                                    </div>
                                    <div className='button-bottom'>
                                        <NumberInput/>
                                        <Link to={`/products/${item.id}`}>

                                            <button className='btn-add'>THÊM VÀO GIỎ HÀNG</button>
                                        </Link>
                                    </div>
                                   
                                </div>
                                {/* <button onClick={() => togglePopup(item.id)} className="close-popup text">Đóng </button>
                                <button onClick={(e) => handleCopy(item.title, e)} className="coppy-btn text btn-coppy">Sao chép</button>
                                    */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default CartHome;