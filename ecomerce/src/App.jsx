import { Routes, Route } from 'react-router';
import axios from 'axios';
import TrackingPage from './pages/TrackingPage';
import CheckOut from './pages/CheckOut';
import HomePage from './pages/HomePage'
import OrdersPage from './pages/OrdersPage';
import './App.css'
import { useEffect, useState } from 'react';



function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get("/api/cart-items?expand=product")
      .then((response) => {
        setCart(response.data)
      })
  }, [])
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />}></Route>
      <Route path="checkout" element={<CheckOut cart={cart} />}></Route>
      <Route path="orders" element={<OrdersPage />}> </Route>
      <Route path="tracking" element={<TrackingPage />}></Route>
    </Routes >
  )
}

export default App
