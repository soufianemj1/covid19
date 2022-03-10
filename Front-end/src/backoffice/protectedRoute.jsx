import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
const ProtectedRoute = ({role,children}) => {
  let navigate = useNavigate();
  const [cookies, setCookie] = useCookies([]);
  if (cookies.role !== role) {
   navigate("/login");
  }
  return children;
}

export default ProtectedRoute