import Address from "../pages/Address";
import CartPage from "../pages/CartPage";
import CheckOutPage from "../pages/CheckOutPage";
import Downloads from "../pages/Downloads";
import EditAccountDetails from "../pages/EditAccountDetails";
import EditBillingAddress from "../pages/EditBillingAddress";
import EditShippingAddress from "../pages/EditShippingAddress";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import MyOrders from "../pages/MyOrders";
import OrderDetails from "../pages/OrderDetails";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import WishlistPage from "../pages/WishlistPage";

const PublicRoutes = [
  { path: "", Component: Home },
  { path: "/product/:id", Component: ProductDetailsPage },
  { path: "/cart", Component: CartPage },
  { path: "/checkout", Component: CheckOutPage },
  { path: "/wishlist", Component: WishlistPage },
  { path: "/login", Component: Login },
];
const UserRoutes = [
  { path: "/my-account", Component: MyAccount },
  { path: "/my-account/orders", Component: MyOrders },
  { path: "/my-account/orders/:id", Component: OrderDetails },
  { path: "/my-account/downloads", Component: Downloads },
  { path: "/my-account/edit-address", Component: Address },
  { path: "/my-account/edit-address/billing", Component: EditBillingAddress },
  { path: "/my-account/edit-address/shipping", Component: EditShippingAddress },
  { path: "/my-account/edit-account", Component: EditAccountDetails },
];

export { PublicRoutes, UserRoutes };
