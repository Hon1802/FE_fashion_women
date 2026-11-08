// Không khí riêng cho từng trang chủ đề. Con số giảm giá, số đã bán... được tính từ dữ liệu sản phẩm.
import * as CUT from "../assets/cutouts";
import { SHOP_POLICIES } from "../constants/shop-config";

const endOfToday = () => {
    const end = new Date();
    end.setHours(23, 59, 59, 0);
    return end;
};

const SHIPPING_PERKS = [SHOP_POLICIES.freeShip, SHOP_POLICIES.returnPolicy];

// Ảnh tách nền theo sản phẩm
export const CUTOUT_BY_PRODUCT = {
    "001": CUT.catarina,
    "002": CUT.taylor,
    "003": CUT.maxi,
    "005": CUT.raya,
    "006": CUT.laura,
    "007": CUT.active1,
    "008": CUT.active2,
    "009": CUT.active1,
    "010": CUT.active2,
    "011": CUT.beach,
    "012": CUT.beach,
    "013": CUT.cover,
    "014": CUT.mat,
    "015": CUT.band,
};

// cast: người mẫu trên bìa. x/h: vị trí và chiều cao trên desktop; mx/mh: trên mobile (bỏ trống để ẩn).
// tag: nhãn sản phẩm gắn cạnh người mẫu (tx/ty theo % khung bìa).
export const THEMES = {
    all: {
        tone: "doorway",
        layout: "doors",
        headline: ["Hôm nay bạn muốn là ai?"],
        sub: "Một chiếc đầm cho buổi tối đáng nhớ, một bộ đồ tập cho sáng mai, hay một chuyến biển đang chờ.",
        cta: "Xem tất cả sản phẩm",
        marquee: ["Đầm thiết kế", "Đồ tập co giãn 4 chiều", "Đồ đi biển nhanh khô", ...SHIPPING_PERKS],
        couponCode: "NEWMIRA",
        crossSell: ["flash-sale", "phu-kien", "black-friday"],
    },
    dam: {
        tone: "atelier",
        layout: "dam",
        door: { src: CUT.raya, label: "Đầm dạ tiệc" },
        headline: ["Mặc để", "được nhớ."],
        sub: "Voan rơi nhẹ theo bước chân, đoá hồng nở ngay trên vai. Những chiếc đầm dành cho khoảnh khắc mọi ánh nhìn dừng lại ở bạn.",
        cta: "Chọn chiếc đầm của bạn",
        cast: [
            { src: CUT.taylor, x: 14, h: 76, productId: "002", tx: 3, ty: 46 },
            { src: CUT.laura, x: 92, h: 72, productId: "006", tx: 80, ty: 16 },
            { src: CUT.raya, x: 68, h: 102, mx: 50, mh: 96, productId: "005", tx: 44, ty: 44, front: true },
        ],
        marquee: ["Voan lụa mềm rủ", "Đính hoa thủ công", "Dáng xoè tôn eo", ...SHIPPING_PERKS],
        couponCode: "MIRA10",
        crossSell: ["ban-chay", "do-di-bien", "giang-sinh"],
    },
    "do-tap": {
        tone: "motion",
        layout: "tap",
        door: { src: CUT.active1, label: "Đồ tập" },
        headline: ["Không ngại", "vận động"],
        sub: "Co giãn 4 chiều, cạp cao ôm chắc, khô nhanh sau từng hiệp. Bạn chỉ việc tập, phần còn lại để bộ đồ lo.",
        cta: "Vào bộ đồ tập",
        cast: [
            { src: CUT.active1, x: 53, h: 100, mx: 30, mh: 92, productId: "009", tx: 3, ty: 66 },
            { src: CUT.active2, x: 91, h: 96, mx: 72, mh: 92, productId: "010", tx: 66, ty: 42, front: true },
        ],
        marquee: ["Co giãn 4 chiều", "Thấm hút mồ hôi", "Cạp cao nâng dáng", "Vải dày không lộ", ...SHIPPING_PERKS],
        couponCode: "MIRA10",
        crossSell: ["phu-kien", "do-di-bien", "flash-sale"],
    },
    "do-di-bien": {
        tone: "shore",
        layout: "bien",
        door: { src: CUT.beach, label: "Đi biển" },
        headline: ["Nắng gọi,", "biển chờ."],
        sub: "Vali nhẹ hơn, ảnh đẹp hơn. Bikini nhanh khô và áo choàng móc ren đi từ bãi cát đến quán cà phê hoàng hôn.",
        cta: "Xếp đồ đi biển",
        cast: [
            { src: CUT.cover, x: 8, h: 80, productId: "013", tx: 2, ty: 52 },
            { src: CUT.maxi, x: 92, h: 78, productId: "003", tx: 80, ty: 12 },
            { src: CUT.beach, x: 68, h: 104, mx: 50, mh: 100, productId: "011", tx: 44, ty: 42, front: true },
        ],
        marquee: ["Nhanh khô", "Chống tia UV", "Móc ren thủ công", "Gọn trong vali", ...SHIPPING_PERKS],
        couponCode: "FREESHIP",
        crossSell: ["dam", "do-tap", "ban-chay"],
    },
    "phu-kien": {
        tone: "calm",
        layout: "calm",
        door: { src: CUT.mat, label: "Góc tập" },
        headline: ["Một góc nhỏ,", "thói quen lớn."],
        sub: "Trải thảm xuống, kéo dây lên. Chỉ cần vài mét vuông trong nhà là bạn đã có chỗ của riêng mình mỗi ngày.",
        cta: "Dựng góc tập",
        cast: [
            { src: CUT.mat, x: 30, h: 50, mx: 38, mh: 38, productId: "014", tx: 44, ty: 34 },
            { src: CUT.band, x: 76, h: 36, mx: 74, mh: 22, productId: "015", tx: 78, ty: 30, front: true },
        ],
        marquee: ["Thảm TPE chống trượt", "Dây vải không cuộn", "3 mức lực", ...SHIPPING_PERKS],
        couponCode: "FREESHIP",
        crossSell: ["do-tap", "dam", "flash-sale"],
    },
    "flash-sale": {
        tone: "flash",
        layout: "flash",
        door: { src: CUT.catarina, label: "Flash Sale" },
        headline: ["{max}%", "Flash Sale"],
        sub: "Giá này chỉ đến hết hôm nay. Thấy món ưng thì đừng để ngày mai.",
        cta: "Săn ngay",
        countdownTo: endOfToday,
        countdownLabel: "Kết thúc sau",
        cast: [
            { src: CUT.raya, x: 7, h: 86, productId: "005", tx: 2, ty: 14 },
            { src: CUT.catarina, x: 92, h: 92, mx: 78, mh: 74, productId: "001", tx: 72, ty: 10, front: true },
        ],
        marquee: ["Giá tốt nhất hôm nay", "Số lượng có hạn", ...SHIPPING_PERKS],
        couponCode: "MIRA99K",
        crossSell: ["ban-chay", "dam", "black-friday"],
    },
    "black-friday": {
        tone: "noir",
        layout: "noir",
        door: { src: CUT.raya, label: "Black Friday" },
        headline: ["Black", "Friday"],
        sub: "Ngày giá tốt nhất năm của MIRA, giảm đến {max}% cho những món được săn nhiều nhất.",
        cta: "Xem deal Black Friday",
        countdownTo: () => new Date("2026-11-27T23:59:59+07:00"),
        countdownLabel: "Còn lại",
        cast: [
            { src: CUT.catarina, x: 20, h: 80, productId: "001", tx: 3, ty: 16, mute: true },
            { src: CUT.taylor, x: 82, h: 80, productId: "002", tx: 78, ty: 12, mute: true },
            { src: CUT.raya, x: 52, h: 104, mx: 50, mh: 98, productId: "005", tx: 62, ty: 34, front: true },
        ],
        marquee: ["Giảm đến {max}%", "Số lượng có hạn", ...SHIPPING_PERKS],
        couponCode: "MIRA99K",
        crossSell: ["flash-sale", "dam", "giang-sinh"],
    },
    "giang-sinh": {
        tone: "pine",
        layout: "pine",
        door: { src: CUT.taylor, label: "Giáng sinh" },
        headline: ["Đỏ rực", "mùa lễ hội."],
        sub: "Đêm Giáng sinh xứng đáng với một chiếc đầm thật đẹp. Quà cho mình, giảm đến {max}%.",
        cta: "Chọn quà cho mình",
        cast: [
            { src: CUT.taylor, x: 9, h: 76, productId: "002", tx: 2, ty: 44 },
            { src: CUT.raya, x: 62, h: 100, mx: 50, mh: 94, productId: "005", tx: 78, ty: 30, front: true },
        ],
        marquee: ["Quà cho mình, giá dịu dàng", "Giảm đến {max}%", ...SHIPPING_PERKS],
        couponCode: "MIRA10",
        crossSell: ["dam", "ban-chay", "flash-sale"],
    },
    "ban-chay": {
        tone: "podium",
        layout: "podium",
        door: { src: CUT.laura, label: "Bán chạy" },
        headline: ["Được chọn", "nhiều nhất."],
        sub: "Không cần đoán nữa. Đây là những món khách của MIRA mua đi mua lại, xếp theo số lượng đã bán.",
        cta: "Xem cả bảng xếp hạng",
        marquee: ["Xếp hạng theo số đã bán", ...SHIPPING_PERKS],
        couponCode: "MIRA10",
        crossSell: ["dam", "do-tap", "flash-sale"],
    },
};

THEMES["do-the-thao"] = THEMES["do-tap"];
THEMES["thoi-trang-nu"] = THEMES.all;
THEMES["san-pham-dong-gia"] = THEMES["flash-sale"];

export const DOORS = ["dam", "do-tap", "do-di-bien", "flash-sale", "ban-chay"];
export const HOME_COVERS = ["dam", "do-tap", "do-di-bien"];

const CATEGORY_THEME = { "Đầm": "dam", "Đồ tập": "do-tap", "Đồ đi biển": "do-di-bien", "Phụ kiện": "phu-kien" };

export const getTheme = (slug) => THEMES[slug] || THEMES.all;
export const getProductTheme = (product) => getTheme(CATEGORY_THEME[product.category]);
