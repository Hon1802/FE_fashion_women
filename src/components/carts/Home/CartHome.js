import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const CartHome = (props) => {
    const {item} = props;
    return (
        <>
            <div className='cart-container'>
                <div className='detail-item'>
                    <div className='product-thumbnail'>
                        <img src={item.img}>
                        </img>
                        <div className='action-bar'>
                            <div className='view-flash'>
                                <i className=''></i>
                            </div>
                            <div className='custom'>

                            </div>
                        </div>
                    </div>
                    <div className='product-info'>
                        <div>
                            <span className='product-vendor'>{item.vendor}</span>
                            <div className='like-heart'></div>
                        </div>
                        <div className='product-name'>

                        </div>
                        <div className='product-rating'>
                            <p>{item.price}</p>
                        </div>
                        <div className='product-item-cta'>
                            <p>{item.compare_price}</p>
                        </div>
                        <div className='item-color-chosen'>

                        </div>
                        <div className='product-promotion hidden'>

                        </div>
                    </div>
                </div>
                <div className='flashsale-bottom'>
                    <div className='flashsale-label'>

                    </div>
                    <div className='flashsale-percent'>

                    </div>
                </div>
            </div>
        </>
    )
}
export default CartHome;