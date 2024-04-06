
import React from "react"
const Oders = React.lazy(() => import("../../pages/orders"))
const ShopSystem = React.lazy(() => import("../../pages/shopSystems"))
const AboutUs = React.lazy(() => import("../../pages/abouts"))
const BlackDay = React.lazy(() => import("../../pages/promotions/blackDay"))
const ContactUS = React.lazy(() => import("../../pages/contacts"))
const WishList = React.lazy(() => import("../../pages/wishs"))
const CollectionAll = React.lazy(() => import("../../pages/collections/collectionAll"))
const routesPage = [
    { path: "kiem-tra-don-hang", element: <Oders /> },  
    { path: "about-us", element: <AboutUs /> },
    { path: "landing-page-black-friday", element: <BlackDay /> },
    { path: "landing-page-xmas", element: <CollectionAll /> },
    { path: "landing-page-onepage", element: <CollectionAll /> },
    { path: "he-thong-cua-hang", element: <ShopSystem /> },
    { path: "lien-he", element: <ContactUS /> }, 
    { path: "wishlist", element: <WishList /> }, 
]

export default routesPage