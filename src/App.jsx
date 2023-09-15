import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handelBookmarks = (course) => {
    const newBookmarks = [...bookmarks, course];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <h1 className='text-4xl font-bold text-center my-7'>Corse Registration</h1>
      <div className="flex container mx-auto gap-6">
        <Courses
        handelBookmarks={handelBookmarks}
        ></Courses>
        <Bookmarks
        bookmarks={bookmarks}
        ></Bookmarks>

      </div>
    </>
  )
}

export default App
