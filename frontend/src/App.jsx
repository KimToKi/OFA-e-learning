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

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();

  // ตรวจสอบการเข้าสู่ระบบเมื่อแอปพลิเคชันโหลด
  useEffect(() => {
    authCheck();
  }, [authCheck]);

  // แสดง loading state ขณะตรวจสอบการเข้าสู่ระบบ
  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 size-10" />
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        {/* เส้นทางหลัก */}
        <Route path="/" element={<HomePage />} />

        {/* เส้นทางสำหรับผู้ใช้ที่ไม่ได้เข้าสู่ระบบ */}
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <SignUpPage /> : <Navigate to="/" />} />

        {/* เส้นทางสำหรับผู้ใช้ที่เข้าสู่ระบบแล้ว */}
        <Route path="/watch/:id" element={user ? <WatchPage /> : <Navigate to="/login" />} />
        <Route path="/search" element={user ? <SearchPage /> : <Navigate to="/login" />} />
        <Route path="/history" element={user ? <SearchHistoryPage /> : <Navigate to="/login" />} />

        {/* เส้นทางสำหรับหน้าไม่พบ (404) */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      {/* แสดง Footer ในทุกหน้า */}
      <Footer />

      {/* แสดง Toaster สำหรับข้อความแจ้งเตือน */}
      <Toaster />
    </>
  );
}

export default App;
