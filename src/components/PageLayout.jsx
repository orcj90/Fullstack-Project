import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Main/Header';
import Footer from '../components/Main/Footer';

export default function PageLayout() {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}