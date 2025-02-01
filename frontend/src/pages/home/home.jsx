import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../../components/VideoCard';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const API_KEY = 'AIzaSyAeG5TMdMqdZbJWx_mOBrTnqk_TVFpwSfw'; // เปลี่ยนเป็น API Key ของคุณ
    const searchQuery = 'e-learning'; // คำค้นหา

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${API_KEY}&maxResults=10`
                );
                setVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching YouTube videos:', error);
            }
        };
        fetchVideos();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">วิดีโอจาก YouTube</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((video) => (
                    <VideoCard key={video.id.videoId} video={video} />
                ))}
            </div>
        </div>
    );
};

export default Home;
