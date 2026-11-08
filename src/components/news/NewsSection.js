import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDay, faClock } from "@fortawesome/free-solid-svg-icons"
import NEWS from "../../datas/data_news"

const postUrl = (post) => `/blogs/news/${post.slug}`

// Khu vực tin tức: một bài nổi bật và danh sách các bài còn lại
const NewsSection = ({ limit = NEWS.length, heading = "Tin tức", showAllLink = false }) => {
    const [featured, ...others] = NEWS.slice(0, limit)

    return (
        <section className="news-section" aria-label={heading}>
            <div className="news-section-head">
                <h2 className="news-section-title">{heading}</h2>
                {showAllLink && <Link to="/blogs/news" className="news-section-all">Xem tất cả</Link>}
            </div>
            <div className="news-section-grid">
                <article className="news-featured">
                    <Link to={postUrl(featured)} className="news-featured-media">
                        <img src={featured.img} alt={featured.title} loading="lazy" />
                    </Link>
                    <div className="news-meta">
                        <span><FontAwesomeIcon icon={faCalendarDay} /> {featured.date}</span>
                        <span><FontAwesomeIcon icon={faClock} /> {featured.readTime}</span>
                    </div>
                    <h3><Link to={postUrl(featured)}>{featured.title}</Link></h3>
                    <p>{featured.excerpt}</p>
                    <Link to={postUrl(featured)} className="news-read-more">Đọc tiếp</Link>
                </article>
                <div className="news-list">
                    {others.map((post) => (
                        <article key={post.slug} className="news-item">
                            <Link to={postUrl(post)} className="news-item-media">
                                <img src={post.img} alt={post.title} loading="lazy" />
                            </Link>
                            <div>
                                <div className="news-meta"><span>{post.date}</span></div>
                                <h3><Link to={postUrl(post)}>{post.title}</Link></h3>
                                <p>{post.excerpt}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewsSection
