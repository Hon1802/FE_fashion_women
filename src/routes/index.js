import React from "react"
import Oders from "../pages/orders"
import ShopSystem from "../pages/shopSystems"
import AboutUs from "../pages/abouts"
import BlackDay from "../pages/promotions/blackDay"
import ContactUS from "../pages/contacts"

const Home = React.lazy(() => import("../pages/home"))
const Login = React.lazy(() => import("../pages/auth/login"))
const ForgotPassword = React.lazy(() => import("../pages/auth/forgot-password"))
const Register = React.lazy(() => import("../pages/auth/register"))
const CollectionAll = React.lazy(() => import("../pages/collections/collectionAll"))
const ProductDetail = React.lazy(() => import("../pages/products"))
// other page components...
const Unauthorized = React.lazy(() => import("../pages/403"))
const routes = [
    { path: "/", element: <Home /> },
    { path: "/account/login", element: <Login /> },
    { path: "/account/register", element: <Register/> },
    { path: "/account/forgot-password", element: <ForgotPassword /> },
    { path: "/collections/all", element: <CollectionAll /> },
    { path: "/collections/do-ngu", element: <CollectionAll /> },
    { path: "/collections/:param", element: <CollectionAll /> }, 
    { path: "/product/:param", element: <ProductDetail /> },
    { path: "/products/:param", element: <ProductDetail /> },
    { path: "/pages/kiem-tra-don-hang", element: <Oders /> },    
    { path: "/pages/kiem-tra-don-hang", element: <Oders /> },
    { path: "/pages/about-us", element: <AboutUs /> },
    { path: "/pages/landing-page-black-friday", element: <BlackDay /> },
    { path: "pages/landing-page-xmas", element: <CollectionAll /> },
    { path: "/pages/landing-page-onepage", element: <CollectionAll /> },
    { path: "/blogs/news", element: <CollectionAll /> },
    { path: "/pages/he-thong-cua-hang", element: <ShopSystem /> },
    { path: "/pages/lien-he", element: <ContactUS /> },
    // other mappings ...
    { path: "/unauthorized", element: <Unauthorized /> }
]

export default routes