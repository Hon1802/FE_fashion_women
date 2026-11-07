import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"

const WishList = () => {
    return (
        <section id="wish-list" className="static-page">
            <Breadcrumb items={[{ label: "Danh sách yêu thích" }]} />
            <h1 className="static-page-title">Danh sách yêu thích</h1>

            <div className="empty-state">
                <FontAwesomeIcon icon={faHeart} className="empty-state-icon" aria-hidden="true" />
                <h2 className="empty-state-title">Bạn chưa có sản phẩm yêu thích</h2>
                <p className="empty-state-desc">
                    Nhấn vào biểu tượng trái tim trên sản phẩm để lưu lại những món đồ bạn thích.
                </p>
                <Link to="/collections/all" className="page-btn">Khám phá sản phẩm</Link>
            </div>
        </section>
    )
}
export default WishList;
