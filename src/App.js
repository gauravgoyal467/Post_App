import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Navbar from './components/Navbar'
import Detail from './components/Detail'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/item/:id" element={<Detail/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App