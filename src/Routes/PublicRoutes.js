import Home from "../Pages/Home";
import ProductDetailsPage from "../Pages/ProductDetailsPage";

const PublicRoutes = [
  { path: "", Component: Home },
  { path: "/product/:id", Component: ProductDetailsPage },
];

export default PublicRoutes;
