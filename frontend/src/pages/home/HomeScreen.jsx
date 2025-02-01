import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Info, Play } from "lucide-react";
import { useState, useEffect } from "react"; 

const videos = [
    {
        id: "wdsc_QfFL2E", // videoId จากลิงก์ YouTube
        snippet: {
            title: "National Convention 2023",
            description: "BoostUp The Power คุณเชวง คุณชยางกูร - คุณกัญญ์นลิน ปิยนันทวารินทร์ นักธุรกิจแอมเวย์ระดับมงกุฎทูตสองผู้สถาปนา แนวคิดสู่ความสำเร็จ อย่าถามตัวเองว่า ถ้าล้มเหลวล่ะ แต่ให้ถามว่า 'ถ้าสำเร็จล่ะ'",
            thumbnails: {
                high: {
                    url: "https://i.ytimg.com/vi/wdsc_QfFL2E/hqdefault.jpg", // ภาพ thumbnail จาก videoId
                },
            },
            publishedAt: "2023-06-23T00:00:00Z", // วันที่เผยแพร่ (กำหนดเอง)
        },
    },
    {
        id: "Ao0jHRFS-Is", // videoId จากลิงก์ YouTube
        snippet: {
            title: "Future Leader Club #1",
            description: "“การตัดสินใจ และการตั้งเป้าหมาย” กิจกรรม BATCH 1 วันที่ 24 เมษายน 2562 บรรยายโดย คุณเชวง คุณชยางกูร - คุณกัญญ์นลิน ปิยนันทวารินทร์  นักธุรกิจแอมเวย์ระดับมงกุฎทูต",
            thumbnails: {
                high: {
                    url: "https://i.ytimg.com/vi/Ao0jHRFS-Is/hqdefault.jpg", // ภาพ thumbnail จาก videoId
                },
            },
            publishedAt: "2019-06-13T00:00:00Z", // วันที่เผยแพร่ (กำหนดเอง)
        },
    },
    {
        id: "u53KjQ2HCbc", // videoId จากลิงก์ YouTube
        snippet: {
            title: "FESTTALK Virtual: The Matter of SUCCESS",
            description: "งานจบแต่แรงบันดาลใจยังไม่จบ พบกับไฮไลท์และข้อคิดมากมายจากแขกรับเชิญสุดพิเศษ พร้อมชมบรรยากาศสนุกสนานจากงาน FESTTALK Virtual วันที่ 26 กันยายน ที่ผ่านมา แบ่งปันประสบการณ์ โดย คุณรัฐธีร์ มังคลรังษี - คุณนิยุตรัตน์ จามพันธ์ นักธุรกิจแอมเวย์ระดับมงกุฎทูต",
            thumbnails: {
                high: {
                    url: "https://i.ytimg.com/vi/u53KjQ2HCbc/hqdefault.jpg", // ภาพ thumbnail จาก videoId
                },
            },
            publishedAt: "2020-10-11T00:00:00Z", // วันที่เผยแพร่ (กำหนดเอง)
        },
    },
    {
        id: "8akYALb-lOU", // videoId จากลิงก์ YouTube
        snippet: {
            title: "งานรับเข็มมงกุฏทูต : คุณแป๊ก คุณจอยซ์ ",
            description: "แป๊ก พฤสณัย มหัคฆพงศ์ - จอยซ์ รมัณยา จูฑะเตมีย์ มงกุฏทูต, สิงหาคม 2556 Diamond, USA คนแรกของ South East Asia",
            thumbnails: {
                high: {
                    url: "https://i.ytimg.com/vi/8akYALb-lOU/hqdefault.jpg", // ภาพ thumbnail จาก videoId
                },
            },
            publishedAt: "2021-10-17T00:00:00Z", // วันที่เผยแพร่ (กำหนดเอง)
        },
    },
    {
        id: "iqfU3nrAYHc", // videoId จากลิงก์ YouTube
        snippet: {
            title: "นักธุรกิจแอมเวย์ ระดับตรีเพชร รัฐธีร์ - นิยุตรัตน์",
            description: "รัฐธีร์ มังคลรังษี - นิยุตรัตน์ จามพันธ์ จุดสูงสุดของชีวิต มิใช่เป็นผู้ปกครอง หากแต่คือผู้รับใช้",
            thumbnails: {
                high: {
                    url: "https://i.ytimg.com/vi/iqfU3nrAYHc/hqdefault.jpg", // ภาพ thumbnail จาก videoId
                },
            },
            publishedAt: "2018-02-23T00:00:00Z", // วันที่เผยแพร่ (กำหนดเอง)
        },
    },
    {
        id: "MbKyfV4-rl0", // videoId จากลิงก์ YouTube
        snippet: {
            title: "พิธีมอบเข็ม ระดับเพชรคู่สองผู้สถาปนา",
            description: "รับฟังประสบการณ์ความสำเร็จในพิธีมอบเข็มเกียรติคุณนักธุรกิจแอมเวย์ระดับเพชรคู่สองผู้สถาปนาใหม่ คุณพงศชา เบ็ญจพรกุลพงศ์ - คุณพิชญา มานะธัญญา เจ้าของแนวคิดความสำเร็จ : “ให้ความสำคัญกับสิ่งไหน สิ่งนั้นจะเติบโต” ",
            thumbnails: {
                high: {
                    url: "https://i.ytimg.com/vi/MbKyfV4-rl0/hqdefault.jpg", // ภาพ thumbnail จาก videoId
                },
            },
            publishedAt: "2023-10-03T00:00:00Z", // วันที่เผยแพร่ (กำหนดเอง)
        },
    },
    {
        id: "oyACCrjoG-s", // videoId จากลิงก์ YouTube
        snippet: {
            title: "EDC Recognition พี่หนึ่ง พี่ดื้อ",
            description: "ชลธีร์ แก้วมณีสกุล รัตนพร วชิรบัญชร",
            thumbnails: {
                high: {
                    url: "https://i.ytimg.com/vi/oyACCrjoG-s/hqdefault.jpg", // ภาพ thumbnail จาก videoId
                },
            },
            publishedAt: "2023-09-23T00:00:00Z", // วันที่เผยแพร่ (กำหนดเอง)
        },
    },
    {
        id: "f4Mc02cxEQU", // videoId จากลิงก์ YouTube
        snippet: {
            title: "วงกลมวงแรก โดย ริช เดอโวส แอมเวย์",
            description: "วงกลมวงแรก โดย ริช เดอโวส แอมเวย์",
            thumbnails: {
                high: {
                    url: "https://i.ytimg.com/vi/f4Mc02cxEQU/hqdefault.jpg", // ภาพ thumbnail จาก videoId
                },
            },
            publishedAt: "2011-07-26T00:00:00Z", // วันที่เผยแพร่ (กำหนดเอง)
        },
    },
     {
        id: "cH33impo3C0", // videoId จากลิงก์ YouTube
        snippet: {
            title: "50 Years Amway 8A_Rich",
            description: "หลักพื้นฐาน ๘ ประการ จาก ท่านประธาน ริช เดอร์โวส เนื่องในโอกาส ฉลอง แอมเวย์ ๕๐ ปี",
            thumbnails: {
                high: {
                    url: "https://i.ytimg.com/vi/cH33impo3C0/hqdefault.jpg", // ภาพ thumbnail จาก videoId
                },
            },
            publishedAt: "2013-02-03T00:00:00Z", // วันที่เผยแพร่ (กำหนดเอง)
        },
    },
    {
        id: "p1VX-yFdSqY", // videoId จากลิงก์ YouTube
        snippet: {
            title: "Leadership Convention 2014",
            description: "FCA FAA40 Leonard Kim at Amway Thailand Leadership Convention 2014",
            thumbnails: {
                high: {
                    url: "https://i.ytimg.com/vi/p1VX-yFdSqY/hqdefault.jpg", // ภาพ thumbnail จาก videoId
                },
            },
            publishedAt: "2015-07-22T00:00:00Z", // วันที่เผยแพร่ (กำหนดเอง)
        },
    },
    {
        id: "xhxGYOLHmQU", // videoId จากลิงก์ YouTube
        snippet: {
            title: "Crador 2018 in Bangkok (ภาษาไทย)",
            description: "Speech by Mr.Foo Howe Kean - Crador 2018 in Bangkok (ภาษาไทย) Crador 40th Anniversary : The Great Phenomenon 13-14 October 2018 , Bangkok Thailand",
            thumbnails: {
                high: {
                    url: "https://i.ytimg.com/vi/xhxGYOLHmQU/hqdefault.jpg", // ภาพ thumbnail จาก videoId
                },
            },
            publishedAt: "2018-12-31T00:00:00Z", // วันที่เผยแพร่ (กำหนดเอง)
        },
    },
];

