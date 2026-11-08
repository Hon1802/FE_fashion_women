import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import NewsSection from "../../components/news/NewsSection";

const News = () => {
    return (
        <div id="news-page" className="static-page">
            <Breadcrumb items={[{ label: "Tin tức" }]} />
            <NewsSection heading="Tin tức thời trang" />
        </div>
    )
}
export default News;
