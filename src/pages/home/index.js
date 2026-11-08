import ModalHome from "../../components/modals/home";
import { Cover, Doors, ThemeMarquee } from "../../components/collections/CollectionTheme";
import { getCollection } from "../../datas/data_product";
import { HOME_COVERS } from "../../datas/data_themes";
import Policies from "./Policies";
import FlashSale from "./FlashSale";
import CollectionSummer from "./CollectionSummer";
import LookBook from "./LookBook";
import Comments from "./Comments";
import FashionTrends from "./FashionTrends";

const Home = () => (
    <div id="home">
        <div className="main-wrapper">
            <ModalHome isOpen />
            <Doors />
            <div className="theme-page theme-page--doorway home-marquee">
                <ThemeMarquee slug="all" products={[]} />
            </div>
            <Policies />
            <FlashSale />
            <div className="cover-stack">
                {HOME_COVERS.map((slug) => (
                    <div key={slug} className={`theme-page theme-page--${
                        { dam: "atelier", "do-tap": "motion", "do-di-bien": "shore" }[slug]
                    }`}>
                        <Cover slug={slug} products={getCollection(slug).products} heading="h2" linkTo={`/collections/${slug}`} />
                    </div>
                ))}
            </div>
            <CollectionSummer />
            <LookBook />
            <Comments />
            <FashionTrends />
        </div>
    </div>
);

export default Home;
