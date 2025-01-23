import express from 'express';

import authRoutes from "./routes/auth.route.js";

const app = express();

// Route สำหรับ Root URL
app.get('/', (req, res) => {
    res.send('Welcome to the OFA E-learning API!');
});

app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
