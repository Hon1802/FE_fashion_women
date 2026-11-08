import { Link } from "react-router-dom"
import source from "../../assets/error.svg"

const PageNotFound = () => {
    return (
        <section className="error-page">
            <p className="error-page-code">404</p>
            <h1 className="error-page-title">Không tìm thấy trang</h1>
            <p className="error-page-desc">
                Trang bạn tìm không tồn tại hoặc đã được di chuyển.
            </p>
            <div className="error-page-actions">
                <Link to="/" className="page-btn">Về trang chủ</Link>
                <Link to="/collections/all" className="page-btn page-btn--outline">Xem sản phẩm</Link>
            </div>
            <img src={source} alt="" aria-hidden="true" />
        </section>
    )
}
export default PageNotFound
