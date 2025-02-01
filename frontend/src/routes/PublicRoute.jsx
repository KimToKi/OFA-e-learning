import { Navigate } from "react-router-dom";

function PublicRoute({ user, children }) {
  return user ? <Navigate to="/" /> : children;
}

export default PublicRoute;
