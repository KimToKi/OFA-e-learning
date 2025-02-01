import React from 'react';

const VideoCard = ({ video }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{video.snippet.title}</h2>
                <p className="text-gray-600">{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoCard;
