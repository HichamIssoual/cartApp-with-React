import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Products from './components/Products'


function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    )
}

export default App
