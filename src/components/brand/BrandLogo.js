import { Link } from "react-router-dom"
import { SHOP } from "../../constants/shop-config"

/**
 * Logo dạng chữ (wordmark) của cửa hàng demo.
 * variant: "dark" (chữ đen, dùng trên nền sáng) | "light" (chữ trắng, dùng ở footer)
 */
const BrandLogo = ({ variant = "dark", className = "" }) => (
    <Link to="/" className={`brand-logo brand-logo--${variant} ${className}`} aria-label={`${SHOP.fullName} - Trang chủ`}>
        <span className="brand-logo-name">{SHOP.name}</span>
        <span className="brand-logo-sub">Women Fashion</span>
    </Link>
)

export default BrandLogo
