// backend/controllers/movie.controller.js
import { fetchFromYouTube } from "../services/youtube.service.js";

export async function getTrendingMovie(req, res) {
    try {
        const data = await fetchFromYouTube("/trending");
        const randomMovie = data.results[0]; // สุ่มวิดีโอ 1 ตัว
        res.json({ success: true, content: randomMovie });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getMovieTrailers(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchFromYouTube(`/video/${id}`);
        res.json({ success: true, trailers: [data] }); // ตัวอย่าง: ส่งข้อมูลวิดีโอเดียวเป็น trailer
    } catch (error) {
        if (error.message.includes("not found")) {
            return res.status(404).send(null);
        }
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getMovieDetails(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchFromYouTube(`/video/${id}`);
        res.status(200).json({ success: true, content: data });
    } catch (error) {
        if (error.message.includes("not found")) {
            return res.status(404).send(null);
        }
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getSimilarMovies(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchFromYouTube(`/similar/${id}`);
        res.status(200).json({ success: true, similar: data.results });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getMoviesByCategory(req, res) {
    const { category } = req.params;
    try {
        // ตัวอย่าง: ส่งวิดีโอทั้งหมดเป็นผลลัพธ์
        const data = await fetchFromYouTube("/trending");
        res.status(200).json({ success: true, content: data.results });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
