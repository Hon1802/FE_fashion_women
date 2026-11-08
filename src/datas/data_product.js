// Dữ liệu sản phẩm DEMO dùng chung cho toàn bộ website.
// Mọi trang (trang chủ, danh mục, chi tiết, giỏ hàng, thanh toán) đều lấy từ file này.
import * as IMG from "../assets/home";
import { COUPONS, PRODUCT_LINES, SHOP_POLICIES } from "../constants/shop-config";

export const formatVND = (value) => `${Number(value).toLocaleString("en-US")}₫`;

export const parseVND = (text) => Number(String(text || "").replace(/\D/g, "")) || 0;

const SIZE_CLOTHES = ["S", "M", "L", "XL"];

const RAW_PRODUCTS = [
    // ---------- Đầm (MIRA Signature) ----------
    {
        id: "001", sku: "MS-D001", line: "signature", category: "Đầm",
        title: "Đầm midi hoa nhí Catarina",
        price: 689000, compare: 890000, rating: 128, sold: 543, stock: 67,
        img_1: IMG.img1, img_2: IMG.img2,
        colors: [{ color: "Vàng hoa", img: IMG.img1 }],
        sizes: ["S", "M", "L"],
        description: "Đầm midi chất voan lụa in hoa nhí, tay phồng nhẹ, eo chun tôn dáng — phù hợp đi làm và dạo phố.",
        bestseller: true,
    },
    {
        id: "002", sku: "MS-D002", line: "signature", category: "Đầm",
        title: "Đầm xoè tay phồng Taylor",
        price: 759000, compare: 950000, rating: 86, sold: 323, stock: 57,
        img_1: IMG.img3, img_2: IMG.img4,
        colors: [{ color: "Hồng hoa", img: IMG.img3 }],
        sizes: SIZE_CLOTHES,
        description: "Thiết kế xoè bồng cổ tim, chất tafta in hoa nổi bật, phù hợp tiệc nhẹ và hẹn hò.",
    },
    {
        id: "003", sku: "MS-D003", line: "signature", category: "Đầm",
        title: "Đầm maxi cổ yếm Eastie",
        price: 829000, compare: 0, rating: 42, sold: 133, stock: 32,
        img_1: IMG.img5, img_2: IMG.img10,
        colors: [{ color: "Hồng cam", img: IMG.img5 }],
        sizes: ["S", "M", "L"],
        description: "Đầm maxi cổ yếm dáng suông, chất voan mềm nhẹ thoáng mát — lựa chọn hoàn hảo cho kỳ nghỉ hè.",
    },
    {
        id: "004", sku: "MS-D004", line: "signature", category: "Đầm",
        title: "Đầm voan dáng dài San Hô",
        price: 1290000, compare: 1590000, rating: 37, sold: 96, stock: 23,
        img_1: IMG.img11, img_2: IMG.img12,
        colors: [{ color: "Hồng san hô", img: IMG.img11 }],
        sizes: ["S", "M"],
        description: "Đầm cúp ngực phối voan xếp tầng, đính ren hoa thủ công, dành cho tiệc cưới và sự kiện.",
        bestseller: true,
    },
    {
        id: "005", sku: "MS-D005", line: "signature", category: "Đầm",
        title: "Đầm dự tiệc hoa hồng Raya",
        price: 1150000, compare: 1450000, rating: 64, sold: 243, stock: 79,
        img_1: IMG.img13, img_2: IMG.img14,
        colors: [{ color: "Đỏ", img: IMG.img13 }],
        sizes: ["S", "M", "L"],
        description: "Đầm trễ vai đính hoa hồng bản lớn, chân váy xoè nhiều lớp — điểm nhấn cho mọi bữa tiệc.",
    },
    {
        id: "006", sku: "MS-D006", line: "signature", category: "Đầm",
        title: "Đầm cổ vuông hoa nhí Laura",
        price: 649000, compare: 790000, rating: 75, sold: 360, stock: 25,
        img_1: IMG.img15, img_2: IMG.img16,
        colors: [{ color: "Cam đào", img: IMG.img15 }],
        sizes: SIZE_CLOTHES,
        description: "Đầm cổ vuông tay lỡ, chất voan hoa mềm mại, dáng xoè nhẹ nữ tính.",
        bestseller: true,
    },
    // ---------- Đồ tập (MIRA Active) ----------
    {
        id: "007", sku: "MA-T007", line: "active", category: "Đồ tập",
        title: "Áo bra thể thao Pastel",
        price: 329000, compare: 390000, rating: 51, sold: 412, stock: 82,
        img_1: IMG.img20, img_2: IMG.img21,
        colors: [{ color: "Hồng pastel", img: IMG.img20 }],
        sizes: ["S", "M", "L"],
        description: "Áo bra nâng đỡ vừa, có mút rời, vải thun lạnh co giãn 4 chiều, thấm hút mồ hôi tốt.",
    },
    {
        id: "008", sku: "MA-T008", line: "active", category: "Đồ tập",
        title: "Áo tank croptop melange",
        price: 289000, compare: 0, rating: 23, sold: 158, stock: 40,
        img_1: IMG.img23, img_2: IMG.img24,
        colors: [{ color: "Xám melange", img: IMG.img23 }],
        sizes: ["S", "M", "L"],
        description: "Áo tank croptop dáng ôm, vải melange mềm, phù hợp tập gym, yoga và mặc hằng ngày.",
    },
    {
        id: "009", sku: "MA-T009", line: "active", category: "Đồ tập",
        title: "Quần legging họa tiết Pastel",
        price: 399000, compare: 459000, rating: 97, sold: 521, stock: 91,
        img_1: IMG.img21, img_2: IMG.img20,
        colors: [{ color: "Pastel loang", img: IMG.img21 }],
        sizes: ["S", "M", "L", "XL"],
        description: "Quần legging cạp cao nâng mông, chất vải dày dặn không lộ, co giãn tối đa khi vận động.",
        bestseller: true,
    },
    {
        id: "010", sku: "MA-T010", line: "active", category: "Đồ tập",
        title: "Quần short biker phối lưới",
        price: 279000, compare: 0, rating: 18, sold: 87, stock: 35,
        img_1: IMG.img24, img_2: IMG.img23,
        colors: [{ color: "Cam neon", img: IMG.img24 }],
        sizes: ["S", "M", "L"],
        description: "Quần biker cạp cao, phối lưới hai bên thoáng khí, có túi đựng điện thoại tiện lợi.",
    },
    // ---------- Đồ đi biển (MIRA Beach) ----------
    {
        id: "011", sku: "MB-B011", line: "beach", category: "Đồ đi biển",
        title: "Áo bikini tam giác Coral",
        price: 359000, compare: 420000, rating: 29, sold: 176, stock: 48,
        img_1: IMG.img26, img_2: IMG.img27,
        colors: [{ color: "Đen", img: IMG.img26 }],
        sizes: ["S", "M", "L"],
        description: "Áo bikini tam giác có đệm mút, dây điều chỉnh linh hoạt, chất liệu nhanh khô chống tia UV.",
    },
    {
        id: "012", sku: "MB-B012", line: "beach", category: "Đồ đi biển",
        title: "Quần bikini buộc dây",
        price: 249000, compare: 0, rating: 14, sold: 102, stock: 30,
        img_1: IMG.img27, img_2: IMG.img26,
        colors: [{ color: "Đen", img: IMG.img27 }],
        sizes: ["S", "M", "L"],
        description: "Quần bikini buộc dây hai bên, dễ điều chỉnh, phối hoàn hảo với áo bikini Coral.",
    },
    {
        id: "013", sku: "MB-B013", line: "beach", category: "Đồ đi biển",
        title: "Áo choàng đi biển móc ren",
        price: 489000, compare: 590000, rating: 33, sold: 214, stock: 61,
        img_1: IMG.img28, img_2: IMG.img26,
        colors: [{ color: "Hồng coral", img: IMG.img28 }],
        sizes: ["Free size"],
        description: "Áo choàng dáng dài dệt móc ren thủ công, xẻ tà hai bên — khoác ngoài đồ bơi đầy phong cách.",
        bestseller: true,
    },
    // ---------- Phụ kiện tập (MIRA Home Fit) ----------
    {
        id: "014", sku: "MH-P014", line: "home", category: "Phụ kiện",
        title: "Thảm tập yoga TPE 6mm",
        price: 359000, compare: 450000, rating: 68, sold: 389, stock: 95,
        img_1: IMG.img22, img_2: IMG.img25,
        colors: [{ color: "Nhiều màu", img: IMG.img22 }],
        sizes: ["183 x 61cm"],
        description: "Thảm TPE hai lớp chống trượt, dày 6mm êm ái, kèm túi đựng và dây buộc.",
    },
    {
        id: "015", sku: "MH-P015", line: "home", category: "Phụ kiện",
        title: "Bộ dây kháng lực tập mông",
        price: 149000, compare: 0, rating: 45, sold: 298, stock: 73,
        img_1: IMG.img25, img_2: IMG.img22,
        colors: [{ color: "Nhiều màu", img: IMG.img25 }],
        sizes: ["Bộ 3 mức lực"],
        description: "Bộ 3 dây kháng lực vải dệt chống cuộn, 3 mức lực nhẹ - vừa - nặng, phù hợp tập tại nhà.",
    },
]

