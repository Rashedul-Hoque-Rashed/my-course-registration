import { PropTypes } from "prop-types";

const Bookmark = ({ bookmark, idx }) => {
    return (
        <div>
            <p className="mb-2 text-base font-normal text-slate-500">{idx}. {bookmark.course_name}</p>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object,
    idx: PropTypes.number
}

export default Bookmark;