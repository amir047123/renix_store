import CartPage from "../pages/CartPage";
import CheckOutPage from "../pages/CheckOutPage";
import Home from "../pages/Home";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import WishlistPage from "../pages/WishlistPage";

const PublicRoutes = [
  { path: "", Component: Home },
  { path: "/product/:id", Component: ProductDetailsPage },
  { path: "/cart", Component: CartPage },
  { path: "/checkout", Component: CheckOutPage },
  { path: "/wishlist", Component: WishlistPage },
];

export default PublicRoutes;
