import { Outlet } from "react-router-dom"
import Header from "../Header"
import { Suspense } from "react"
import { LoadingBackground } from "../loading/LoadingBackground"
import { useLocation } from "react-router-dom"
import TopBanner from "../TopBanner"
export default function Layout() {
    let location = useLocation();
    return (
        <>
            <TopBanner/>
            {location.pathname !== '/unauthorized' && <Header />}
            <main>
                <Suspense fallback={<LoadingBackground />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}