import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import SimpleSlider from './Components/Hero-Slider/SimpleSlider'
import Footer from './Components/Footer/Footer'
import Third from './Components/Platform/Platforms'
import Supercharge from './Components/GetStart/GetStart'
import AutoPlay from './Components/Autoplay/Autoplay'
import ProductCards from './Components/Cards/ProductCards'
import StackedSection from './Components/Stack/StackedSection'
import Testimonials from './Components/Testimonials/Testimonials'
import Developer from './Components/Developer/Developer'
import NonDeveloper from './Components/NonDeveloper/NonDeveloper'


function App() {

  return (
    <>

    <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route path='/' element={
            <>
              <SimpleSlider/>
              <AutoPlay/>
              <Third/>
              <StackedSection/>
              <ProductCards/>
              <Developer/>
              <NonDeveloper/>
              <Testimonials/>
              <Supercharge/>
            </>
          }/>
        </Routes>

      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
