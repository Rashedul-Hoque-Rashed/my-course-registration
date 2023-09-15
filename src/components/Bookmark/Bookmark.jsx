import { PropTypes } from "prop-types";

const Bookmark = ({ bookmark, idx }) => {
    return (
        <div>
            <ul className="mb-2 text-base font-normal text-slate-500">
                <li>
                {idx+1}. {bookmark.course_name}
                </li>
            </ul>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object,
    idx: PropTypes.number
}

export default Bookmark;