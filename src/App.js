import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Projects from './pages/projects/projects'
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'
import NotFound from './pages/not-found/notFound'
import Contact from './pages/contact/contact'

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
