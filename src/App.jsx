import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'



const Layout = () =>{
  return(
  <div className="app">
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>)
}

const router = createBrowserRouter([
  {
    path : "/",
    element:<Layout/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/projects",
        element: <Projects/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
    ]
  }
])

function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
