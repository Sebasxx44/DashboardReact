import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./Components/navbar/Navbar";
import Menu from "./Components/menu/Menu";
import Login from "./pages/login/Login";
import './styles/global.scss'
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import Order from "./pages/orders/Order";

function App() {

  const Layout = () => {
    return (
      <>
        <div className="main">

          <Navbar/>

          <div className="container">
            <div className="menuContainer">
              <Menu/>
            </div>

            <div className="contentContainer">
              <Outlet/>
            </div>
          </div>

        </div>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/users",
          element: <Users/>
        },
        {
          path: "/products",
          element: <Products/>
        },
        {
          path: "/orders",
          element: <Order/>
        },
        {
          path: "/users/:id",
          element: <User/>
        },
        {
          path: "/products/:id",
          element: <Product/>
        }
      ]
    },
    {
      path : "/login",
      element : <Login/>
    }
  ]);

  return <RouterProvider router={router}/>
}

export default App
