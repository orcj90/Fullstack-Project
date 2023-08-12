import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import PageLayout from './components/PageLayout';
import Product from './components/Product';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
