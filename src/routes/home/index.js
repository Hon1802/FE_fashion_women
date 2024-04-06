import { Routes, Route } from "react-router-dom"
import React from "react"
const CheckOut = React.lazy(() => import("../../pages/checkout"))
const News = React.lazy(() => import("../../pages/news"))
const Carts = React.lazy(() => import("../../pages/carts"))
const Home = React.lazy(() => import("../../pages/home"))
const Login = React.lazy(() => import("../../pages/auth/login"))
const ForgotPassword = React.lazy(() => import("../../pages/auth/forgot-password"))
const Register = React.lazy(() => import("../../pages/auth/register"))
const CollectionAll = React.lazy(() => import("../../pages/collections/collectionAll"))
const ProductDetail = React.lazy(() => import("../../pages/products"))
// other page components...
const Unauthorized = React.lazy(() => import("../../pages/403"))
const routes = [
    { path: "/test/VanHon/fashion_women/ThoiTrangNu2/build/", element: <Home /> },
    { path: "/", element: <Home /> },
    { path: "/account/login", element: <Login /> },
    { path: "/account/register", element: <Register /> },
    { path: "/account/forgot-password", element: <ForgotPassword /> },
    { path: "/test/VanHon/fashion_women/ThoiTrangNu2/build/collections/all", element: <CollectionAll /> },
    { path: "/collections/do-ngu", element: <CollectionAll /> },
    { path: "/collections/:param", element: <CollectionAll /> }, 
    { path: "/product/:param", element: <ProductDetail /> },  
    { path: "/products/:param", element: <ProductDetail /> },
    { path: "/checkout/:param", element: <CheckOut/> },
    { path: "/blogs/news", element: <News /> },
    { path: "/cart", element: <Carts /> },
    { path: "/unauthorized", element: <Unauthorized /> }
]

export default routes