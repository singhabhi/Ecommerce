import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import { AboutMain } from '../About/AboutMain';
import { Home } from '../Home/Home';
import { MainContact } from '../Contact/MainContact';


export const Rout = () => {
  return (
    <>
           
     <main>
            <Routes>
               <Route path="/" element={<Home/>} exact />
               <Route path="/about" element={<AboutMain/>} exact/>
               <Route path="/contact" element={<MainContact/>} exact/>
            </Routes>        
    </main>
    </>
  )
}
