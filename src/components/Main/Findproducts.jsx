import React, { useState } from 'react'
import "./Findproducts.css";

const Findproducts = ({ result }) => {
  return (
    <>
      <section className="card-container productpage">{result}</section>
    </>
  );
};

export default Findproducts;
