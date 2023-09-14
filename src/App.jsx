import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'

function App() {


  return (
    <>
      <h1 className='text-4xl font-bold text-center my-7'>Corse Registration</h1>
      <div className="flex container mx-auto gap-6">
        <Courses></Courses>
        <Bookmarks></Bookmarks>

      </div>
    </>
  )
}

export default App
