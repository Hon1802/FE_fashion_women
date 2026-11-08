import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/actions/auth"
import source from "../../assets/error.svg"

const Unauthorized = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleLogoutUser = () => {
        let data = null
        try {
            data = JSON.parse(localStorage.getItem("userDataUser"))
        } catch (e) {
            data = null
        }
        dispatch(logout(
            data?._id,
            setLoading,
            () => navigate("/account/login")
        ))
        localStorage.removeItem("userDataUser")
        localStorage.removeItem("accessTokenUser")
    }

    return (
        <section className="error-page">
            <p className="error-page-code">403</p>
            <h1 className="error-page-title">Bạn chưa có quyền truy cập</h1>
            <p className="error-page-desc">Vui lòng đăng nhập để tiếp tục.</p>
            <div className="error-page-actions">
                <button type="button" className="page-btn" onClick={handleLogoutUser} disabled={loading}>
                    {loading ? "Đang xử lý..." : "Đăng nhập lại"}
                </button>
                <Link to="/" className="page-btn page-btn--outline">Về trang chủ</Link>
            </div>
            <img src={source} alt="" aria-hidden="true" />
        </section>
    )
}
export default Unauthorized
