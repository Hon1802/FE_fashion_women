import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faCopy } from "@fortawesome/free-solid-svg-icons"
import toast from "react-hot-toast"
import ListProduct, { getCollection, getProductById } from "../../datas/data_product"
import { CUTOUT_BY_PRODUCT, DOORS, getTheme } from "../../datas/data_themes"
import { COUPONS } from "../../constants/shop-config"

const toPercent = (product) => parseInt(product.discount, 10) || 0
const bySold = (a, b) => Number(b.number) - Number(a.number)

export const fillText = (text, products) =>
    text.replace("{max}", Math.max(0, ...products.map(toPercent)))

const scrollToProducts = () =>
    document.getElementById("collection-products")?.scrollIntoView({ behavior: "smooth", block: "start" })

// Chuyển động của bìa: lệch theo chuột và theo vị trí cuộn, ghi vào biến CSS
const useCoverMotion = () => {
    const ref = useRef(null)

    useEffect(() => {
        const node = ref.current
        if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined

        let frame = 0
        const pointer = { x: 0, y: 0 }
        const paint = () => {
            frame = 0
            const rect = node.getBoundingClientRect()
            const progress = Math.min(1, Math.max(-1, -rect.top / (rect.height || 1)))
            node.style.setProperty("--mx", pointer.x.toFixed(3))
            node.style.setProperty("--my", pointer.y.toFixed(3))
            node.style.setProperty("--sy", progress.toFixed(3))
        }
        const schedule = () => { if (!frame) frame = requestAnimationFrame(paint) }
        const onPointerMove = (event) => {
            const rect = node.getBoundingClientRect()
            pointer.x = (event.clientX - rect.left) / rect.width - 0.5
            pointer.y = (event.clientY - rect.top) / rect.height - 0.5
            schedule()
        }

        const canHover = window.matchMedia("(hover: hover)").matches
        if (canHover) node.addEventListener("pointermove", onPointerMove)
        window.addEventListener("scroll", schedule, { passive: true })
        paint()
        return () => {
            node.removeEventListener("pointermove", onPointerMove)
            window.removeEventListener("scroll", schedule)
            cancelAnimationFrame(frame)
        }
    }, [])

    return ref
}

const useCountdown = (getTarget) => {
    const [target] = useState(() => (getTarget ? getTarget().getTime() : null))
    const [now, setNow] = useState(() => Date.now())

    useEffect(() => {
        if (!target) return undefined
        const timer = setInterval(() => setNow(Date.now()), 1000)
        return () => clearInterval(timer)
    }, [target])

    if (!target || target <= now) return null
    const total = Math.floor((target - now) / 1000)
    return {
        days: Math.floor(total / 86400),
        hours: Math.floor((total % 86400) / 3600),
        minutes: Math.floor((total % 3600) / 60),
        seconds: total % 60,
    }
}

const Countdown = ({ getTarget, label }) => {
    const time = useCountdown(getTarget)
    if (!time) return null

    const units = [
        ...(time.days > 0 ? [["Ngày", time.days]] : []),
        ["Giờ", time.hours],
        ["Phút", time.minutes],
        ["Giây", time.seconds],
    ]

    return (
        <div className="theme-countdown" role="timer" aria-label={label}>
            <span className="theme-countdown-label">{label}</span>
            <div className="theme-countdown-units">
                {units.map(([unit, value]) => (
                    <span key={unit} className="theme-countdown-unit">
                        <strong>{String(value).padStart(2, "0")}</strong>
                        <small>{unit}</small>
                    </span>
                ))}
            </div>
        </div>
    )
}

const CouponButton = ({ code }) => {
    const coupon = COUPONS.find((item) => item.code === code)
    if (!coupon) return null

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(coupon.code)
            toast.success(`Đã sao chép mã ${coupon.code}`)
        } catch (error) {
            toast.error("Không thể sao chép, vui lòng nhập mã thủ công")
        }
    }

    return (
        <button type="button" className="theme-coupon" onClick={handleCopy} title={coupon.desc}>
            <span>Mã <strong>{coupon.code}</strong></span>
            <FontAwesomeIcon icon={faCopy} />
        </button>
    )
}

