import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Picture from './Picture';

export default function ProductCard() {
    return (
        <>
            <div class="col product bg-dark-subtle">
                <div class="card cardProduct bg-body-secondary" style={{ width: 18 + 'rem' }}>
                    {/* <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver" class="card-img-top" alt="Phone" /> */}
                    <Picture />
                    <div class="card-body">
                        <h5 class="card-title">Phone Name :</h5>
                        <p class="card-text"> Description : Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-body-secondary">Model Name :</li>
                        <li class="list-group-item bg-body-secondary">Description :</li>

                        <li class="list-group-item bg-body-secondary">Color :</li>
                        <li class="list-group-item bg-body-secondary">Inventory :</li>
                    </ul>
                    <div class="card-body ">
                        <li class="list-group-item bg-body-secondary">price :</li>
                        <li class="list-group-item bg-body-secondary">Discount :</li>
                        <a href="#" class="card-link">Infromation Page</a>
                        <a href="#" class="card-link">Add to cart <i class="fa-solid fa-cart-plus fa-sm"></i></a>
                    </div>
                </div>
            </div>

        </>
    );
}