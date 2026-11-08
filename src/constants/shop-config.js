// Thông tin cửa hàng DEMO (hư cấu) — đổi tại đây để áp dụng cho toàn bộ website.
export const SHOP = {
    name: "MIRA",
    fullName: "MIRA Women Fashion",
    tagline: "Thời trang nữ thanh lịch mỗi ngày",
    description:
        "MIRA là cửa hàng thời trang nữ (demo) với các dòng đầm thiết kế, đồ tập và đồ đi biển — chất liệu chọn lọc, form dáng tôn dáng, giá hợp lý.",
    hotline: "0123 456 789",
    hotlineHref: "tel:0123456789",
    email: "support@example.com",
    address: "123 Đường Demo, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
    workingHours: "8:00 - 22:00 (tất cả các ngày)",
    copyrightYear: 2026,
    social: {
        facebook: "#",
        instagram: "#",
        tiktok: "#",
        youtube: "#",
        zalo: "#",
    },
}

// Các dòng sản phẩm (hiển thị ở vị trí "thương hiệu" trên thẻ sản phẩm)
export const PRODUCT_LINES = {
    signature: "MIRA Signature",
    active: "MIRA Active",
    beach: "MIRA Beach",
    home: "MIRA Home Fit",
}

// Chính sách bán hàng dùng chung
export const SHOP_POLICIES = {
    freeShipThreshold: "499.000₫",
    shipSupport: "Hỗ trợ 20.000₫ phí giao hàng cho đơn từ 299.000₫",
    freeShip: "Miễn phí giao hàng cho đơn từ 499.000₫",
    returnPolicy: "Đổi trả miễn phí trong 15 ngày nếu sản phẩm lỗi hoặc không vừa size",
}

// Mã giảm giá demo (thứ tự khớp với ảnh trong assets/coupons)
export const COUPONS = [
    { code: "MIRA10", value: "10%", title: "Giảm 10%", desc: "Giảm 10% cho đơn hàng từ 699.000₫", condition: "Giảm 10% cho đơn hàng từ 699.000₫", condition2: "Giảm tối đa 100.000₫" },
    { code: "NEWMIRA", value: "15%", title: "Khách mới giảm 15%", desc: "Giảm 15% cho đơn hàng đầu tiên", condition: "Áp dụng cho đơn hàng đầu tiên của khách hàng mới", condition2: "Giảm tối đa 150.000₫" },
    { code: "MIRA99K", value: "99K", title: "Giảm 99.000₫", desc: "Giảm 99.000₫ cho đơn hàng từ 899.000₫", condition: "Giảm trực tiếp 99.000₫ cho đơn hàng từ 899.000₫", condition2: "Không áp dụng cùng mã giảm giá khác" },
    { code: "FREESHIP", value: "Freeship", title: "Miễn phí vận chuyển", desc: "Miễn phí giao hàng cho đơn từ 299.000₫", condition: "Miễn phí giao hàng tối đa 30.000₫ cho đơn từ 299.000₫", condition2: "Áp dụng toàn quốc" },
]
