
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WishList= () => {
    
    return (
        <>
        <div id="wish-list" className="dflex-center-column">
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
                                    <span style={{color:"#BFBFBF"}} className="text">Wish list</span>
                                </Link>
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