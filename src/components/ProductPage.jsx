import { useEffect, useState } from 'react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function ProductPage() {
  return (
    <>
      <div>
        <h1 class="text-center">Products List</h1>
      </div>
      <div class="container bg-dark-subtle">
        <div class="container text-center">
          <div class="row align-items-start">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}
