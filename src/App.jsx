import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Highlights from './components/Highlights/Highlights'
import Testimonials from './components/Testimonials/Testimonials'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <main>
        <h2>Main</h2>
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <Routes>
        <Route path='/'/>
        <Route path='/reservations'/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
