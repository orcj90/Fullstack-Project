import React from 'react'
import ProductPage from '../components/ProductPage';
import Header from '../components/Main/Header';
import Footer from '../components/Main/Footer';
import ProductCard from './ProductCard';

export default function Home() {
  return (
    <>
      <div className="container-fluid bg-dark-subtle">
        <div>
          <h1 className="text-center">Products List</h1>
        </div>
        <div className="container bg-dark-subtle">
          <div className="container text-center">
            <div className="row align-items-start">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
