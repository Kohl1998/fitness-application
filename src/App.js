import './App.css';
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Error from './pages/Error'


function App() {
    return (
        <>
                <Routes>
                    {/* default route for element */}
                    <Route path='/' element={<Home/>}/>
                    <Route path='/services' element={<Services />} />
                    <Route path='/testimonials' element={<Testimonials />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<Error />} />
                </Routes>
        </>
    );
}

export default App;
