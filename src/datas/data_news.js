// Bài viết DEMO cho mục Tin tức
import * as IMG from "../assets/home";

const NEWS = [
    {
        slug: "phoi-dam-hoa-cho-mua-he",
        title: "5 cách phối đầm hoa thanh lịch cho mùa hè",
        img: IMG.img15,
        date: "05/11/2026",
        readTime: "3 phút đọc",
        excerpt: "Đầm hoa không hề kén dáng nếu bạn biết chọn độ dài, chất liệu và phụ kiện đi kèm. Cùng MIRA gợi ý 5 cách phối dễ áp dụng.",
        body: [
            "Đầm hoa nhí là món đồ dễ mặc nhất trong tủ đồ mùa hè. Với nền vải sáng màu và hoạ tiết nhỏ, bạn có thể mặc đi làm mà vẫn giữ được vẻ chỉn chu.",
            "Với những buổi dạo phố, hãy kết hợp đầm cùng sandal đế bệt và túi cói. Nếu cần trang trọng hơn, một đôi giày cao gót quai mảnh và hoa tai ngọc trai sẽ nâng tầm bộ trang phục.",
            "Nguyên tắc quan trọng là giữ phụ kiện đơn sắc để hoạ tiết hoa trở thành điểm nhấn duy nhất.",
        ],
    },
    {
        slug: "chon-do-du-tiec-theo-dang-nguoi",
        title: "Chọn đầm dự tiệc phù hợp với từng dáng người",
        img: IMG.img13,
        date: "28/10/2026",
        readTime: "4 phút đọc",
        excerpt: "Một chiếc đầm vừa vặn luôn đẹp hơn một chiếc đầm đắt tiền. Đây là những lưu ý để chọn đúng form cho dáng của bạn.",
        body: [
            "Dáng quả lê nên ưu tiên chân váy xoè và phần vai có điểm nhấn để cân bằng tỷ lệ cơ thể. Dáng táo phù hợp với đầm cổ V và đường eo cao.",
            "Với dáng người nhỏ nhắn, đầm ngắn trên gối hoặc đầm dài xẻ tà sẽ giúp đôi chân trông dài hơn.",
            "Đừng quên thử đầm cùng đôi giày bạn định mang để kiểm tra độ dài chính xác.",
        ],
    },
    {
        slug: "cham-soc-vai-voan-lua",
        title: "Cách giặt và bảo quản đầm voan, lụa luôn như mới",
        img: IMG.img11,
        date: "20/10/2026",
        readTime: "2 phút đọc",
        excerpt: "Voan và lụa rất đẹp nhưng cũng dễ hư nếu giặt sai cách. Vài thói quen nhỏ giúp trang phục bền đẹp nhiều năm.",
        body: [
            "Nên giặt tay bằng nước lạnh với dung dịch giặt dịu nhẹ, tránh vò mạnh và không vắt xoắn.",
            "Phơi đồ trong bóng râm, nơi thoáng gió để giữ màu. Khi là, hãy để nhiệt độ thấp và lót một lớp vải mỏng lên trên.",
            "Bảo quản bằng móc mềm hoặc gấp cùng giấy lụa để tránh vết hằn.",
        ],
    },
    {
        slug: "do-tap-thoai-mai-tai-nha",
        title: "Bộ đồ tập tại nhà: thoải mái mà vẫn đẹp",
        img: IMG.img17,
        date: "12/10/2026",
        readTime: "3 phút đọc",
        excerpt: "Chất liệu co giãn, cạp cao và màu pastel đang là lựa chọn của nhiều chị em yêu thích tập luyện tại nhà.",
        body: [
            "Một bộ đồ tập tốt cần co giãn 4 chiều và thấm hút mồ hôi nhanh. Quần cạp cao giúp cố định phần bụng khi vận động.",
            "Với yoga và pilates, hãy chọn áo bra nâng đỡ vừa. Các bài cardio cường độ cao nên dùng loại nâng đỡ cao hơn.",
            "Kết hợp thêm thảm tập chống trượt và dây kháng lực là bạn đã có một góc tập gọn gàng ngay tại nhà.",
        ],
    },
    {
        slug: "hanh-trang-di-bien",
        title: "Hành trang đi biển gọn nhẹ cho chuyến đi 3 ngày",
        img: IMG.img28,
        date: "02/10/2026",
        readTime: "3 phút đọc",
        excerpt: "Chỉ cần vài món đồ phối được với nhau, vali của bạn sẽ gọn hơn mà ảnh check-in vẫn đẹp.",
        body: [
            "Hãy chọn một bộ đồ bơi tông trung tính và một áo choàng móc ren để mặc từ bãi biển đến quán cà phê.",
            "Một chiếc đầm maxi chất voan nhẹ sẽ phù hợp cho buổi tối, lại không chiếm nhiều chỗ trong vali.",
            "Đừng quên kem chống nắng, mũ rộng vành và một đôi sandal êm chân.",
        ],
    },
    {
        slug: "gam-mau-pastel-len-ngoi",
        title: "Gam màu pastel tiếp tục được yêu thích trong năm nay",
        img: IMG.img1,
        date: "24/09/2026",
        readTime: "2 phút đọc",
        excerpt: "Từ đầm dạo phố đến đồ tập, các tông màu nhẹ mang lại cảm giác dịu mát và dễ phối đồ.",
        body: [
            "Hồng phấn, cam đào và vàng bơ là những tông màu dễ mặc với nhiều màu da.",
            "Khi phối, bạn có thể kết hợp hai tông pastel gần nhau hoặc thêm một món đồ trắng để tổng thể sáng hơn.",
        ],
    },
];

export const getNewsBySlug = (slug) => NEWS.find((post) => post.slug === slug);

export default NEWS;
