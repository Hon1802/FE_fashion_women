import { Link } from "react-router-dom"
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"
import { about1, about2 } from "../../assets/about"

const STATS = [
    { value: "10+", label: "Năm kinh nghiệm" },
    { value: "12", label: "Cửa hàng toàn quốc" },
    { value: "500+", label: "Mẫu thiết kế mỗi năm" },
    { value: "24/7", label: "Hỗ trợ khách hàng" },
]

const AboutUs = () => {
    return (
        <section id="about-page" className="static-page">
            <Breadcrumb items={[{ label: "Giới thiệu" }]} />
            <h1 className="static-page-title">Giới thiệu</h1>

            <div className="about-section">
                <div className="about-section-media">
                    <img src={about1} alt="Không gian cửa hàng thời trang nữ" loading="lazy" />
                </div>
                <div className="about-section-body">
                    <p className="about-section-eyebrow">Câu chuyện thương hiệu</p>
                    <h2 className="about-section-heading">Thời trang cho phụ nữ hiện đại</h2>
                    <p className="about-section-text">
                        Chúng tôi mang đến những thiết kế thanh lịch, dễ mặc và phù hợp với nhịp sống
                        hằng ngày của phụ nữ Việt — từ công sở, dạo phố đến những buổi tiệc quan trọng.
                    </p>
                    <p className="about-section-text">
                        Mỗi sản phẩm đều được chọn lựa kỹ về chất liệu, form dáng và đường may để bạn luôn
                        tự tin trong mọi khoảnh khắc.
                    </p>
                </div>
            </div>

            <ul className="about-stats">
                {STATS.map((stat) => (
                    <li key={stat.label} className="about-stats-item">
                        <span className="about-stats-value">{stat.value}</span>
                        <span className="about-stats-label">{stat.label}</span>
                    </li>
                ))}
            </ul>

            <div className="about-section about-section--reverse">
                <div className="about-section-media">
                    <img src={about2} alt="Bộ sưu tập thời trang mới" loading="lazy" />
                </div>
                <div className="about-section-body">
                    <p className="about-section-eyebrow">Cam kết</p>
                    <h2 className="about-section-heading">Chất lượng và dịch vụ tận tâm</h2>
                    <p className="about-section-text">
                        Sản phẩm được kiểm định trước khi đến tay khách hàng, hỗ trợ đổi trả linh hoạt và
                        giao hàng nhanh trên toàn quốc. Đội ngũ tư vấn luôn sẵn sàng giúp bạn chọn được
                        trang phục ưng ý nhất.
                    </p>
                    <div className="about-actions">
                        <Link to="/collections/all" className="page-btn">Xem sản phẩm</Link>
                        <Link to="/pages/lien-he" className="page-btn page-btn--outline">Liên hệ</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUs;
