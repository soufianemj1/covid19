import Home from './components/home'
import Form from './components/form'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Test from './components/test'
import ManagerAuth from './backoffice/ManagerAuth';
import Dahsboard from './backoffice/dahsboard';
import ProtectedRoute from './backoffice/protectedRoute';
import Admin from './backoffice/Admin';
import AdminAuth from './backoffice/AdminAuth';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/login" element={<ManagerAuth />}></Route>
          <Route path="/adminlogin" element={<AdminAuth />}></Route>

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute role="manager">
                <Dahsboard />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <Admin />
              </ProtectedRoute>
            }
          ></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );

  
}

export default App
