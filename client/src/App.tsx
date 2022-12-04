import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar"
import Auctions from './pages/auctions'
import Drop from './pages/drop'
import Home from './pages/home'
import Marketplace from './pages/marketplace'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/marketplace' element={<Marketplace />} />
            <Route path='/auctions' element={<Auctions />} />
            <Route path='/drop' element={<Drop />} />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>

  )
}

export default App
