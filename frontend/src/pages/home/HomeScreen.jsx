import { useState, useEffect } from "react";
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import VideoCard from '../../components/VideoCard';
import videosData from '../src/data/videosData.js';// นำเข้าข้อมูลวิดีโอ

const HomeScreen = () => {
    const [trendingVideo, setTrendingVideo] = useState(videos[0]);
    const [imgLoading, setImgLoading] = useState(true);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * videos.length);
        setTrendingVideo(videos[randomIndex]);
    }, []);

    return (
        <>
            <HeroSection video={trendingVideo} imgLoading={imgLoading} />
            <Navbar />

            {/* Trending Links Section */}
            <div className="bg-black py-10 px-8 md:px-16 lg:px-32">
                <h2 className="text-3xl font-bold mb-6">Trending Links</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomeScreen;
