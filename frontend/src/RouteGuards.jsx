import { Navigate } from "react-router-dom";

export function PrivateRoute({ user, children }) {
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export function PublicRoute({ user, children }) {
    if (user) {
        return <Navigate to="/" replace />;
    }
    return children;
}
