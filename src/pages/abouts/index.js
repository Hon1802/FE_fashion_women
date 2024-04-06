import { Link } from "react-router-dom";

const AboutUs = () => {
    return ( 
        <div className="dflex-center-column">
            <div className="w85-per">
                <div>
                    <ul className="d-inline-flex g-2"> 
                        <li>
                            <Link to="/">
                                <span className="text" style={{color:"#000000"}}>Trang chủ</span>
                            </Link>
                        </li> 
                        <p>/</p>
                        <li>
                            <Link to="/login">
                                <span style={{color:"#BFBFBF"}} className="text">Giới thiệu</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text" style={{fontSize: '24px', fontWeight:'500'}}>Giới thiệu</h3>
                    <h4 className="text">
                    Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.
                    </h4>
                    <h4 className="text">Một vài gợi ý cho nội dung trang Giới thiệu:</h4>
                    <ul>
                        <li style={{listStyleType: 'disc'}}>
                            Bạn là ai
                        </li>
                        <li style={{listStyleType: 'disc'}}>
                            Giá trị kinh doanh của bạn là gì
                        </li>
                        <li style={{listStyleType: 'disc'}}>
                            Địa chỉ cửa hàng                            
                        </li>
                        <li style={{listStyleType: 'disc'}}>
                            Bạn đã kinh doanh trong ngành hàng này bao lâu rồi
                        </li>
                        <li style={{listStyleType: 'disc'}}>
                            Bạn kinh doanh ngành hàng online được bao lâu
                        </li>
                        <li style={{listStyleType: 'disc'}}>
                            Đội ngũ của bạn gồm những ai
                        </li>
                        <li style={{listStyleType: 'disc'}}>
                            Thông tin liên hệ
                        </li>
                        <li style={{listStyleType: 'disc'}}>
                            Liên kết đến các trang mạng xã hội (Twitter, Facebook)
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    )
}
export default AboutUs;