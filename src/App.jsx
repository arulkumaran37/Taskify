import Home from './Pages/home.jsx'
import Sidebar from './Components/SideBar/Sidebar.jsx'
import { Route, Routes } from 'react-router-dom'
import Important from './Pages/importanttasks.jsx'
import Completed from './Pages/completedtasks.jsx'
import Alltasks from './Pages/alltasks.jsx'
import NavBar from './Components/NavBar/Navbar.jsx'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <div className="flex">
     <Sidebar />
        <div className="ml-64 p-4 ">
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/completed' element={<Completed />} />
            <Route path='/alltasks' element={<Alltasks />} />
            <Route path='/important' element={<Important />} />
          </Routes>
        </div>
      </div>
    </>
  )

}

export default App
