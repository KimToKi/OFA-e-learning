const express = require('express');
const Progress = require('../models/Progress');
const router = express.Router();

// อัปเดตความคืบหน้า
router.post('/update', async (req, res) => {
    try {
        const { userId, courseId, lessonId } = req.body;
        let progress = await Progress.findOne({ userId, courseId });

        if (!progress) {
            progress = new Progress({ userId, courseId, completedLessons: [] });
        }

        if (!progress.completedLessons.includes(lessonId)) {
            progress.completedLessons.push(lessonId);
            progress.progressPercentage = (progress.completedLessons.length / totalLessons) * 100;
            await progress.save();
        }

        res.status(200).json(progress);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ดึงความคืบหน้าของผู้ใช้
router.get('/user/:userId/course/:courseId', async (req, res) => {
    try {
        const progress = await Progress.findOne({ userId: req.params.userId, courseId: req.params.courseId });
        res.json(progress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
