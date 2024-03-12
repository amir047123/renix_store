import AdminAllBlog from "../components/ui/AdminDashboard/AdminBlog/AdminAllBlog";
import AdminBlog from "../components/ui/AdminDashboard/AdminBlog/AdminBlog";
import AdminDashboardSliderImg from "../components/ui/AdminDashboard/AdminDashboardSliderImg/AdminDashboardSliderImg";
import AdminPartner from "../components/ui/AdminDashboard/AdminDashboardSliderImg/AdminPartner";
import AdminSideBarBanner from "../components/ui/AdminDashboard/AdminDashboardSliderImg/AdminSideBarBanner";
import AdminOrderView from "../components/ui/AdminDashboard/AdminOrders/AdminOrderView";
import AdminOrders from "../components/ui/AdminDashboard/AdminOrders/AdminOrders";
import AdminAllSeoList from "../components/ui/AdminDashboard/AdminSeo/AdminAllSeoList";
import AdminSeo from "../components/ui/AdminDashboard/AdminSeo/AdminSeo";
import AdminUpdateSeoList from "../components/ui/AdminDashboard/AdminSeo/AdminUpdateSeoList";
import AdminShipping from "../components/ui/AdminDashboard/AdminShipping/AdminShipping";
import AddProductFaq from "../components/ui/AdminDashboard/AllProduct/AddProductFaq";
import AddProducts from "../components/ui/AdminDashboard/AllProduct/AddProducts";
import AdminUpdateProduct from "../components/ui/AdminDashboard/AllProduct/AdminUpdateProduct";
import AllProduct from "../components/ui/AdminDashboard/AllProduct/AllProduct";
import AllUsers from "../components/ui/AdminDashboard/AllUsers/AllUsers";
import Announcement from "../components/ui/AdminDashboard/Announcement/Announcement";
import AddCategory from "../components/ui/AdminDashboard/Category/AddCategory";
import AllCategory from "../components/ui/AdminDashboard/Category/AllCategory";
import UpdateCategory from "../components/ui/AdminDashboard/Category/UpdateCategory";
import AddCoupon from "../components/ui/AdminDashboard/Coupon/AddCoupon";
import AllCoupon from "../components/ui/AdminDashboard/Coupon/AllCoupon";
import UpdateCoupon from "../components/ui/AdminDashboard/Coupon/UpdateCoupon";
import Dashboard from "../components/ui/AdminDashboard/Dashboard";
import AllNewsLatter from "../components/ui/AdminDashboard/NewsLatter/AllNewsLatter";

const AdminRoutes = [
  { path: "dashboard", Component: Dashboard },
  { path: "add-category", Component: AddCategory },

  { path: "addCategory", Component: AddCategory },
  { path: "allCategory", Component: AllCategory },
  { path: "updateCategorys/:id", Component: UpdateCategory },

  { path: "addProduct", Component: AddProducts },
  { path: "allProduct", Component: AllProduct },

  { path: "updateProducts/:id", Component: AdminUpdateProduct },

  { path: "updateShipping", Component: AdminShipping },
  { path: "updateBanner", Component: AdminDashboardSliderImg },
  { path: "updatesidebarBanner", Component: AdminSideBarBanner },

  { path: "addCoupon", Component: AddCoupon },
  { path: "allCoupon", Component: AllCoupon },
  { path: "updateCoupons/:id", Component: UpdateCoupon },

  { path: "all-news-latter", Component: AllNewsLatter },

  { path: "announcement", Component: Announcement },
  { path: "orders", Component: AdminOrders },
  { path: "allUsers", Component: AllUsers },
  { path: "partner", Component: AdminPartner },
  { path: "orders/:id", Component: AdminOrderView },
  { path: "seo", Component: AdminSeo },
  { path: "allSeo", Component: AdminAllSeoList },
  { path: "updateSeo/:id", Component: AdminUpdateSeoList },

  { path: "add-home-content", Component: AdminBlog },
  { path: "all-home-content", Component: AdminAllBlog },
  { path: "update-home-content/:id", Component: AdminBlog },

  { path: "product-faq/:id", Component: AddProductFaq },

];

export default AdminRoutes;
