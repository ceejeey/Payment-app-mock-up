// import Home from "./Pages/Dashboard";
import './App.css';
import { useState } from 'react'
import NavBar from './components/NavBar';
import Transaction from './components/Pages/Transaction'
import Settings from './components/Pages/Settings'
import Home from './components/Pages/Home'

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  
  const [PageState, setPageState] = useState(1);

  return <>
    <BrowserRouter>
        <Routes>
        <Route path="/Settings" element={<Settings />}></Route>
          <Route path="/Transaction" element={<Transaction />}></Route>
          <Route path="/" element={<Home />} ></Route>
        </Routes>
        {<NavBar setPageState={setPageState} PageState={PageState} />}
      </BrowserRouter>
    </>
}

export default App;
