import AddCategory from "../components/ui/AdminDashboard/Category/AddCategory";
import AllCategory from "../components/ui/AdminDashboard/Category/AllCategory";
import UpdateCategory from "../components/ui/AdminDashboard/Category/UpdateCategory";
import Dashboard from "../components/ui/AdminDashboard/Dashboard";


const AdminRoutes = [
  { path: "", Component: Dashboard },
  { path: "add-category", Component: AddCategory },

  { path: "addCategory", Component: AddCategory },
  { path: "allCategory", Component: AllCategory },
  { path: "updateCategorys/:id", Component: UpdateCategory },

];

export default AdminRoutes;
