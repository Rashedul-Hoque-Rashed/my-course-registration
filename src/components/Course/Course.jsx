import { BsBook } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';
import { PropTypes } from "prop-types";

const Course = ({ course, handelBookmarks }) => {
    const { course_name, course_img, credit, price, course_details } = course;
    return (
        <div className="bg-slate-100 rounded-lg p-4">
            <img className="w-full" src={course_img} alt="" />
            <h2 className="text-lg font-semibold mt-4 mb-3">{course_name}</h2>
            <h4 className="text-sm font-normal mb-4 text-slate-500">{course_details}</h4>
            <div className="flex justify-between items-center mb-6">
                <div>

                    <p className="text-slate-500 font-medium flex"><MdAttachMoney className='h-6 text-black' /> Price: {price}</p>
                </div>
                <div>
                    <p className="text-slate-500 font-medium flex gap-2"><BsBook className='h-6 text-black' /> Credit: {credit}hr</p>
                </div>
            </div>
            <button onClick={() => handelBookmarks(course)} className="text-white bg-blue-600 text-lg font-semibold w-full rounded-lg p-2 mb-4">Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handelBookmarks: PropTypes.func 
}

export default Course;