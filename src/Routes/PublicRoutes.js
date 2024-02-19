
import Login from "../Pages/Login";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import CartPage from "../Pages/CartPage";
import CheckOutPage from "../Pages/CheckOutPage";

import Home from "../Pages/Home";
import Shop from "../components/shop/Shop";
import TrackingOrder from "../Pages/TrackingOrder";
import Category from "../components/shop/Category";
import ProductChecking from "../Pages/ProductChecking";
import WishlistPage from "../Pages/WishlistPage";


const PublicRoutes = [
  { path: "", Component: Home },
  { path: "shop/:id", Component: Shop },
  { path: "shop", Component: Shop },
  { path: "productDetails/:id", Component: ProductDetailsPage },
  { path: "/cart", Component: CartPage },
  { path: "/checkout", Component: CheckOutPage },
  { path: "/login", Component: Login },
  { path: "/tracking-order", Component: TrackingOrder },
  { path: "/category", Component: Category },
  { path: "/product-checking", Component: ProductChecking },
  { path: "wishlist", Component: WishlistPage },


];

export { PublicRoutes };
