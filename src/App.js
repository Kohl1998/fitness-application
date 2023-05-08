import './App.css';
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Services from "./Components/Services/Services"
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Calculate from './Components/Calculate/Calculate'
import Error from './Components/Error/Error'


function App() {
    return (
        <>
                <Routes>
                    {/* default route for element */}
                    <Route path='/' element={<Home/>}/>
                    <Route path='/services' element={<Services />} />
                    <Route path='/testimonials' element={<Testimonials />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/calculate' element={<Calculate />} />
                    <Route path='*' element={<Error />} />
                </Routes>
        </>
    );
}

export default App;
