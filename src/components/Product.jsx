import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function Product() {
    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            <div className="col">
                                <div id="piccard1" className="carousel slide">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#piccard1" data-bs-slide-to="0" className="active"
                                            aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#piccard1" data-bs-slide-to="1"
                                            aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#piccard1" data-bs-slide-to="2"
                                            aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver"
                                                className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver"
                                                className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver"
                                                className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#piccard1"
                                        data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#piccard1"
                                        data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col">
                                <div className="small mb-1">ID: BST-498</div>
                                <h1 className="display-5 fw-bolder">Shop item template</h1>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem
                                    quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis
                                    delectus ipsam minima ea iste laborum vero?</p>
                                <div className="container-fluid">
                                    <h5 className="card-title">Phone Name :</h5>
                                    <p className="card-text"> Description : Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Model Name :</li>
                                    <li className="list-group-item">Description :</li>
                                    <li className="list-group-item">Color :</li>
                                    <li className="list-group-item">Inventory :</li>
                                    <li className="list-group-item">Discount :</li>
                                    <li className="list-group-item">price :
                                        <div className="fs-5 mb-5">
                                            <span className="text-decoration-line-through">$45.00</span>
                                            <span>$40.00</span>
                                        </div>
                                    </li>
                                </ul>
                                <div className="d-flex">
                                    <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" />
                                    <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                        <i className="bi-cart-fill me-1"></i>
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