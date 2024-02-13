import Home from "../pages/Home";
import ProductDetailsPage from "../pages/ProductDetailsPage";

const PublicRoutes = [
  { path: "", Component: Home },
  { path: "/product/:id", Component: ProductDetailsPage },
];

export default PublicRoutes;
