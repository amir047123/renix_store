
import Login from "../Pages/Login";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import WishlistPage from "../Pages/WishlistPage";
import CartPage from "../Pages/CartPage";
import CheckOutPage from "../Pages/CheckOutPage";

import Home from "../Pages/Home";
import Shop from "../components/shop/Shop";


const PublicRoutes = [
  { path: "", Component: Home },
  { path: "shop/:id", Component: Shop },
  { path: "shop", Component: Shop },

  { path: "productDetails/:id", Component: ProductDetailsPage },
  { path: "/cart", Component: CartPage },
  { path: "/checkout", Component: CheckOutPage },
  { path: "/wishlist", Component: WishlistPage },
  { path: "/login", Component: Login },
];

export { PublicRoutes };
