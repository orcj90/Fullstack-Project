import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Picture from './Picture';

export default function Product() {
    return (
        <>
            <div class="col product bg-dark-subtle">
                <div class="container-fluid bg-body-secondary">
                    {/* <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver" class="card-img-top" alt="Phone" /> */}
                    {/* <Picture /> */}


                    <div id="piccard1" class="carousel slide" style={{ width: 18 + 'rem' }}>
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#piccard1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#piccard1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#piccard1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#piccard1" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#piccard1" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div class="container-fluid">
                        <h5 class="card-title">Phone Name :</h5>
                        <p class="card-text"> Description : Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-body-secondary">Model Name :</li>
                        <li class="list-group-item bg-body-secondary">Description :</li>

                        <li class="list-group-item bg-body-secondary">Color :</li>
                        <li class="list-group-item bg-body-secondary">Inventory :</li>
                    </ul>
                    <div class="conteiner ">
                        <li class="list-group-item bg-body-secondary">price :</li>
                        <li class="list-group-item bg-body-secondary">Discount :</li>
                        <a href="#" class="card-link">Add to cart <i class="fa-solid fa-cart-plus fa-sm"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}