const buildProduct = (p) => {
    const discountPercent = p.compare > p.price ? Math.round((1 - p.price / p.compare) * 100) : 0
    return {
        id: p.id,
        sku: p.sku,
        category: p.category,
        description: p.description,
        img_1: p.img_1,
        img_2: p.img_2,
        like: "0",
        vendor: PRODUCT_LINES[p.line],
        title: p.title,
        url: `/products/${p.id}`,
        rating: String(p.rating),
        priceValue: p.price,
        price: formatVND(p.price),
        compare_price: discountPercent ? formatVND(p.compare) : "",
        discount: discountPercent ? `${discountPercent}%` : "",
        item_color_chosen: p.colors,
        product_promo_tag_img: p.bestseller ? IMG.imgPro : "",
        percentCompleted: String(p.stock),
        number: String(p.sold),
        size: p.sizes.map((sizeId) => ({ sizeId, category: "1" })),
        add_Info: [{
            code: COUPONS[0].code,
            condition_1: SHOP_POLICIES.shipSupport,
            condition_2: SHOP_POLICIES.freeShip,
            condition_3: SHOP_POLICIES.returnPolicy,
        }],
    }
}

const ListProduct = RAW_PRODUCTS.map(buildProduct)

export const getProductById = (id) => ListProduct.find((product) => product.id === id)

