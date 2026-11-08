import React from 'react';
import CartLook from "../../components/carts/CartLook";
import * as IMAGE_LIST from "../../assets/home";
import { getProductById } from "../../datas/data_product";
// Mỗi lookbook gắn các điểm (dot) với sản phẩm thật trong dữ liệu chung
const dot = (id, productId, pos_x, pos_y) => {
    const product = getProductById(productId);
    return {
        id,
        pos_x,
        pos_y,
        title: product.title,
        img: product.img_1,
        price: product.price,
        o_price: product.compare_price,
        url: product.url,
    };
};

const listItem_1 = [
    {
        id: 'lookbook-active',
        img: IMAGE_LIST.img17,
        title: 'Năng động cùng MIRA Active',
        url: '/collections/do-tap',
        position: [dot('dot1', '007', '50%', '24%'), dot('dot2', '009', '50%', '38%'), dot('dot3', '014', '37%', '53%')],
    },
    {
        id: 'lookbook-gym',
        img: IMAGE_LIST.img18,
        title: 'Tập luyện tại nhà',
        url: '/collections/do-tap',
        position: [dot('dot4', '008', '43%', '24%'), dot('dot5', '010', '40%', '40%'), dot('dot6', '015', '32%', '78%')],
    },
    {
        id: 'lookbook-beach',
        img: IMAGE_LIST.img19,
        title: 'Mùa hè trên biển',
        url: '/collections/do-di-bien',
        position: [dot('dot7', '011', '50%', '30%'), dot('dot8', '012', '50%', '54%'), dot('dot9', '013', '36%', '70%')],
    },
];
const LookBook = () => {

    return (
        <>
        <div id="look-book" className="look-book-container">
            <h2 className="text">Set đồ cho bạn</h2>
            <div className="look-book-body">
                {listItem_1.map((item, index)=>(
                    <React.Fragment key={index}>
                        <CartLook item={item}/> 
                    </React.Fragment>
                ))}
            </div>
        </div>
        </>
    );
};

export default LookBook;
