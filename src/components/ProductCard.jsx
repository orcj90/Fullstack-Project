import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Picture from './Picture';

export default function ProductCard() {
    return (
        <>
            <div className="col product bg-dark-subtle">
                <div className="card cardProduct bg-body-secondary" style={{ width: 18 + 'rem' }}>
                    <Picture />
                    <div className="card-body">
                        <h5 className="card-title">Phone Name :</h5>
                        <p className="card-text"> Description : Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-body-secondary">Model Name :</li>
                        <li className="list-group-item bg-body-secondary">Description :</li>

                        <li className="list-group-item bg-body-secondary">Color :</li>
                        <li className="list-group-item bg-body-secondary">Inventory :</li>
                    </ul>
                    <div className="card-body ">
                        <li className="list-group-item bg-body-secondary">price :</li>
                        <li className="list-group-item bg-body-secondary">Discount :</li>
                        <a href="/product" className="card-link">Infromation Page</a>
                        <a href="#" className="card-link">Add to cart <i className="fa-solid fa-cart-plus fa-sm"></i></a>
                    </div>
                </div>
            </div>

        </>
    );
}