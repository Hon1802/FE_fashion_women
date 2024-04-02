import SessionCoupons from "../../components/collections/SessionCoupons";
import * as IMAGECOLLECTION from "../../assets/products"

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
            budget: 'Giá dưới 1,000,000₫'
        },{
            budget: '1,000,000₫ - 2,000,000₫'
        },{
            budget: '2,000,000₫ - 3,000,000₫'
        },{
            budget: '3,000,000₫ - 5,000,000₫'
        },{
            budget: '5,000,000₫ - 7,000,000₫'
        },{
            budget: 'Giá trên 10,000,000₫'
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

const CollectionAll = (props) => {
    const {item, tittle} = props;
    return (
        <div id="collection-list">
            <div id="shop-system-page" className="dflex-center-column">
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
                                    <span style={{color:"#BFBFBF"}} className="text">Tất cả sản phẩm</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="/collections/all" >
                        <img className="image-top" alt="top" src={IMAGECOLLECTION.img_top}/>
                    </a>
                </div>
                <SessionCoupons/>    
                <div className="row body-collection w85-per">
                    <div className="col-3 ">
                        <h3 className="text tittle-text">Tất cả sản phẩm</h3>
                    </div>
                    <div className="col-9">

                    </div>
                    <div className="col-3 col-left">
                        <div>
                            <h3 className="text">THƯƠNG HIỆU</h3>
                            {ListInfor.brand && (
                                <>
                                    <ul>
                                        {ListInfor.brand.map((brand, index) =>(
                                            <li name='brand'>
                                                <input type="checkbox" value={brand.value} name={index}/>
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
                                                <input type="checkbox" value={color.color} name={index}/>
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
                                                <input type="checkbox" value={budget.budget} name={index}/>
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
                                                <input type="checkbox" value={type.type} name={index}/>
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
                                                <input type="checkbox" value={delivery.delivery} name={index}/>
                                                <label className="text" for={index}>{delivery.delivery}</label>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="col-9 col-right">
                        
                    </div>
                </div>
            </div>           
        </div>
    )
}
export default CollectionAll;