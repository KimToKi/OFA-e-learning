import React from 'react';
import CourseProgress from '../components/CourseProgress';

const CourseDetail = ({ userId, courseId }) => {
    return (
        <div>
            <h1>รายละเอียดคอร์ส</h1>
            <CourseProgress userId={userId} courseId={courseId} />
        </div>
    );
};

export default CourseDetail;
