import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Helmet } from 'react-helmet';

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import { useEffect } from 'react';


// const ChangeTitle = () =>{
//   useEffect(()=>{
//     const currentLocation = window.location.pathname;

//     const titleMappings = {
//       "/": "Portfolio",
//       "/about": "Portfolio (About Me)",
//       "/projects": "Portfolio (Projects)"
//     }

//     document.title = titleMappings[currentLocation] || "Portfolio"
//   },[])
// }


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
        element: (
          <>
            <Helmet>
              <title>Portfolio</title>
            </Helmet>
            <Home />
          </>
        )
      },
      {
        path:"/about",
        element: (<>
        <Helmet>
              <title>Portfolio (About Me)</title>
            </Helmet>
        <About/></>)
      },
      {
        path:"/projects",
        element: (
          <>
            <Helmet>
              <title>Portfolio (Projects)</title>
            </Helmet>
            <Projects />
          </>
        )
      },
      {
        path:"/contact",
        element: (<Contact/>)
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
