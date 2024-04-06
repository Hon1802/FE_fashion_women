import { Link } from "react-router-dom";

const Oders = () => {
    return (
        <>
            <div id="oder-page" className="dflex-center-column">
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
                                <Link to="/pages/kiem-tra-don-hang">
                                    <span style={{color:"#BFBFBF"}} className="text">Kiểm tra đơn hàng</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <h3 className="title-page">Kiểm tra đơn hàng</h3>
                    </div>
                    <div>
                        <div class="content-page rte py-3">
                            
                            <iframe src="https://onapp.haravan.com/orderstrackingphone/shop/ega-style" width="100%" height="500px" frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Oders;