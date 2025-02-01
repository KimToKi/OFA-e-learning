import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import WatchPage from "./pages/WatchPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/watch/:videoId" element={<WatchPage />} /> {/* เพิ่ม route นี้ */}
            </Routes>
        </Router>
    );
};

export default App;
