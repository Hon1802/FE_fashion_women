import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import * as IMG from '../../assets/home';
import NewsSection from '../../components/news/NewsSection';
import { SHOP } from '../../constants/shop-config';

const INSTAGRAM_GALLERY = [
    { img: IMG.img3, alt: 'Đầm xoè tay phồng Taylor' },
    { img: IMG.img13, alt: 'Đầm dự tiệc hoa hồng Raya' },
    { img: IMG.img28, alt: 'Áo choàng đi biển móc ren' },
    { img: IMG.img15, alt: 'Đầm cổ vuông hoa nhí Laura' },
    { img: IMG.img20, alt: 'Áo bra thể thao Pastel' },
];

const FashionTrends = () => (
    <div id="fashion-trends">

        <section className="insta-section" aria-label="Instagram">
            <h2 className="news-section-title">@ {SHOP.name.toLowerCase()}.fashion</h2>
            <div className="insta-grid">
                {INSTAGRAM_GALLERY.map((item) => (
                    <a key={item.alt} className="insta-item" href={SHOP.social.instagram} aria-label={`Xem trên Instagram: ${item.alt}`}>
                        <img src={item.img} alt={item.alt} loading="lazy" />
                        <span className="insta-item-icon"><FontAwesomeIcon icon={faInstagram} /></span>
                    </a>
                ))}
            </div>
        </section>

        <div className="trend-news">
            <NewsSection limit={4} heading="Tin tức" showAllLink />
        </div>
    </div>
);

export default FashionTrends;
