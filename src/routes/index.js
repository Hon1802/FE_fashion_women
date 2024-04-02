import React from "react"
import Oders from "../pages/orders"
import ShopSystem from "../pages/shopSystems"

const Home = React.lazy(() => import("../pages/home"))
const Login = React.lazy(() => import("../pages/auth/login"))
const ForgotPassword = React.lazy(() => import("../pages/auth/forgot-password"))
const Register = React.lazy(() => import("../pages/auth/register"))
const CollectionAll = React.lazy(() => import("../pages/collections/collectionAll"))

// other page components...
const Unauthorized = React.lazy(() => import("../pages/403"))
const routes = [
    { path: "/", element: <Home /> },
    { path: "/account/login", element: <Login /> },
    { path: "/account/register", element: <Register/> },
    { path: "/account/forgot-password", element: <ForgotPassword /> },
    { path: "/collections/all", element: <CollectionAll /> },
    { path: "/pages/kiem-tra-don-hang", element: <Oders /> },
    { path: "/pages/he-thong-cua-hang", element: <ShopSystem /> },
    // other mappings ...
    { path: "/unauthorized", element: <Unauthorized /> }
]

export default routes