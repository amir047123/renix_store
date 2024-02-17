import Downloads from "../Pages/Downloads";
import EditAccountDetails from "../Pages/EditAccountDetails";
import EditBillingAddress from "../Pages/EditBillingAddress";
import EditShippingAddress from "../Pages/EditShippingAddress";
import MyAccount from "../Pages/MyAccount";
import MyOrders from "../Pages/MyOrders";
import OrderDetails from "../Pages/OrderDetails";
import Address from "../Pages/Address";


const UserRoutes = [
  { path: "/my-account", Component: MyAccount },
  {
    path: "/my-account/orders",
    Component: MyOrders,
  },
  { path: "/my-account/orders/:id", Component: OrderDetails },
  { path: "/my-account/downloads", Component: Downloads },
  { path: "/my-account/edit-address", Component: Address },
  { path: "/my-account/edit-address/billing", Component: EditBillingAddress },
  { path: "/my-account/edit-address/shipping", Component: EditShippingAddress },
  { path: "/my-account/edit-account", Component: EditAccountDetails },
];
  
  export {  UserRoutes };
  