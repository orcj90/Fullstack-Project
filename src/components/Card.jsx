import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Cards from 'react-bootstrap/Card';

const Card = ({ img, title, id, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <Link className='navbar-item nav-link active' key={id} to={`/product/${id}`}>
        <section className="card" id={id}>
          <img src={img} alt={title} className="card-img" />
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <p>
              Some quick example text to build on the card title
              Some quick example text to build on the card title
            </p>
            <section className="card-reviews">
              {star}
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
              <i className="fa-regular fa-star"></i>
              <span className="total-reviews">{reviews}</span>
            </section>
            {/* <section className="card-body">
            <div className="">

              {title}{title}{title}{title}{title}

            </div>
          </section> */}
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="bag">
                <i className="fa-solid fa-cart-shopping"></i>
                {/* <Link className='navbar-item nav-link active' to={'/basket'}><i className="fa-solid fa-cart-shopping"></i></Link> */}
              </div>
            </section>
          </div>
        </section>
      </Link>
    </>
  );
};

export default Card;
