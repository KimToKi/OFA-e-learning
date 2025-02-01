import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const WatchPage = () => {
    const { videoId } = useParams(); // ดึง videoId จาก URL
    const [video, setVideo] = useState(null); // สถานะสำหรับเก็บข้อมูลวิดีโอ
    const [loading, setLoading] = useState(true); // สถานะโหลด

    // ฟังก์ชันดึงข้อมูลวิดีโอจาก API
    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await fetch(`https://api.example.com/videos/${videoId}`);
                const data = await response.json();
                setVideo(data);
            } catch (error) {
                console.error("Error fetching video data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideoData();
    }, [videoId]);

    if (loading) return <div>Loading...</div>; // แสดงสถานะโหลด
    if (!video) return <div>Video not found</div>; // แสดงข้อความถ้าไม่พบวิดีโอ

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{video.snippet.title}</h1>
            <div className="flex flex-col md:flex-row gap-8">
                {/* ส่วนแสดงวิดีโอ */}
                <div className="flex-1">
                    <iframe
                        width="100%"
                        height="500"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {/* ส่วนข้อมูลวิดีโอ */}
                <div className="flex-1">
                    <p className="text-gray-700">{video.snippet.description}</p>
                    <p className="mt-4 text-sm text-gray-500">
                        Published on: {new Date(video.snippet.publishedAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WatchPage;
