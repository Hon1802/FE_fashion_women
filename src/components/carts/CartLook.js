import React, { useState } from 'react'; 
const CartLook = (props) => {
    const {item} = props;
    let statebefore = 'dot_99';
    const handleClick = (nameClass) => {
        const hiddenId = 'hidden'+nameClass;
        const listElements = document.getElementsByClassName("item_dot");
        const listHidden = document.getElementsByClassName("info-popup");
        const elementEffect = document.getElementsByClassName(nameClass);
        const elementHidden = document.getElementsByClassName(hiddenId);
        if(elementEffect.length > 0){
            if(statebefore.localeCompare(nameClass)===0)
            {
                for (let i = 0; i < listElements.length; i++) {
                    listHidden[i].style.visibility = 'hidden';
                    listElements[i].classList.remove("rotateEffect");
                }
                statebefore = "";
            } else{
                for (let i = 0; i < listElements.length; i++) {
                    listHidden[i].style.visibility = 'hidden';
                    listElements[i].classList.remove("rotateEffect");
                }
                for (let i = 0; i < elementEffect.length; i++) {
                    elementHidden[i].style.visibility = 'visible';
                    elementEffect[i].classList.add("rotateEffect");
                    statebefore = nameClass;
                }
            }
        }
      };
    return (
        <>
            <div id="cart-look">
                <div className="container-cart">
                    <div className="cart-image">
                        <img alt="top" src={item.img}/>
                    </div>
                    {item.position.map((dot, index) =>(
                        <>
                            <div className={` dot_btn`} style= {{top: `${dot.pos_y}`, left: `${dot.pos_x}`}}>
                                <i className= {`${dot.id} item_dot rotate-on-click`} onClick={()=>handleClick(`${dot.id}`)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width= "20px"
                                        height="20px"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                    </svg>                    		
                                </i>
                                <div className= {`hidden${dot.id} info-popup`}>
                                    <div>
                                        <img src={dot.img} alt='info'/>
                                        <div>
                                            <h4 className='text'>{dot.title}</h4>
                                            <div>
                                                <span className='text'>{dot.price}</span>
                                                {dot.o_price  && dot.o_price.trim() !== '' &&(
                                                    <span className='text discount'>{dot.o_price}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                    <h3 className='text' style={{fontSize: '24px'}}>Set đồ tập Yoga Xuân Hè 2022</h3>
                    <a className='text' style={{fontSize: '16px'}} href={item.url}>Xem chi tiết </a>
                </div>
            </div>
        </>
    );
};

export default CartLook;