const castStyle = (member, index) => ({
    "--x": `${member.x}%`,
    "--h": `${member.h}%`,
    "--mobile-x": member.mx !== undefined ? `${member.mx}%` : undefined,
    "--mobile-h": member.mh !== undefined ? `${member.mh}%` : undefined,
    "--delay": `${index * 90}ms`,
    "--depth": member.front ? 1 : 0.45,
})

const CoverTag = ({ member }) => {
    const product = getProductById(member.productId)
    if (!product) return null
    return (
        <Link to={product.url} className="cover-tag" style={{ "--tx": `${member.tx}%`, "--ty": `${member.ty}%` }}>
            <span className="cover-tag-name">{product.title}</span>
            <span className="cover-tag-price">
                {product.price}
                {product.discount && <em>-{product.discount}</em>}
            </span>
        </Link>
    )
}

const PodiumCast = ({ products }) => {
    const [first, second, third] = [...products].sort(bySold)
    const places = [[second, 2], [first, 1], [third, 3]].filter(([product]) => product)

    return (
        <ol className="cover-podium">
            {places.map(([product, rank]) => (
                <li key={product.id} className={`cover-place cover-place--${rank}`}>
                    <Link to={product.url}>
                        <img src={CUTOUT_BY_PRODUCT[product.id] || product.img_1} alt={product.title} />
                        <span className="cover-plinth">
                            <strong>{rank}</strong>
                            <span>{product.title}</span>
                            <small>Đã bán {product.number}</small>
                        </span>
                    </Link>
                </li>
            ))}
        </ol>
    )
}

// Bìa tạp chí: chữ khổng lồ, người mẫu tách nền xen giữa hai dòng chữ, gắn nhãn mua hàng
export const Cover = ({ slug, products, heading: Heading = "h1", linkTo }) => {
    const theme = getTheme(slug)
    const ref = useCoverMotion()
    const [back, front] = theme.headline.map((line) => fillText(line, products))
    const cast = theme.cast || []

    return (
        <section ref={ref} className={`cover cover--${theme.layout}`}>
            <div className="cover-stage">
                <div className="cover-backdrop" aria-hidden="true" />
                <Heading className="cover-heading">
                    <span className="cover-line cover-line--back">{back}</span>{" "}
                    <span className="cover-line cover-line--front">{front}</span>
                </Heading>
                {cast.length > 0 && (
                    <div className="cover-cast" aria-hidden="true">
                        {cast.map((member, index) => (
                            <img
                                key={member.src}
                                src={member.src}
                                alt=""
                                className={`cover-model ${member.mute ? "cover-model--mute" : ""} ${member.mx === undefined ? "cover-model--desktop" : ""}`}
                                style={castStyle(member, index)}
                            />
                        ))}
                    </div>
                )}
                {theme.layout === "podium" && <PodiumCast products={products} />}
                {theme.layout === "bien" && (
                    <div className="cover-waves" aria-hidden="true">
                        <svg viewBox="0 0 2880 120" preserveAspectRatio="none"><path d="M0 60 C 240 10 480 10 720 60 S 1200 110 1440 60 S 1920 10 2160 60 S 2640 110 2880 60 V120 H0 Z" /></svg>
                        <svg viewBox="0 0 2880 120" preserveAspectRatio="none"><path d="M0 70 C 240 110 480 110 720 70 S 1200 30 1440 70 S 1920 110 2160 70 S 2640 30 2880 70 V120 H0 Z" /></svg>
                    </div>
                )}
                {theme.layout === "pine" && <div className="cover-snow" aria-hidden="true" />}
                {cast.length > 0 && (
                    <div className="cover-tags">
                        {cast.map((member) => <CoverTag key={member.productId} member={member} />)}
                    </div>
                )}
            </div>
            <div className="cover-bar">
                <p className="theme-sub">{fillText(theme.sub, products)}</p>
                {theme.countdownTo && <Countdown getTarget={theme.countdownTo} label={theme.countdownLabel} />}
                <div className="theme-actions">
                    {linkTo ? (
                        <Link to={linkTo} className="theme-btn">
                            {theme.cta}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    ) : (
                        <button type="button" className="theme-btn" onClick={scrollToProducts}>
                            {theme.cta}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    )}
                    <CouponButton code={theme.couponCode} />
                </div>
            </div>
        </section>
    )
}

