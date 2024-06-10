//import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from "./page/Home";
import Project from "./page/Project";


import './App.scss'
import Blog from "./page/Blog";




function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />} />
          <Route
            path="/project"
            element={<Project />} />
          <Route
            path="/blog"
            element={<Blog />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
