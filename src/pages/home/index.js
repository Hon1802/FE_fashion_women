import Footer from "./Footer";
import Banner from "./Banner";
import FlashSale from "./FlashSale";
import Policies from "./Policies";
import SessionCollection from "./SessionCollection";
import SessionCoupons from "./SessionCoupons";
const Home = () => {
    return (
        <div id="home">
            <div className="main-wrapper">
                <Banner/>
                <Policies/>
                <SessionCollection/>
                <SessionCoupons/>
                <FlashSale/>
                <Footer/>


            </div>
        </div>
    )
}
export default Home;