import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../page/MainPage';
import InfoPage from '../page/InfoPage';
import GalleryPage from '../page/GalleryPage';
import ContactPage from '../page/ContactPage';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/info" element={<InfoPage/>} />
              <Route path="/gallery" element={<GalleryPage/>} />
              <Route path="/contact" element={<ContactPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router