const HomeScreen = () => {
    const [trendingVideo, setTrendingVideo] = useState(videos[0]); // เริ่มต้นด้วยวิดีโอแรก
    const [imgLoading, setImgLoading] = useState(true);

    // ใช้ useEffect เพื่อสุ่มเลือกวิดีโอเมื่อคอมโพเนนต์โหลด
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * videos.length);
        setTrendingVideo(videos[randomIndex]);
    }, []); // ใช้ dependency array ว่างเพื่อให้ทำงานเพียงครั้งเดียวเมื่อโหลด

    return (
        <>
            <div className="relative h-screen text-white">
                <Navbar />

                {/* COOL OPTIMIZATION HACK FOR IMAGES */}
                {imgLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center shimmer -z-10" />
                )}

                <img
                    src={trendingVideo.snippet.thumbnails.high.url}
                    alt="Hero img"
                    className="absolute top-0 left-0 w-full h-full object-cover -z-50"
                    onLoad={() => {
                        setImgLoading(false);
                    }}
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50" aria-hidden="true" />

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
                    <div
                        className="bg-gradient-to-b from-black via-transparent to-transparent 
                    absolute w-full h-full top-0 left-0 -z-10"
                    />

                    <div className="max-w-2xl">
                        <h1 className="mt-4 text-6xl font-extrabold text-balance">{trendingVideo.snippet.title}</h1>
                        <p className="mt-2 text-lg">
                            {new Date(trendingVideo.snippet.publishedAt).toLocaleDateString()}
                        </p>

                        <p className="mt-4 text-lg">
                            {trendingVideo.snippet.description.length > 200
                                ? trendingVideo.snippet.description.slice(0, 200) + "..."
                                : trendingVideo.snippet.description}
                        </p>
                    </div>

                    <div className="flex mt-8">
                        <Link
                            to={`/watch/${trendingVideo.id}`}
                            className="bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center"
                        >
                            <Play className="size-6 mr-2 fill-black" />
                            Play
                        </Link>

                        <Link
                            to={`/watch/${trendingVideo.id}`}
                            className="bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center"
                        >
                            <Info className="size-6 mr-2" />
                            More Info
                        </Link>
                    </div>
                </div>
            </div>

            {/* ส่วน "Trending Links" */}
            <div className="bg-black py-10 px-8 md:px-16 lg:px-32">
                <h2 className="text-3xl font-bold mb-6">Trending Links</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => (
                        <div key={video.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
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
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomeScreen;
