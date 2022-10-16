import React from 'react';
import {Routes, Route} from "react-router-dom"
import HomepageOne from "./pages/HomepageOne/HomepageOne.js"
import HomepageTwo from "./pages/HomepageTwo/HomepageTwo.js"
import CoinDescription from "./pages/CoinDescription/CoinDescription.js"
import ListOfTheCoins from "./pages/ListOfTheCoins/ListOfTheCoins.js"

import './App.css';

import './common.css'
import './reset.css'


export default function App() {
  return (
    <main>
      <Routes>
          <Route path='/' element={<HomepageOne/>}/>
          <Route path='/filter' element={<HomepageTwo/>}/>
          <Route path='/list' element={<ListOfTheCoins/>}/>
          <Route path='/description/:id' element={<CoinDescription/>}/>
      </Routes>
    </main>
  );
}


