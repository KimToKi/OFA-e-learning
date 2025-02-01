import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{video.snippet.title}</h3>
                <p className="text-gray-300 mb-4">
                    {video.snippet.description.length > 100
                        ? video.snippet.description.slice(0, 100) + "..."
                        : video.snippet.description}
                </p>
                <Link
                    to={`/watch/${video.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
                >
                    Watch Now
                </Link>
            </div>
        </div>
    );
};

export default VideoCard;
