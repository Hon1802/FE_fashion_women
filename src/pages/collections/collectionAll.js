import * as React from "react"
import { useLocation, useParams } from "react-router-dom";
import { Pagination, Select, Tag } from 'antd';
import SessionCoupons from "../../components/collections/SessionCoupons";
import CartHome from "../../components/carts/Home/CartHome";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { ThemeCrossSell, ThemeHero, ThemeMarquee, ThemeSpotlight } from "../../components/collections/CollectionTheme";
import { PRODUCT_GROUPS, getCollection } from "../../datas/data_product";
import { getTheme } from "../../datas/data_themes";
import { PRODUCT_LINES } from "../../constants/shop-config";

const PAGE_SIZE = 12;

// Các trang landing dùng chung giao diện danh mục
const LANDING_COLLECTIONS = {
    "/pages/landing-page-xmas": "giang-sinh",
    "/pages/landing-page-black-friday": "black-friday",
    "/pages/landing-page-onepage": "ban-chay",
    "/collections/do-ngu": "all",
};

const FILTER_GROUPS = [
    {
        key: "category",
        title: "Danh mục",
        options: ["Đầm", "Đồ tập", "Đồ đi biển", "Phụ kiện"].map((value) => ({ value, label: value })),
        match: (product, value) => product.category === value,
    },
    {
        key: "line",
        title: "Dòng sản phẩm",
        options: Object.values(PRODUCT_LINES).map((value) => ({ value, label: value })),
        match: (product, value) => product.vendor === value,
    },
    {
        key: "price",
        title: "Mức giá",
        options: [
            { value: "0-300000", label: "Dưới 300.000₫" },
            { value: "300000-500000", label: "300.000₫ - 500.000₫" },
            { value: "500000-800000", label: "500.000₫ - 800.000₫" },
            { value: "800000-999999999", label: "Trên 800.000₫" },
        ],
        match: (product, value) => {
            const [min, max] = value.split("-").map(Number);
            return product.priceValue >= min && product.priceValue < max;
        },
    },
];

const SORTERS = {
    newest: (a, b) => a.id.localeCompare(b.id),
    "price-asc": (a, b) => a.priceValue - b.priceValue,
    "price-desc": (a, b) => b.priceValue - a.priceValue,
    "best-selling": (a, b) => Number(b.number) - Number(a.number),
};

const EMPTY_FILTERS = { category: [], line: [], price: [] };

