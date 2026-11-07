import { Link } from "react-router-dom"

/**
 * Breadcrumb dùng chung cho các trang tĩnh.
 * items: [{ label: string, to?: string }] — item cuối là trang hiện tại.
 */
const Breadcrumb = ({ items = [] }) => {
    const trail = [{ label: "Trang chủ", to: "/" }, ...items]

    return (
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <ol className="breadcrumb-list">
                {trail.map((item, index) => {
                    const isLast = index === trail.length - 1
                    return (
                        <li key={`${item.label}-${index}`} className="breadcrumb-item-custom">
                            {isLast || !item.to ? (
                                <span className="breadcrumb-current" aria-current="page">{item.label}</span>
                            ) : (
                                <Link to={item.to} className="breadcrumb-link">{item.label}</Link>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

export default Breadcrumb
