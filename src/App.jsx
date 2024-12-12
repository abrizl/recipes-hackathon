import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Filters from "./components/Filters/Filters";
import HomePage from "./pages/HomePage/HomePage";
import RecipePage from "./pages/RecipePage/RecipePage";
import { useState, useEffect} from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import HomePage from './pages/HomePage/HomePage';
import RecipePage from './pages/RecipePage/RecipePage';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Filters />

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/recipes/:recipeId" element={<RecipePage/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
