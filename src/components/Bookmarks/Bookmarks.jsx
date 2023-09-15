import Bookmark from "../Bookmark/Bookmark";
import { PropTypes } from "prop-types";

const Bookmarks = ({ bookmarks }) => {

    return (
        <div className="w-1/3 bg-slate-100 h-fit rounded-lg p-6">
            <h2 className="text-xl font-bold text-blue-600 my-5">Credit Hour Remaining <span>{20}</span> hr</h2>
            <hr className="mt-6" />
            <h2 className="text-xl font-bold text-black my-5">Course Name</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={bookmark.id} idx={idx} bookmark={bookmark}></Bookmark>)
            }
            <hr className="mt-6" />
            <p className="text-xl font-medium text-slate-600 my-4">Total credit hour: {0} </p>
            
            <p className="text-xl font-medium text-slate-600 my-4">Total price: {0} USD </p>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object
}

export default Bookmarks;