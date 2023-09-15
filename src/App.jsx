import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [totalHour, setTotalHour] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handelBookmarks = (course) => {
    const isExist = bookmarks.find((item) => item.id == course.id);
    let count = course.credit;
    let price = course.price;
    if (isExist) {
      toast('This course is already selected')
    }
    else {
      bookmarks.forEach((item) => {
        count += item.credit;
        price += item.price;
      })
      const totalRemaining = 20 - count;
      if(totalRemaining < 0) {
        toast('Your have not enough remaining hour')
      }
      if (count > 20) {
        return toast('Your total credit limitation is 20 hr')
      }
      else {
        const newBookmarks = [...bookmarks, course];
        setTotalHour(count);
        setTotalPrice(price);
        setRemaining(totalRemaining);
        setBookmarks(newBookmarks);
      }
    }
  }

  return (
    <>
      <h1 className='text-4xl font-bold text-center my-7'>Corse Registration</h1>
      <div className="flex flex-col md:flex-row container mx-auto gap-6">
        <Courses
          handelBookmarks={handelBookmarks}
        ></Courses>
        <Bookmarks
          bookmarks={bookmarks}
          totalHour={totalHour}
          totalPrice={totalPrice}
          remaining={remaining}
        ></Bookmarks>
        <ToastContainer></ToastContainer>
      </div>
    </>
  )
}

export default App
