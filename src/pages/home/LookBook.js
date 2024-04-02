import CartLook from "../../components/carts/CartLook";
import * as IMAGE_LIST from "../../assets/home";
const listItem_1 =  [
    {
        id: '001',
        img: IMAGE_LIST.img17,
        title: 'Váy Catarina',
        url:'/products/vay-easty-maxi',
        position:[{
            id: 'dot1',
            pos_x: '50%',
            pos_y: '24%',
            title:'Áo bra legging sport',
            img:IMAGE_LIST.img20,
            price:'765,000₫',
            url:'',
        },{
            id: 'dot2',
            pos_x: '50%',
            pos_y: '38%',
            title:'Quần legging Sport',
            img:IMAGE_LIST.img21,
            price:'990,000₫',
            url:'',
        },{
            id: 'dot3',
            pos_x: '37%',
            pos_y: '53%', 
            title:'Thảm yoga',
            img:IMAGE_LIST.img22,
            price:'960,000₫',
            o_price:'1,000,000₫',
            url:'',
        }],
        add_Info:[{
            code: 'EGANY',
            condition_1: 'Hỗ trợ 10.000 phí Ship cho đơn hàng từ 200.000đ',
            condition_2: 'Miễn phí Ship cho đơn hàng từ 300.000đ',
            condition_3: 'Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì',
        }]
    },
    {
        id: '002',
        img: IMAGE_LIST.img18,
        title: 'Đầm xoè Taylor',
        url:'/products/vay-easty-maxi', 
        position:[{
            id: 'dot4',
            pos_x: '43%',
            pos_y: '24%',
            title:'Áo bra tập gym Organe',
            img:IMAGE_LIST.img23,
            price:'860,000₫',
            url:'',
        },{
            id: 'dot5',
            pos_x: '40%',
            pos_y: '40%',
            title:'Quần tập gym Orange',
            img:IMAGE_LIST.img24,
            price:'780,000₫',
            url:'',
        },{
            id: 'dot6',
            pos_x: '32%',
            pos_y: '78%', 
            title:'Dây Kháng Lực Mini Band',
            img:IMAGE_LIST.img25,
            price:'560,000₫',
            o_price:'',
            url:'',
        }],
    },
    {
        id: '003',
        img: IMAGE_LIST.img19,
        title: 'Váy East Maxi',
        url:'/products/vay-easty-maxi', 
        position:[{
            id: 'dot7',
            pos_x: '50%',
            pos_y: '30%',
            title:'Áo bơi CA',
            img:IMAGE_LIST.img26,
            price:'680,000₫',
            url:'',
        },{
            id: 'dot8',
            pos_x: '50%',
            pos_y: '54%',
            title:'Quần bơi CA',
            img:IMAGE_LIST.img27,
            price:'870,000₫',
            url:'',
        },{
            id: 'dot9',
            pos_x: '36%',
            pos_y: '70%', 
            title:'Áo choàng đi biển',
            img:IMAGE_LIST.img28,
            price:'540,000₫',
            o_price:'',
            url:'',
        }],
    }   
]
const LookBook = () => {

    return (
        <>
        <div id="look-book" className="look-book-container">
            <h2 className="text">Set đồ cho bạn</h2>
            <div className="look-book-body">
                {listItem_1.map((item, index)=>(
                    <>
                        <CartLook item={item}/> 
                    </>
                ))}
            </div>
        </div>
        </>
    );
};

export default LookBook;
