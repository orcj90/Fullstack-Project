import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function Product() {
    return (
        <>
            <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="row gx-4 gx-lg-5 align-items-center">
                        <div class="col-md-6">
                            <div class="col">
                                <div id="piccard1" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#piccard1" data-bs-slide-to="0" class="active"
                                            aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#piccard1" data-bs-slide-to="1"
                                            aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#piccard1" data-bs-slide-to="2"
                                            aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver"
                                                class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver"
                                                class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver"
                                                class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#piccard1"
                                        data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#piccard1"
                                        data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col">
                                <div class="small mb-1">ID: BST-498</div>
                                <h1 class="display-5 fw-bolder">Shop item template</h1>
                                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem
                                    quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis
                                    delectus ipsam minima ea iste laborum vero?</p>
                                <div class="container-fluid">
                                    <h5 class="card-title">Phone Name :</h5>
                                    <p class="card-text"> Description : Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Model Name :</li>
                                    <li class="list-group-item">Description :</li>
                                    <li class="list-group-item">Color :</li>
                                    <li class="list-group-item">Inventory :</li>
                                    <li class="list-group-item">Discount :</li>
                                    <li class="list-group-item">price :
                                        <div class="fs-5 mb-5">
                                            <span class="text-decoration-line-through">$45.00</span>
                                            <span>$40.00</span>
                                        </div>
                                    </li>
                                </ul>
                                <div class="d-flex">
                                    <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" />
                                    <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                        <i class="bi-cart-fill me-1"></i>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}