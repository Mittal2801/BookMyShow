import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListYourShow from './components/ListYourShow'
import Corporates from './components/Corporates'
import Offers from './components/Offers'
import EGiftCards from './components/EGiftCards'
import PhysicalCards from './components/PhysicalCards'
import Movies from './components/Movies'
import Stream from './components/Stream'
import Events from './components/Events'
import Plays from './components/Plays'
import Activities from './components/Activities'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/listyourshow' element={<ListYourShow />}></Route>
          <Route path='/corporates' element={<Corporates />}></Route>
          <Route path='/offers' element={<Offers />}></Route>
          <Route path='/ecards' element={<EGiftCards />}></Route>
          <Route path='/pcards' element={<PhysicalCards />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/stream' element={<Stream />}></Route>
          <Route path='/events' element={<Events />}></Route>
          <Route path='/plays' element={<Plays />}></Route>
          <Route path='/activities' element={<Activities />}></Route>
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App