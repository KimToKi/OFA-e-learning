import { useState, useEffect } from "react";

const HomeScreen = () => {
    const [videos, setVideos] = useState([]); // ใช้ useState เพื่อเก็บข้อมูลวิดีโอ
    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 6;

    // ดึงข้อมูลวิดีโอจาก API
    useEffect(() => {
        fetch("https://api.example.com/videos")
            .then((response) => response.json())
            .then((data) => setVideos(data))
            .catch((error) => console.error("Error fetching videos:", error));
    }, []);

    // คำนวณวิดีโอที่แสดงในหน้าปัจจุบัน
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    // ฟังก์ชันเปลี่ยนหน้า
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {/* แสดงวิดีโอ */}
            {currentVideos.map((video) => (
                <div key={video.id}>
                    <h2>{video.snippet.title}</h2>
                    <iframe
                        width="100%"
                        height="300"
                        src={`https://www.youtube.com/embed/${video.id}`} // แก้ไข URL ให้ถูกต้อง
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            ))}

            {/* Pagination */}
            <div>
                {Array.from({ length: Math.ceil(videos.length / videosPerPage) }, (_, i) => (
                    <button key={i + 1} onClick={() => paginate(i + 1)}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;