// Năm cánh cửa toàn màn hình: rê chuột (hoặc chạm) để mở một thế giới
export const Doors = ({ heading: Heading = "h1" }) => {
    const [active, setActive] = useState(0)
    const navigate = useNavigate()
    const theme = getTheme("all")

    const handleClick = (index, slug) => (event) => {
        // Trên màn hình cảm ứng, chạm lần đầu chỉ mở cửa, chạm lần hai mới vào trang
        if (window.matchMedia("(hover: none)").matches && index !== active) {
            event.preventDefault()
            setActive(index)
            return
        }
        event.preventDefault()
        navigate(`/collections/${slug}`)
    }

    return (
        <section className="doors" aria-label="Các thế giới của MIRA">
            <div className="doors-row">
                {DOORS.map((slug, index) => {
                    const door = getTheme(slug)
                    return (
                        <a
                            key={slug}
                            href={`/collections/${slug}`}
                            className={`theme-page--${door.tone} door door--${door.tone} ${index === active ? "is-open" : ""}`}
                            onMouseEnter={() => setActive(index)}
                            onFocus={() => setActive(index)}
                            onClick={handleClick(index, slug)}
                        >
                            <img src={door.door.src} alt="" />
                            <span className="door-label">{door.door.label}</span>
                            <span className="door-enter">
                                Bước vào
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </a>
                    )
                })}
            </div>
            <div className="doors-bar">
                <Heading className="doors-title">{theme.headline[0]}</Heading>
                <p className="theme-sub">{theme.sub}</p>
                <Link to="/collections/all" className="theme-btn">
                    {theme.cta}
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </section>
    )
}

export const ThemeHero = ({ slug, products }) =>
    getTheme(slug).layout === "doors" ? <Doors /> : <Cover slug={slug} products={products} />

export const ThemeMarquee = ({ slug, products }) => {
    const items = getTheme(slug).marquee.map((item) => fillText(item, products))
    const renderList = (hidden) => (
        <ul aria-hidden={hidden || undefined}>
            {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
    )

    return (
        <div className="theme-marquee">
            <div className="theme-marquee-track">
                {renderList(false)}
                {renderList(true)}
                {renderList(true)}
                {renderList(true)}
            </div>
        </div>
    )
}

export const ThemeSpotlight = ({ products }) => {
    const product = [...products].sort(bySold)[0]
    if (!product) return null
    const cutout = CUTOUT_BY_PRODUCT[product.id]

    return (
        <section className="theme-spotlight" aria-label="Sản phẩm nổi bật">
            <Link to={product.url} className={`theme-spotlight-media ${cutout ? "has-cutout" : ""}`}>
                <img src={cutout || product.img_1} alt={product.title} loading="lazy" />
            </Link>
            <div className="theme-spotlight-body">
                <h2>{product.title}</h2>
                <p className="theme-spotlight-proof">
                    Món được mua nhiều nhất ở đây: {product.number} khách đã chọn, {product.rating} đánh giá.
                </p>
                <p>{product.description}</p>
                <p className="theme-spotlight-price">
                    <strong>{product.price}</strong>
                    {product.compare_price && <del>{product.compare_price}</del>}
                </p>
                <Link to={product.url} className="theme-btn">
                    Xem chi tiết
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </section>
    )
}

export const ThemeCrossSell = ({ slug }) => (
    <section className="theme-cross" aria-label="Khám phá thêm">
        <h2>Còn nhiều điều để khám phá</h2>
        <div className="doors-mini">
            {getTheme(slug).crossSell.map((target) => {
                const door = getTheme(target)
                const collection = getCollection(target)
                return (
                    <Link key={target} to={`/collections/${target}`} className={`theme-page--${door.tone} door-mini door--${door.tone}`}>
                        <img src={door.door?.src || ListProduct[0].img_1} alt="" loading="lazy" />
                        <span>{collection.title}</span>
                    </Link>
                )
            })}
        </div>
    </section>
)
