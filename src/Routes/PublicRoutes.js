
import Login from "../Pages/Login";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import WishlistPage from "../Pages/WishlistPage";
import CartPage from "../Pages/CartPage";
import CheckOutPage from "../Pages/CheckOutPage";

import Home from "../Pages/Home";


const PublicRoutes = [
  { path: "", Component: Home },
  { path: "/productDetails/:id", Component: ProductDetailsPage },
  { path: "/cart", Component: CartPage },
  { path: "/checkout", Component: CheckOutPage },
  { path: "/wishlist", Component: WishlistPage },
  { path: "/login", Component: Login },
];

export { PublicRoutes };
