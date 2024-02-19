import AdminDashboardSliderImg from "../components/ui/AdminDashboard/AdminDashboardSliderImg/AdminDashboardSliderImg";
import AdminSideBarBanner from "../components/ui/AdminDashboard/AdminDashboardSliderImg/AdminSideBarBanner";
import AdminShipping from "../components/ui/AdminDashboard/AdminShipping/AdminShipping";
import AddProducts from "../components/ui/AdminDashboard/AllProduct/AddProducts";
import AdminUpdateProduct from "../components/ui/AdminDashboard/AllProduct/AdminUpdateProduct";
import AllProduct from "../components/ui/AdminDashboard/AllProduct/AllProduct";
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
  { path: "", Component: Dashboard },
  { path: "add-category", Component: AddCategory },

  { path: "addCategory", Component: AddCategory },
  { path: "allCategory", Component: AllCategory },
  { path: "updateCategorys/:id", Component: UpdateCategory },


  { path: "addProduct", Component: AddProducts },
  { path: "allProduct", Component:AllProduct },

  { path: "updateProducts/:id", Component: AdminUpdateProduct },




  { path: "updateShipping", Component: AdminShipping },
  { path: "updateBanner", Component: AdminDashboardSliderImg },
  { path: "updatesidebarBanner", Component: AdminSideBarBanner},


  { path: "addCoupon", Component: AddCoupon },
  { path: "allCoupon", Component: AllCoupon },
  { path: "updateCoupons/:id", Component: UpdateCoupon },

  { path: "all-news-latter", Component: AllNewsLatter },

  { path: "announcement", Component: Announcement },

];

export default AdminRoutes;
