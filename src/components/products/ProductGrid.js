import CartHome from "../carts/Home/CartHome"

// Lưới thẻ sản phẩm dùng chung cho các tab/section
const ProductGrid = ({ items = [] }) => (
    <div className="tab_first">
        {items.map((item) => (
            <CartHome key={item.id} item={item} />
        ))}
    </div>
)

export default ProductGrid
