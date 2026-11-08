import { Link, useParams } from "react-router-dom"
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"
import PageNotFound from "../404"
import { COUPONS, SHOP, SHOP_POLICIES } from "../../constants/shop-config"

// Nội dung các trang chính sách của shop demo
const POLICY_PAGES = {
    "chinh-sach-giao-hang": {
        title: "Chính sách giao hàng",
        sections: [
            { heading: "Phạm vi giao hàng", items: [`${SHOP.name} giao hàng toàn quốc qua các đơn vị vận chuyển đối tác.`, "Áp dụng cho đơn đặt trên website, fanpage và qua hotline."] },
            { heading: "Thời gian giao hàng", items: ["Nội thành TP. HCM: 1 - 2 ngày làm việc.", "Các tỉnh thành khác: 2 - 5 ngày làm việc.", "Đơn đặt sau 17:00 sẽ được xử lý vào ngày làm việc tiếp theo."] },
            { heading: "Phí giao hàng", items: [SHOP_POLICIES.shipSupport + ".", SHOP_POLICIES.freeShip + ".", "Phí giao hàng được hiển thị rõ ở bước thanh toán."] },
        ],
    },
    "chinh-sach-doi-tra": {
        title: "Chính sách đổi trả",
        sections: [
            { heading: "Thời gian đổi trả", items: [SHOP_POLICIES.returnPolicy + "."] },
            { heading: "Điều kiện đổi trả", items: ["Sản phẩm còn nguyên tem mác, chưa qua sử dụng hoặc giặt.", "Có hoá đơn hoặc mã đơn hàng.", "Đồ bơi và phụ kiện đã bóc niêm phong không áp dụng đổi trả vì lý do vệ sinh."] },
            { heading: "Cách thức đổi trả", items: [`Liên hệ hotline ${SHOP.hotline} hoặc email ${SHOP.email} để được hướng dẫn.`, "Hoàn tiền trong 3 - 5 ngày làm việc sau khi nhận lại sản phẩm."] },
        ],
    },
    "chinh-sach-ban-hang": {
        title: "Chính sách bán hàng",
        sections: [
            { heading: "Cam kết sản phẩm", items: ["Sản phẩm được kiểm tra chất lượng trước khi giao.", "Hình ảnh sản phẩm được chụp thực tế, màu sắc có thể chênh lệch nhẹ do ánh sáng."] },
            { heading: "Thanh toán", items: ["Thanh toán khi nhận hàng (COD).", "Chuyển khoản ngân hàng, thẻ ATM nội địa, thẻ quốc tế và ví điện tử."] },
            { heading: "Ưu đãi", items: COUPONS.map((coupon) => `Mã ${coupon.code}: ${coupon.desc}.`) },
        ],
    },
    "cau-hoi-thuong-gap": {
        title: "Câu hỏi thường gặp",
        faq: [
            { q: "Làm sao để chọn đúng size?", a: "Mỗi sản phẩm đều ghi rõ các size có sẵn. Nếu số đo nằm giữa hai size, bạn nên chọn size lớn hơn hoặc liên hệ để được tư vấn." },
            { q: "Bao lâu tôi nhận được hàng?", a: "Nội thành TP. HCM 1 - 2 ngày, các tỉnh thành khác 2 - 5 ngày làm việc." },
            { q: "Tôi có được kiểm tra hàng trước khi nhận không?", a: "Có. Bạn được mở hộp kiểm tra sản phẩm trước khi thanh toán cho nhân viên giao hàng." },
            { q: "Làm sao để đổi size?", a: SHOP_POLICIES.returnPolicy + ". Vui lòng giữ nguyên tem mác sản phẩm." },
            { q: "Có thể dùng nhiều mã giảm giá cùng lúc không?", a: "Mỗi đơn hàng chỉ áp dụng một mã giảm giá, trừ mã miễn phí vận chuyển." },
        ],
    },
    "goi-dien-dat-hang": {
        title: "Gọi điện đặt hàng",
        sections: [
            { heading: "Hotline đặt hàng", items: [`Gọi ${SHOP.hotline} (${SHOP.workingHours}).`, "Nhân viên tư vấn sẽ xác nhận size, màu sắc và địa chỉ giao hàng giúp bạn."] },
        ],
    },
}

const PolicyPage = () => {
    const { slug } = useParams()
    const page = POLICY_PAGES[slug]

    if (!page) return <PageNotFound />

    return (
        <section className="static-page policy-page">
            <Breadcrumb items={[{ label: page.title }]} />
            <h1 className="static-page-title">{page.title}</h1>

            <div className="policy-layout">
                <nav className="policy-nav" aria-label="Chính sách">
                    {Object.entries(POLICY_PAGES).map(([key, item]) => (
                        <Link key={key} to={`/pages/${key}`} className={key === slug ? "is-active" : ""}>
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <article className="policy-content">
                    {page.sections && page.sections.map((section) => (
                        <section key={section.heading}>
                            <h2>{section.heading}</h2>
                            <ul>
                                {section.items.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </section>
                    ))}
                    {page.faq && page.faq.map((item) => (
                        <details key={item.q} className="policy-faq">
                            <summary>{item.q}</summary>
                            <p>{item.a}</p>
                        </details>
                    ))}
                    <p className="policy-contact">
                        Cần hỗ trợ thêm? Gọi <a href={SHOP.hotlineHref}>{SHOP.hotline}</a> hoặc gửi email tới{" "}
                        <a href={`mailto:${SHOP.email}`}>{SHOP.email}</a>.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default PolicyPage
