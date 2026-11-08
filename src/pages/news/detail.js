import { Link, useParams } from "react-router-dom"
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"
import PageNotFound from "../404"
import NEWS, { getNewsBySlug } from "../../datas/data_news"

const NewsDetail = () => {
    const { slug } = useParams()
    const post = getNewsBySlug(slug)

    if (!post) return <PageNotFound />

    const related = NEWS.filter((item) => item.slug !== slug).slice(0, 3)

    return (
        <article className="static-page news-detail">
            <Breadcrumb items={[{ label: "Tin tức", to: "/blogs/news" }, { label: post.title }]} />
            <header className="news-detail-head">
                <h1>{post.title}</h1>
                <div className="news-meta"><span>{post.date}</span><span>{post.readTime}</span></div>
            </header>
            <img className="news-detail-cover" src={post.img} alt={post.title} />
            <div className="news-detail-body">
                <p className="news-detail-lead">{post.excerpt}</p>
                {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <aside className="news-related">
                <h2>Bài viết khác</h2>
                <ul>
                    {related.map((item) => (
                        <li key={item.slug}>
                            <Link to={`/blogs/news/${item.slug}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </article>
    )
}

export default NewsDetail
