import React from "react"

const Home = React.lazy(() => import("../pages/home"))
// other page components...
const Unauthorized = React.lazy(() => import("../pages/403"))
const routes = [
    { path: "/", element: <Home /> },
    // other mappings ...
    { path: "/unauthorized", element: <Unauthorized /> }
]

export default routes