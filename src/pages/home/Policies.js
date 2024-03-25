import { poli_icon1, poli_icon2, poli_icon3, poli_icon4 } from "../../assets/logo";

const Policies = () => {

    return (
        <>
        <div id="policies" className="policies-body">
            <div className="policies-item">
                <div className="policies-images">
                    <img src={poli_icon1}></img>
                </div>
                <div className="policies-info">
                    <h3 className="policies-title text">Miễn phí vận chuyển</h3>
                    <div className="policies-desc text">Nhận hàng trong vòng 3 ngày</div>
                </div>
            </div>
            <div className="policies-item">
                <div className="policies-images">
                    <img src={poli_icon2}></img>
                </div>
                <div className="policies-info">
                    <h3 className="policies-title text">Quà tặng hấp dẫn</h3>
                    <div className="policies-desc text">Nhiều ưu đãi khuyến mãi hot</div>
                </div>
            </div>
            <div className="policies-item">
                <div className="policies-images">
                    <img src={poli_icon3}></img>
                </div>
                <div className="policies-info">
                    <h3 className="policies-title text">Bảo đảm chất lượng</h3>
                    <div className="policies-desc text">Sản phẩm đã dược kiểm định</div>
                </div>
            </div>
            <div className="policies-item">
                <div className="policies-images">
                    <img src={poli_icon4}></img>
                </div>
                <div className="policies-info">
                    <h3 className="policies-title text">Hotline: 19001993</h3>
                    <div className="policies-desc text">Dịch vụ hỗ trợ bạn 24/7</div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Policies;