const CollectionAll = () => {
    const { param } = useParams();
    const { pathname } = useLocation();
    const slug = LANDING_COLLECTIONS[pathname] || param || "all";
    const collection = React.useMemo(() => getCollection(slug), [slug]);
    const theme = getTheme(slug);

    const [filters, setFilters] = React.useState(EMPTY_FILTERS);
    const [sortKey, setSortKey] = React.useState("newest");
    const [currentPage, setCurrentPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(PAGE_SIZE);

    // Đổi danh mục -> reset bộ lọc và trang
    React.useEffect(() => {
        setFilters(EMPTY_FILTERS);
        setCurrentPage(1);
    }, [slug]);

    const filteredItems = React.useMemo(() => {
        const result = collection.products.filter((product) =>
            FILTER_GROUPS.every((group) => {
                const selected = filters[group.key];
                return selected.length === 0 || selected.some((value) => group.match(product, value));
            })
        );
        return result.sort(SORTERS[sortKey]);
    }, [collection, filters, sortKey]);

    const visibleFilterGroups = FILTER_GROUPS
        .map((group) => ({
            ...group,
            options: group.options.filter((option) => collection.products.some((product) => group.match(product, option.value))),
        }))
        .filter((group) => group.options.length > 1);

    const currentItems = filteredItems.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const toggleFilter = (groupKey, value) => {
        setCurrentPage(1);
        setFilters((prev) => {
            const selected = prev[groupKey];
            return {
                ...prev,
                [groupKey]: selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value],
            };
        });
    };

    const activeTags = FILTER_GROUPS.flatMap((group) =>
        filters[group.key].map((value) => ({
            group: group.key,
            value,
            label: group.options.find((option) => option.value === value)?.label || value,
        }))
    );

    const handlePageChange = (page, size) => {
        setCurrentPage(page);
        setPageSize(size);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div id="collection-list" className={`theme-page theme-page--${theme.tone}`}>
            <div id="shop-system-page" className="dflex-center-column">
                <div className="theme-breadcrumb content-top-page">
                    <Breadcrumb items={collection.slug === "all"
                        ? [{ label: collection.title }]
                        : [{ label: "Tất cả sản phẩm", to: "/collections/all" }, { label: collection.title }]} />
                </div>
                <ThemeHero slug={slug} products={collection.products} />
                <ThemeMarquee slug={slug} products={collection.products} />
                <ThemeSpotlight products={collection.products} />
                {collection.slug === "all" && <SessionCoupons/>}
                <div className="row body-collection w85-per" id="collection-products">
                    <div className="mobile-container-1">
                        <div className="col-3 ">
                            <h2 className="text tittle-text">{collection.title}</h2>
                            <p className="collection-count">{filteredItems.length} sản phẩm</p>
                        </div>
                        <div className="col-9 row">
                            <div className="d-flex container-span col-10 align-items-center">
                                {activeTags.map((tag) => (
                                    <Tag
                                        key={`${tag.group}-${tag.value}`}
                                        className="deco-span text"
                                        closable
                                        onClose={(e) => { e.preventDefault(); toggleFilter(tag.group, tag.value); }}
                                    >
                                        {tag.label}
                                    </Tag>
                                ))}
                                {activeTags.length > 0 && (
                                    <button type="button" className="clear-filter" onClick={() => setFilters(EMPTY_FILTERS)}>
                                        Xoá bộ lọc
                                    </button>
                                )}
                            </div>
                            <div className="fill col-2 d-flex">
                                <label className="text nowrap" htmlFor="collection-sort">Sắp xếp:</label>
                                <Select
                                    id="collection-sort"
                                    value={sortKey}
                                    style={{ width: 170 }}
                                    onChange={setSortKey}
                                    options={[
                                        { value: "newest", label: "Mới nhất" },
                                        { value: "best-selling", label: "Bán chạy nhất" },
                                        { value: "price-asc", label: "Giá tăng dần" },
                                        { value: "price-desc", label: "Giá giảm dần" },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                    <aside className="col-3 col-left" aria-label="Bộ lọc sản phẩm">
                        {visibleFilterGroups.map((group) => (
                            <div key={group.key}>
                                <h3 className="text">{group.title.toUpperCase()}</h3>
                                <ul>
                                    {group.options.map((option) => {
                                        const inputId = `filter-${group.key}-${option.value}`;
                                        return (
                                            <li key={option.value}>
                                                <input
                                                    id={inputId}
                                                    type="checkbox"
                                                    checked={filters[group.key].includes(option.value)}
                                                    onChange={() => toggleFilter(group.key, option.value)}
                                                />
                                                <label className="text" htmlFor={inputId}>{option.label}</label>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </aside>
                    <div className="col-9 col-right d-flex flex-column container-cart">
                        {currentItems.length > 0 ? (
                            <>
                                <div className="flash-body">
                                    <div className="tab_first">
                                        {currentItems.map((item) => (
                                            <CartHome key={item.id} item={item}/>
                                        ))}
                                    </div>
                                </div>
                                {filteredItems.length > pageSize && (
                                    <div className="d-flex justify-content-center">
                                        <Pagination
                                            total={filteredItems.length}
                                            current={currentPage}
                                            pageSize={pageSize}
                                            pageSizeOptions={['12', '24', '36']}
                                            showSizeChanger
                                            showTotal={(total) => `Tổng ${total} sản phẩm`}
                                            onChange={handlePageChange}
                                        />
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="empty-state">
                                <h2 className="empty-state-title">Không có sản phẩm phù hợp</h2>
                                <p className="empty-state-desc">Thử bỏ bớt bộ lọc hoặc xem tất cả sản phẩm của cửa hàng.</p>
                                <button type="button" className="page-btn" onClick={() => setFilters(EMPTY_FILTERS)}>
                                    Xoá bộ lọc
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="d-flex flex-column seen">
                        <h3 className="text section-heading">Sản phẩm đã xem</h3>
                        <div className="flash-body">
                            <div className="tab_first">
                                {PRODUCT_GROUPS.recentlyViewed.map((item) => (
                                    <CartHome key={item.id} item={item}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <ThemeCrossSell slug={slug} />
            </div>
        </div>
    )
}
export default CollectionAll;
