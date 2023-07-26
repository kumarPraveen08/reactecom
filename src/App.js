import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
import Home from "pages/home/Home";
import Product from "pages/product/Product";
import Products from "pages/products/Products";
import "./global.scss";
import PageNotFound from "pages/pageNotFound/PageNotFound";
import Contact from "components/contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Contact />
        <Footer />
        <ToastContainer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products/:id", element: <Products /> },
        { path: "/product/:id", element: <Product /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
