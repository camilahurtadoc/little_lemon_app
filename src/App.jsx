import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Highlights from './components/Highlights/Highlights'
import Testimonials from './components/Testimonials/Testimonials'

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
      <Footer />
    </>
  )
}

export default App
