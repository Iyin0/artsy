import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import Navbar from "./components/navbar"
import Auctions from './pages/auctions'
import Cart from './pages/cart'
import Confirmation from './pages/confirmation'
import Drop from './pages/drop'
import Home from './pages/home'
import LiveBid from './pages/liveBid'
import MarketItem from './pages/marketItem'
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
            <Route path='/marketplace/:id' element={<MarketItem />} />
            <Route path='/marketplace/cart' element={<Cart />} />
            <Route path='/marketplace/confirm' element={<Confirmation />} />
            <Route path='/auctions' element={<Auctions />} />
            <Route path='/auctions/live-bid/:id' element={<LiveBid />} />
            <Route path='/drop' element={<Drop />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
