import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const WatchPage = () => {
    const { id: videoId } = useParams();

    return (
        <div className="container mx-auto p-4">
            <ReactPlayer
                controls={true}
                width={"100%"}
                height={"70vh"}
                url={`https://www.youtube.com/watch?v=${videoId}`}
            />
        </div>
    );
};

export default WatchPage;
