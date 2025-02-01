// backend/services/youtube.service.js
const videos = [
    {
        id: "wdsc_QfFL2E",
        snippet: {
            title: "National Convention 2023",
            description: "BoostUp The Power...",
            thumbnails: {
                high: {
                    url: "https://i.ytimg.com/vi/wdsc_QfFL2E/hqdefault.jpg",
                },
            },
            publishedAt: "2023-06-23T00:00:00Z",
        },
    },
    {
        id: "Ao0jHRFS-Is",
        snippet: {
            title: "Future Leader Club #1",
            description: "“การตัดสินใจ และการตั้งเป้าหมาย”...",
            thumbnails: {
                high: {
                    url: "https://i.ytimg.com/vi/Ao0jHRFS-Is/hqdefault.jpg",
                },
            },
            publishedAt: "2019-06-13T00:00:00Z",
        },
    },
    // เพิ่มวิดีโออื่น ๆ ตามต้องการ
];

export function fetchFromYouTube(endpoint) {
    return new Promise((resolve, reject) => {
        try {
            // ตัวอย่างการจำลองการดึงข้อมูลจาก YouTube
            if (endpoint === "/trending") {
                // สุ่มวิดีโอ 1 ตัว
                const randomVideo = videos[Math.floor(Math.random() * videos.length)];
                resolve({ results: [randomVideo] });
            } else if (endpoint.startsWith("/video/")) {
                // ดึงข้อมูลวิดีโอตาม ID
                const videoId = endpoint.split("/video/")[1];
                const video = videos.find((v) => v.id === videoId);
                if (video) {
                    resolve(video);
                } else {
                    reject(new Error("Video not found"));
                }
            } else if (endpoint.startsWith("/similar/")) {
                // ดึงวิดีโอที่คล้ายกัน (ตัวอย่าง: สุ่ม 5 วิดีโอ)
                const similarVideos = videos.slice(0, 5); // ตัวอย่าง: 5 วิดีโอแรก
                resolve({ results: similarVideos });
            } else {
                reject(new Error("Invalid endpoint"));
            }
        } catch (error) {
            reject(error);
        }
    });
}
