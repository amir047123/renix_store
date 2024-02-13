import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import PublicRoutes from "./Routes/PublicRoutes";
import RootLayout from "./layouts/RootLayout";
import Home from "./Pages/Home";
import Dashboard from "./components/ui/AdminDashboard/Dashboard";
import AdminRoutes from "./Routes/AdminRoutes";
import AdminDashboard from "./layouts/AdminDashboard";

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
          </Route>
          {/* Additional routes for users and admins */}
          <Route path="/adminDashboard" element={<AdminDashboard />}>
          <Route index element={<Dashboard />}></Route>
          {AdminRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
