import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faClock, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import toast from 'react-hot-toast';
import BrandLogo from '../../components/brand/BrandLogo';
import { SHOP } from '../../constants/shop-config';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const FOOTER_MENUS = [
    {
        key: 'about',
        title: 'Về chúng tôi',
        links: [
            { label: 'Giới thiệu', to: '/pages/about-us' },
            { label: 'Hệ thống cửa hàng', to: '/pages/he-thong-cua-hang' },
            { label: 'Tin tức thời trang', to: '/blogs/news' },
            { label: 'Liên hệ', to: '/pages/lien-he' },
        ],
    },
    {
        key: 'support',
        title: 'Hỗ trợ khách hàng',
        links: [
            { label: 'Câu hỏi thường gặp', to: '/pages/cau-hoi-thuong-gap' },
            { label: 'Kiểm tra đơn hàng', to: '/pages/kiem-tra-don-hang' },
            { label: 'Chính sách giao hàng', to: '/pages/chinh-sach-giao-hang' },
            { label: 'Chính sách đổi trả', to: '/pages/chinh-sach-doi-tra' },
            { label: 'Chính sách bán hàng', to: '/pages/chinh-sach-ban-hang' },
        ],
    },
];

const SOCIALS = [
    { label: 'Facebook', icon: faFacebookF, href: SHOP.social.facebook },
    { label: 'Instagram', icon: faInstagram, href: SHOP.social.instagram },
    { label: 'TikTok', icon: faTiktok, href: SHOP.social.tiktok },
    { label: 'YouTube', icon: faYoutube, href: SHOP.social.youtube },
];

const PAYMENTS = ['COD', 'Chuyển khoản', 'Thẻ ATM', 'Visa / Master', 'Ví điện tử'];

const Footer = () => {
    const [openMenus, setOpenMenus] = useState({});
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const toggleMenu = (key) => setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));

    // Shop demo chưa có API đăng ký nhận tin: chỉ validate và thông báo phía client
    const handleSubscribe = (event) => {
        event.preventDefault();
        const value = email.trim();
        if (!EMAIL_PATTERN.test(value)) {
            toast.error('Vui lòng nhập địa chỉ email hợp lệ');
            return;
        }
        setSubmitting(true);
        toast.success('Cảm ơn bạn đã đăng ký nhận tin từ ' + SHOP.name + '!');
        setEmail('');
        setSubmitting(false);
    };

    return (
        <footer id="footer" className="site-footer">
            <div className="site-footer-inner">
                <div className="site-footer-grid">
                    <section className="site-footer-brand">
                        <BrandLogo variant="light" />
                        <p className="site-footer-desc">{SHOP.description}</p>
                        <ul className="site-footer-contact">
                            <li>
                                <FontAwesomeIcon icon={faLocationDot} fixedWidth />
                                <span>{SHOP.address}</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} fixedWidth />
                                <a href={SHOP.hotlineHref}>{SHOP.hotline}</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                                <a href={`mailto:${SHOP.email}`}>{SHOP.email}</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faClock} fixedWidth />
                                <span>{SHOP.workingHours}</span>
                            </li>
                        </ul>
                    </section>

                    {FOOTER_MENUS.map((menu) => (
                        <nav key={menu.key} className={`site-footer-menu ${openMenus[menu.key] ? 'is-open' : ''}`} aria-label={menu.title}>
                            <button
                                type="button"
                                className="site-footer-heading"
                                onClick={() => toggleMenu(menu.key)}
                                aria-expanded={Boolean(openMenus[menu.key])}
                            >
                                {menu.title}
                                <FontAwesomeIcon icon={faChevronDown} className="site-footer-chevron" />
                            </button>
                            <ul>
                                {menu.links.map((link) => (
                                    <li key={link.to}>
                                        <Link to={link.to}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}

                    <section className="site-footer-newsletter">
                        <h3 className="site-footer-heading site-footer-heading--static">Đăng ký nhận tin</h3>
                        <p className="site-footer-desc">Nhận thông tin bộ sưu tập mới và ưu đãi dành riêng cho thành viên.</p>
                        <form className="newsletter-form" onSubmit={handleSubscribe} noValidate>
                            <label htmlFor="newsletter-email" className="visually-hidden">Địa chỉ email</label>
                            <input
                                id="newsletter-email"
                                type="email"
                                placeholder="Email của bạn"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                            />
                            <button type="submit" disabled={submitting}>Đăng ký</button>
                        </form>
                        <ul className="site-footer-social">
                            {SOCIALS.map((social) => (
                                <li key={social.label}>
                                    <a href={social.href} aria-label={`${SHOP.name} trên ${social.label}`} title={social.label}>
                                        <FontAwesomeIcon icon={social.icon} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <p className="site-footer-wordmark" aria-hidden="true">{SHOP.name}</p>
                <div className="site-footer-bottom">
                    <p>© {SHOP.copyrightYear} {SHOP.fullName}. Website demo phục vụ mục đích học tập.</p>
                    <ul className="site-footer-payments" aria-label="Phương thức thanh toán">
                        {PAYMENTS.map((method) => (
                            <li key={method}>{method}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