export const getProductsByIds = (ids) => ids.map(getProductById).filter(Boolean)

// Nhóm sản phẩm cho từng khu vực hiển thị
export const PRODUCT_GROUPS = {
    flashSale: getProductsByIds(["001", "009", "006", "013", "014", "002", "007", "004", "011", "005"]),
    summer: getProductsByIds(["003", "013", "011", "012", "001", "006", "004", "002", "005", "010"]),
    bestSeller: ListProduct.filter((p) => p.product_promo_tag_img),
    recentlyViewed: getProductsByIds(["002", "007", "013", "006"]),
    newest: ListProduct.slice(0, 10),
    dresses: ListProduct.filter((p) => p.category === "Đầm"),
    active: ListProduct.filter((p) => p.category === "Đồ tập" || p.category === "Phụ kiện"),
    beach: ListProduct.filter((p) => p.category === "Đồ đi biển" || p.id === "003"),
    // Giỏ hàng demo
    cart: getProductsByIds(["001", "009", "013", "014"]),
}

// Danh mục theo URL /collections/:slug
const byCategory = (category) => (product) => product.category === category
export const COLLECTIONS = {
    all: { title: "Tất cả sản phẩm", match: () => true },
    "thoi-trang-nu": { title: "Thời trang nữ", match: () => true },
    dam: { title: "Đầm thiết kế", match: byCategory("Đầm") },
    "do-tap": { title: "Đồ tập", match: byCategory("Đồ tập") },
    "do-the-thao": { title: "Đồ tập", match: byCategory("Đồ tập") },
    "do-di-bien": { title: "Đồ đi biển", match: byCategory("Đồ đi biển") },
    "phu-kien": { title: "Phụ kiện tập luyện", match: byCategory("Phụ kiện") },
    "flash-sale": { title: "Flash Sale", match: (product) => Boolean(product.discount) },
    "san-pham-dong-gia": { title: "Ưu đãi giảm giá", match: (product) => Boolean(product.discount) },
    "black-friday": { title: "Black Friday", match: (product) => Boolean(product.discount) },
    "giang-sinh": { title: "Mùa Giáng sinh", match: (product) => product.category === "Đầm" },
    "ban-chay": { title: "Sản phẩm bán chạy", match: (product) => Boolean(product.product_promo_tag_img) },
}

export const getCollection = (slug) => {
    const key = COLLECTIONS[slug] ? slug : "all"
    const collection = COLLECTIONS[key]
    return { slug: key, title: collection.title, products: ListProduct.filter(collection.match) }
}

export default ListProduct
