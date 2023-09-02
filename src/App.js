import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import Contact from './components/Contact';
import Product from './components/Product';
import PageLayout from './components/PageLayout';
import Basket from './components/Basket';
import Mainpage from './components/Mainpage';
import Homepage from './components/Homepage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Checkout from './components/Checkout';
import ProtectedRoute from './components/ProtectedRoute';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';




import {
  getLSContent,
  setLSContent,
  calculateTotal,
  getCartItemPrices,
  displayCartTotal,
  saveProduct
} from "../src/basket"

function App() {

  const { user } = useContext(AuthContext)

  // console.log(user)

  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          {/* <Route path='/productcard' element={<Product />}></Route> */}
          <Route path='/product' element={<Homepage />}></Route>
          <Route path='/product/:id' element={<Product />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path='/basket' element={<Basket />}></Route>
          </Route>
            <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/' element={<Mainpage />}></Route>
        </Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes >
    </>
  );
}

export default App;