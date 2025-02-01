import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import WatchPage from "./pages/WatchPage";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import SearchPage from "./pages/SearchPage";
import SearchHistoryPage from "./pages/SearchHistoryPage";
import NotFoundPage from "./pages/404";
import { PrivateRoute, PublicRoute } from "./src/RouteGuards";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();

  useEffect(() => {
    authCheck();
  }, []);

  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600" size={40} />
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<PublicRoute user={user}><LoginPage /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute user={user}><SignUpPage /></PublicRoute>} />
        <Route path="/watch/:id" element={<PrivateRoute user={user}><WatchPage /></PrivateRoute>} />
        <Route path="/search" element={<PrivateRoute user={user}><SearchPage /></PrivateRoute>} />
        <Route path="/history" element={<PrivateRoute user={user}><SearchHistoryPage /></PrivateRoute>} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <Toaster />
    </ErrorBoundary>
  );
}

export default App;
