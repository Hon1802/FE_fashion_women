
import React, { useState } from 'react';

const WishList= () => {
    
    return (
        <>
        <div id="wish-list" className="dflex-center-column">
                <div className="w85-per">
                    <div className="content-top-page">
                        <ul className="d-inline-flex g-2"> 
                            <li>
                                <a href="/">
                                    <span className="text" style={{color:"#000000"}}>Trang chủ</span>
                                </a>
                            </li> 
                            <p>/</p>
                            <li>
                                <a href="/pages/he-thong-cua-hang">
                                    <span style={{color:"#BFBFBF"}} className="text">Wish list</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex flex-column" >
                        <h3 className="title-page">Wish List</h3>
                        <span className='text'> Bạn chưa có sản phẩm yêu thích</span>
                    </div>
                    <div className="row custom-row-shop">
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default WishList;