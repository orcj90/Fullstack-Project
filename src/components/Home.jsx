import React from 'react'
import ProductPage from '../components/ProductPage';
import Header from '../components/Main/Header';
import Footer from '../components/Main/Footer';
import ProductCard from './ProductCard';

export default function Home() {
  return (
    <>
      <div class="container-fluid bg-dark-subtle">
        <div>
          <h1 class="text-center">Products List</h1>
        </div>
        <div class="container bg-dark-subtle">
          <div class="container text-center">
            <div class="row align-items-start">
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
