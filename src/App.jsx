import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Highlights from './components/Highlights/Highlights'
import Testimonials from './components/Testimonials/Testimonials'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPage/AboutPage';
import Reservations from './pages/Reservations/Reservations';
import Menu from './pages/Menu/Menu';
import OrderOnline from './pages/OrderOnline/OrderOnline';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage /> } />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/order_online' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
