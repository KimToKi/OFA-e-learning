import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Info, Play } from "lucide-react";
import { useState } from "react";

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
            title: "Future Leader Club #1 “การตัดสินใจ และการตั้งเป้าหมาย”",
            description: "กิจกรรม BATCH 1 วันที่ 24 เมษายน 2562 บรรยายโดย คุณเชวง คุณชยางกูร - คุณกัญญ์นลิน ปิยนันทวารินทร์  นักธุรกิจแอมเวย์ระดับมงกุฎทูต",
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
            title: "งานรับเข็มมงกุฏทูต : คุณแป๊ก พฤสณัย มหัคฆพงศ์ - คุณจอยซ์ รมัณยา จูฑะเตมีย์",
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
            title: "นักธุรกิจแอมเวย์ ระดับตรีเพชร รัฐธีร์ มังคลรังษี - นิยุตรัตน์ จามพันธ์",
            description: "จุดสูงสุดของชีวิต มิใช่เป็นผู้ปกครอง หากแต่คือผู้รับใช้",
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
            title: "พิธีมอบเข็มเกียรติคุณ นธอ .ระดับเพชรคู่สองผู้สถาปนาใหม่ คุณพงศชา เบ็ญจพรกุลพงศ์ - คุณพิชญา มานะธัญญา",
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
            title: "EDC Recognition ชลธีร์ แก้วมณีสกุล รัตนพร วชิรบัญชร",
            description: "-",
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
            title: "Mr.Foo Howe Kean - Crador 2018 in Bangkok (ภาษาไทย)",
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

const getRandomVideo = (videos) => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    return videos[randomIndex];
};

const VideoModal = () => {
    const [randomVideo, setRandomVideo] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        setRandomVideo(getRandomVideo(videos)); // สุ่มเลือกวิดีโอ
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Random Video Modal"
            className="modal"
            overlayClassName="overlay"
        >
            {randomVideo && (
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">{randomVideo.snippet.title}</h2>
                    <ReactPlayer
                        controls={true}
                        width={"100%"}
                        height={"50vh"}
                        url={`https://www.youtube.com/watch?v=${randomVideo.id}`}
                    />
                    <p className="mt-4 text-lg">{randomVideo.snippet.description}</p>
                    <button
                        onClick={closeModal}
                        className="bg-red-600 text-white py-2 px-4 rounded mt-4"
                    >
                        ปิด
                    </button>
                </div>
            )}
        </Modal>
    );
};

export default VideoModal;
