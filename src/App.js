import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Main from './Pages/Main';
import Home from './Pages/Home';
import PublicRoutes from './Routes/PublicRoutes';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Main/>}>
            <Route index element={<Home/>} />
            {PublicRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          {/* Additional routes for users and admins */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
