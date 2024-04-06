
import * as IMAGELIST from "../../assets/profile";
import {img1, img3, img5} from "../../assets/home"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as lightStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
const listItem_1 =  [
    {
        id: '001',
        avatar: IMAGELIST.ava1,
        name:'Liên Hoa',
        rating:'5',
        content:'Sản phẩm chất lượng, chất vải mềm mát mặc vào rất thoải mái và ôm sát người giúp khoe được điểm mạnh của tôi, giá cả hợp lý, giao hàng nhanh',
        add_Info:[{
            name_product: 'Catarina',
            img: img1,
            url: '/products/001'
        }]
    },
    {
        id: '002',
        avatar: IMAGELIST.ava2,
        name:'Bích Chi',
        rating:'5',
        content:'Sản phẩm đẹp, chất liệu mát, mặc vừa người, nhân viên phục vụ rất tận tình và chu đáo, quá tốt',
        add_Info:[{
            name_product: 'Taylor',
            img: img3,
            url: '/products/002'
        }]
    },
    {
        id: '003',
        avatar: IMAGELIST.ava3,
        name:'Thu Hằng',
        rating:'4.5',
        content:'Giao hàng nhanh, anh shipper dễ thương, váy xuất sắc, mặc đẹp lắm, sẽ ửng hộ shop dài dài.Tốt!!!',
        add_Info:[{
            name_product: 'Maxi',
            img:img5,
            url: '/products/003'
        }]
    },
]
const Comments = () => {

    return (
        <>
            <div className="comment-container">
                <h2 className="title text" style={{fontSize: '32px'}}>
                    Khách hàng đã nói gì
                </h2>
                <div className="body">
                    {listItem_1.map((item, index)=>( 
                        <div className="content-cover">
                            <div  style={{display: 'inline-flex', gap: '20px', marginBottom: '20px'}}>
                                <div className="img-top">
                                    <img alt="avata" src={item.avatar}/>
                                </div>
                                <div style={{display: 'flex', flexDirection:'column'}}>
                                    <span className="text">
                                        {item.name}
                                    </span>
                                    <span className="stars">
                                        {item.rating?(
                                            <>
                                            {[...Array(Math.floor(item.rating))].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20px"
                                                    height="20px"
                                                    fill="currentColor"
                                                    viewBox="0 0 26 28"
                                                    style = {{color:"#fabd0d", maxWidth:'50%'}}
                                                >
                                                    <path d="M26 10.109c0 0.281-0.203 0.547-0.406 0.75l-5.672 5.531 1.344 7.812c0.016 0.109 0.016 0.203 0.016 0.313 0 0.406-0.187 0.781-0.641 0.781-0.219 0-0.438-0.078-0.625-0.187l-7.016-3.687-7.016 3.687c-0.203 0.109-0.406 0.187-0.625 0.187-0.453 0-0.656-0.375-0.656-0.781 0-0.109 0.016-0.203 0.031-0.313l1.344-7.812-5.688-5.531c-0.187-0.203-0.391-0.469-0.391-0.75 0-0.469 0.484-0.656 0.875-0.719l7.844-1.141 3.516-7.109c0.141-0.297 0.406-0.641 0.766-0.641s0.625 0.344 0.766 0.641l3.516 7.109 7.844 1.141c0.375 0.063 0.875 0.25 0.875 0.719z"></path>
                                                </svg>
                                            ))}
                                            {item.rating % 1 !== 0 ? ( // Kiểm tra xem có phần thập phân không
                                                <div style={{width: '18px', position:'relative'}}>
                                                    <FontAwesomeIcon icon={lightStar} style={{position:'absolute', top: '0px'}}/>
                                                    <div style={{width:`${(item.rating % 1)*100}%`, position: 'absolute', zIndex:'2', top:'-6px'}}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20px"
                                                            height="20px"
                                                            fill="currentColor"
                                                            viewBox="0 0 26 28"
                                                            style = {{color:"#fabd0d"}}
                                                        >
                                                            <path d="M26 10.109c0 0.281-0.203 0.547-0.406 0.75l-5.672 5.531 1.344 7.812c0.016 0.109 0.016 0.203 0.016 0.313 0 0.406-0.187 0.781-0.641 0.781-0.219 0-0.438-0.078-0.625-0.187l-7.016-3.687-7.016 3.687c-0.203 0.109-0.406 0.187-0.625 0.187-0.453 0-0.656-0.375-0.656-0.781 0-0.109 0.016-0.203 0.031-0.313l1.344-7.812-5.688-5.531c-0.187-0.203-0.391-0.469-0.391-0.75 0-0.469 0.484-0.656 0.875-0.719l7.844-1.141 3.516-7.109c0.141-0.297 0.406-0.641 0.766-0.641s0.625 0.344 0.766 0.641l3.516 7.109 7.844 1.141c0.375 0.063 0.875 0.25 0.875 0.719z"></path>
                                                        </svg> 
                                                    </div>
                                                    
                                                </div>
                                            ) : null}
                                        </>
                                        
                                        ):(
                                            <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width= "20px"
                                                    height="20px"
                                                    fill="currentColor"
                                                    viewBox="0 0 26 28"
                                                >
                                                <path d="M26 10.109c0 0.281-0.203 0.547-0.406 0.75l-5.672 5.531 1.344 7.812c0.016 0.109 0.016 0.203 0.016 0.313 0 0.406-0.187 0.781-0.641 0.781-0.219 0-0.438-0.078-0.625-0.187l-7.016-3.687-7.016 3.687c-0.203 0.109-0.406 0.187-0.625 0.187-0.453 0-0.656-0.375-0.656-0.781 0-0.109 0.016-0.203 0.031-0.313l1.344-7.812-5.688-5.531c-0.187-0.203-0.391-0.469-0.391-0.75 0-0.469 0.484-0.656 0.875-0.719l7.844-1.141 3.516-7.109c0.141-0.297 0.406-0.641 0.766-0.641s0.625 0.344 0.766 0.641l3.516 7.109 7.844 1.141c0.375 0.063 0.875 0.25 0.875 0.719z"></path>
                                            </svg> 
                                        )}
                                    </span>
                                </div>
                            </div>
                            <p className="text para-content">
                                {item.content}
                            </p>
                            <div style={{borderTop: '1px solid #000000', paddingTop:'5px'}}>
                            {item.add_Info.map((product, index)=>(
                                <>                                    
                                    <div  style={{display: 'inline-flex', gap: '20px', marginBottom: '20px'}}>
                                        <div className="img-bottom">
                                            <img alt="product" src={product.img}/>
                                        </div>
                                        <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
                                            <Link className='style-a text' to={product.url}>
                                                {product.name_product}
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            ))}
                            </div>
                        </div>  
                    ))}
                </div>
            </div>
        </>
    );
};

export default Comments;
