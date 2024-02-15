import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import { PublicRoutes, UserRoutes } from "./Routes/PublicRoutes";
import RootLayout from "./layouts/RootLayout";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import MyAccount from "./pages/MyAccount";

function App() {
  return (
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
