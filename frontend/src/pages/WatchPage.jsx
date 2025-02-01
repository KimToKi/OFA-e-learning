import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPlayer from "react-player";
import WatchPageSkeleton from "../components/skeletons/WatchPageSkeleton";

const WatchPage = () => {
  const { videoId } = useParams(); // ดึง videoId จาก URL
  const [loading, setLoading] = useState(true);
  const [videoInfo, setVideoInfo] = useState(null);

  // ฟังก์ชันสำหรับดึงข้อมูลวิดีโอจาก YouTube
  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        // ตัวอย่างการดึงข้อมูลวิดีโอจาก YouTube API
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=xhxGYOLHmQU&key=YOUR_YOUTUBE_API_KEY`
        );
        setVideoInfo(res.data.items[0].snippet);
      } catch (error) {
        console.error("Error fetching video info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoInfo();
  }, [videoId]);

  // แสดง loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-black p-10">
        <WatchPageSkeleton />
      </div>
    );
  }

  // แสดงข้อความเมื่อไม่มีข้อมูลวิดีโอ
  if (!videoInfo) {
    return (
      <div className="bg-black text-white h-screen">
        <div className="max-w-6xl mx-auto">
          <Navbar />
          <div className="text-center mx-auto px-4 py-8 h-full mt-40">
            <h2 className="text-2xl sm:text-5xl font-bold text-balance">Video not found 😥</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="mx-auto container px-4 py-8 h-full">
        <Navbar />

        {/* ส่วนแสดงวิดีโอ */}
        <div className="aspect-video mb-8 p-2 sm:px-10 md:px-32">
          <ReactPlayer
            controls={true}
            width={"100%"}
            height={"70vh"}
            className="mx-auto overflow-hidden rounded-lg"
            url={`https://www.youtube.com/watch?v=${videoId}`}
          />
        </div>

        {/* ส่วนแสดงข้อมูลวิดีโอ */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-20 max-w-6xl mx-auto">
          <div className="mb-4 md:mb-0">
            <h2 className="text-5xl font-bold text-balance">{videoInfo.title}</h2>
            <p className="mt-4 text-lg">{videoInfo.description}</p>
          </div>
          <img
            src={videoInfo.thumbnails.high.url}
            alt="Video thumbnail"
            className="max-h-[600px] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
