// backend/app.js
import express from "express";
import movieRouter from "./routes/movie.route.js";

const app = express();

app.use(express.json());
app.use("/api/movies", movieRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
