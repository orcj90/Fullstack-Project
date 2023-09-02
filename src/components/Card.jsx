import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Cards from 'react-bootstrap/Card';
import {
  getLSContent,
  setLSContent,
  calculateTotal,
  getCartItemPrices,
  displayCartTotal,
  saveProduct,
  removeProduct,
  clearCart,
  checkout
} from "../basket"
import { useEffect } from 'react'




const Card = ({ img, title, id, star, reviews, prevPrice, newPrice }) => {

  // handleClick = () => {
  //   console.log('btn clicked ');
  // }

  const [qty, setqty] = useState("1")
  const handleClick = () => {

    console.log('btn clicked ', id, id, title, img, newPrice)

    saveProduct(id, title, img, newPrice, qty)
  }
  return (
    <>

      <section className="card" id={id}>
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <p>
            Some quick example text to build on the card title
            Some quick example text
          </p>
          <section className="card-reviews">
            {star}
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-regular fa-star"></i>
            <span className="total-reviews">Reviews : {reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              Price : <del>{prevPrice}</del> {newPrice}
            </div>
          </section>
          <div className="bag" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <input className="form-control text-center me-3" id="inputQuantity" type="num" value={qty} onChange={(e) => setqty(e.target.value)} />
            <button onClick={handleClick} className="btn" id={{ id }}><i className="fa-solid fa-cart-shopping add-to-cart"></i></button>
            <Link className='navbar-item nav-link active' key={id} to={`/product/${id}`}>
              <button className="btn btn-link btn-sm">Product page</button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default Card;
