import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import { PublicRoutes } from "./Routes/PublicRoutes";
import RootLayout from "./layouts/RootLayout";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import AdminRoutes from "./Routes/AdminRoutes";
import AdminDashboard from "./layouts/AdminDashboard";
import Dashboard from "./components/ui/AdminDashboard/Dashboard";
import MyAccount from "./Pages/MyAccount";
import Home from "./Pages/Home";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { UserRoutes } from "./Routes/UserRoutes";
import MyContext from "./Context/MyContext";

function App() {
  return (
    <MyContext.Provider >
    <Router>
      <div>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            {PublicRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
            {/* Routes with a different layout (Dashboard and MyAccount) */}
            <Route path="/my-account" element={<UserDashboardLayout />}>
              <Route index element={<MyAccount />} />
              {UserRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}
            </Route>
          </Route>
          {/* Additional routes for users and admins */}
          <Route path="/adminDashboard" element={<AdminDashboard />}>
          <Route index element={<Dashboard />}></Route>
          {AdminRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
        </Routes>
        <ToastContainer />

      </div>
    </Router>
    </MyContext.Provider>
  );
}

export default App;
