import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact={true} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
