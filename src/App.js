import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div> 
        <Navbar/>
        <Routes>
            <Route path='/' element={<News key="general" country="in" category="general"></News>}></Route>
            <Route path='/technology' element={<News key="technology" country="in" category="technology"></News>}></Route>
            <Route path='/sports' element={<News key="sports" country="in" category="sports"></News>}></Route>
            <Route path='/science' element={<News key="science" country="in" category="science"></News>}></Route>
            <Route path='/health' element={<News key="health" country="in" category="health"></News>}></Route>
            <Route path='/entertainment' element={<News key="entertainment" country="in" category="entertainment"></News>}></Route>
            <Route path='/business' element={<News key="business" country="in" category="business"></News>}></Route>
            <Route path='/about' element={<h1>This is a about page</h1>}></Route>
        </Routes>
        </div>  
      </BrowserRouter>
      

    )
  }
}

export default App

