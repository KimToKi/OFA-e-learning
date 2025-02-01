import { useEffect } from "react";
import { useParams } from "react-router-dom";

const WatchPage = () => {
    const { videoId } = useParams();

    useEffect(() => {
        // อัปเดต title ของหน้า
        document.title = `Watch Video - ${videoId}`;
    }, [videoId]);

    return (
        <div>
            <h1>Watch Video</h1>
            <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allowFullScreen
            />
        </div>
    );
};

export default WatchPage;
