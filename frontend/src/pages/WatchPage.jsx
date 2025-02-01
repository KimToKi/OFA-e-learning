import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPlayer from "react-player";
import WatchPageSkeleton from "../components/skeletons/WatchPageSkeleton";

const WatchPage = () => {
    const { id: videoId } = useParams();
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_KEY = "AIzaSyAeG5TMdMqdZbJWx_mOBrTnqk_TVFpwSfw"; // เปลี่ยนเป็น API Key ของคุณ

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
                );
                setVideo(response.data.items[0]);
            } catch (error) {
                console.error("Error fetching video:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideo();
    }, [videoId]);

    if (loading)
        return (
            <div className="min-h-screen bg-black p-10">
                <WatchPageSkeleton />
            </div>
        );

    if (!video) {
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

                {/* Video Player */}
                <div className="aspect-video mb-8 p-2 sm:px-10 md:px-32">
                    <ReactPlayer
                        controls={true}
                        width={"100%"}
                        height={"70vh"}
                        className="mx-auto overflow-hidden rounded-lg"
                        url={`https://www.youtube.com/watch?v=${videoId}`}
                    />
                </div>

                {/* Video Details */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-20 max-w-6xl mx-auto">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-5xl font-bold text-balance">{video.snippet.title}</h2>
                        <p className="mt-4 text-lg">{video.snippet.description}</p>
                    </div>
                    <img
                        src={video.snippet.thumbnails.medium.url}
                        alt="Video thumbnail"
                        className="max-h-[600px] rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default WatchPage;
