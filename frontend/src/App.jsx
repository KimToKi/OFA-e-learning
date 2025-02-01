import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import WatchPage from "./pages/WatchPage"; // ปรับเปลี่ยนให้รองรับ YouTube
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import SearchPage from "./pages/SearchPage"; // ปรับเปลี่ยนให้รองรับ YouTube
import SearchHistoryPage from "./pages/SearchHistoryPage"; // ปรับเปลี่ยนให้รองรับ YouTube
import NotFoundPage from "./pages/404";
function App() {
    const { user, isCheckingAuth, authCheck } = useAuthStore();
    useEffect(() => {
        authCheck();
    }, [authCheck]);
    if (isCheckingAuth) {
        return (
            <div className='h-screen'>
                <div className='flex justify-center items-center bg-black h-full'>
                    <Loader className='animate-spin text-red-600 size-10' />
                </div>
            </div>
        );
    }
    return (
        <>
            <Routes>
                {/* หน้าแรก */}
                <Route path='/' element={<HomePage />} />
                {/* หน้าล็อกอินและสมัครสมาชิก */}
                <Route path='/login' element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
                <Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to={"/"} />} />
                {/* หน้าดูวิดีโอ (ปรับเปลี่ยนให้รองรับ YouTube) */}
                <Route path='/watch/:id' element={user ? <WatchPage /> : <Navigate to={"/login"} />} />
                {/* หน้าค้นหา (ปรับเปลี่ยนให้รองรับ YouTube) */}
                <Route path='/search' element={user ? <SearchPage /> : <Navigate to={"/login"} />} />
                {/* หน้าประวัติการค้นหา (ปรับเปลี่ยนให้รองรับ YouTube) */}
                <Route path='/history' element={user ? <SearchHistoryPage /> : <Navigate to={"/login"} />} />
                {/* หน้าไม่พบ (404) */}
                <Route path='/*' element={<NotFoundPage />} />
            </Routes>
            {/* Footer */}
            <Footer />
            {/* Toaster สำหรับแสดงข้อความแจ้งเตือน */}
            <Toaster />
        </>
    );
}
export default App;
