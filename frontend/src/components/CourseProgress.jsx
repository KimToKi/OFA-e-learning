import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseProgress = ({ userId, courseId }) => {
    const [progress, setProgress] = useState(null);

    useEffect(() => {
        const fetchProgress = async () => {
            const response = await axios.get(`/api/progress/user/${userId}/course/${courseId}`);
            setProgress(response.data);
        };
        fetchProgress();
    }, [userId, courseId]);

    return (
        <div>
            <h2>ความคืบหน้าในคอร์ส</h2>
            {progress ? (
                <div>
                    <p>ความคืบหน้า: {progress.progressPercentage}%</p>
                    <p>บทเรียนที่เสร็จสิ้น: {progress.completedLessons.length}</p>
                </div>
            ) : (
                <p>กำลังโหลด...</p>
            )}
        </div>
    );
};

export default CourseProgress;
