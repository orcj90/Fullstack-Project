import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Product from './components/Product';
import PageLayout from './components/PageLayout';
import Basket from './components/Basket';


import Homepage from './components/Homepage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/basket' element={<Basket />}></Route>
          <Route path='/Productpage' element={<ProductPage />}></Route>
          <Route path='/Homepage' element={<Homepage />}></Route>
        </Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;