import { useContext } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { ThemeContext } from './contexts/theme'

import './App.css'
import Home from './Pages/Home'
import Project1 from './Pages/Project1'
import Project2 from './Pages/Project2'
import Project3 from './Pages/Project3'
import ErrorPage from './Pages/ErrorPage'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project1' element={<Project1 />} />
            <Route path='/project2' element={<Project2 />} />
            <Route path='/project3' element={<Project3 />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Router>
      </main>
      <Footer />
      {/* <ScrollToTop /> */}
    </div>
  )
}

export default App
