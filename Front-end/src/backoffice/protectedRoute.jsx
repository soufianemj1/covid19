import { Navigate, } from "react-router-dom";
import { useCookies } from 'react-cookie';
const ProtectedRoute = ({role,children}) => {
 
  const [cookies, setCookie] = useCookies([]);
  if (cookies.role !== role) {
   return <Navigate to ="/login" />
  }
  return children;
}

export default ProtectedRoute