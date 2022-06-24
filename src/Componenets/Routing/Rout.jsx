import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import { AboutMain } from '../About/AboutMain';
import { Home } from '../Home/Home';

export const Rout = () => {
  return (
    <>
           
     <main>
            <Routes>
               <Route path="/" element={<Home/>} exact />
               <Route path="/about" element={<AboutMain/>} exact/>
            </Routes>        
    </main>
    </>
  )
}
