
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import PageNotFound from "./pages/404"
import Layout from './components/layout/Layout';
import routes from "./routes/home"
import routesPage from './routes/pages';
function App() {
  const router = createBrowserRouter([
    {
      path:'/pages',
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: routesPage
    },
    {
      path:'/',
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: routes
    },
  ], {
    basename:'/test/VanHon/fashion_women/ThoiTrangNu2/build/'
  });

  return <RouterProvider router={router} />;
}

export default App;
