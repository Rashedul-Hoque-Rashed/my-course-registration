import { useEffect, useState } from "react";
import Course from "../Course/Course";
import { PropTypes } from "prop-types";

const Courses = ({ handelBookmarks }) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (

        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                    handelBookmarks={handelBookmarks}
                ></Course>)
            }
        </div>
    );
};
Courses.propTypes = {
    handelBookmarks: PropTypes.func
}

export default Courses;