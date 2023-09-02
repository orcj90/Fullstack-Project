import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Checkout() {
    
    const checkout = (e) => {
        navigate('/basket')
        }
    const abort = (e) => {
    navigate('/')
    }
    const navigate = useNavigate()
    return (
        <>
            <div className="container-fluid">
                <div className="col-8 container-fluid" style={{ display: "inline-block", top: "100px" }}>
                    <div class="card shadow-0 border" style={{ height: "100%", width: "80%" }}>
                        <div class="p-4">
                            <h5 class="card-title mb-3">checkout</h5>
                            <div class="row">
                                <div class="col-6 mb-3">
                                    <p class="mb-0">First name</p>
                                    <div class="form-outline">
                                        <input type="text" id="typeText" placeholder="Type here" class="form-control" required />
                                    </div>
                                </div>

                                <div class="col-6">
                                    <p class="mb-0">Last name</p>
                                    <div class="form-outline">
                                        <input type="text" id="typeText" placeholder="Type here" class="form-control" required />
                                    </div>
                                </div>

                                <div class="col-6 mb-3">
                                    <p class="mb-0">Phone</p>
                                    <div class="form-outline">
                                        <input type="tel" id="typePhone" value="" class="form-control" required />
                                    </div>
                                </div>

                                <div class="col-6 mb-3">
                                    <p class="mb-0">Email</p>
                                    <div class="form-outline">
                                        <input type="email" id="typeEmail" placeholder="example@gmail.com" class="form-control" required />
                                    </div>
                                </div>
                            </div>

                            <hr class="my-4" />

                            <h5 class="card-title mb-3">Shipping info</h5>

                            <div class="row mb-3">
                                <div class="col-lg-4 mb-3">

                                    <div class="form-check h-100 border ">
                                        <div class="p-3">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Express delivery <br />
                                                <small class="text-muted">3-4 days via Fedex </small>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-3">

                                    <div class="form-check h-100 border ">
                                        <div class="p-3">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Post office <br />
                                                <small class="text-muted">20-30 days via post </small>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-3">

                                    <div class="form-check h-100 border ">
                                        <div class="p-3">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                            <label class="form-check-label" for="flexRadioDefault3">
                                                Self pick-up <br />
                                                <small class="text-muted">Come to our shop </small>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-8 mb-3">
                                    <p class="mb-0">Address</p>
                                    <div class="form-outline">
                                        <input type="text" id="typeText" placeholder="Type here" class="form-control" required />
                                    </div>
                                </div>

                                <div class="col-sm-4 mb-3">
                                    <p class="mb-0">City</p>
                                    <select class="form-select">
                                        <option value="1">Beer sheva</option>
                                        <option value="2">Ofakim</option>
                                    </select>
                                </div>

                                <div class="col-sm-4 mb-3">
                                    <p class="mb-0">House</p>
                                    <div class="form-outline">
                                        <input type="text" id="typeText" placeholder="Type here" class="form-control" required />
                                    </div>
                                </div>

                                <div class="col-sm-4 col-6 mb-3">
                                    <p class="mb-0">Zip</p>
                                    <div class="form-outline">
                                        <input type="text" id="typeText" class="form-control" required />
                                    </div>
                                </div>
                            </div>

                            <div class="float-end">
                                <button class="btn btn-light border" onClick={abort}>Cancel</button>
                                <button class="btn btn-success shadow-0 border" onClick={checkout}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 container-fluid" style={{ display: "inline-block", top: "100px" ,verticalAlign: "text-top"}}>
                    <div class="col">
                        <div class="ms-lg-4 mt-4 mt-lg-0" style={{ maxwidth: 320 + "px" }}>
                            <h6 class="mb-3">Summary</h6>
                            <div class="d-flex justify-content-between">
                                <p class="mb-2">Total price:</p>
                                <p class="mb-2">${JSON.parse(localStorage.getItem("totalprice"))}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p class="mb-2">Discount:</p>
                                <p class="mb-2 text-danger">30%</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p class="mb-2">Shipping cost:</p>
                                <p class="mb-2">+ $14.00</p>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between">
                                <p class="mb-2">Total price:</p>
                                <p class="mb-2 fw-bold">${JSON.parse(localStorage.getItem("totalprice")) + 14}</p>
                            </div>

                            <div class="input-group mt-3 mb-4">
                                <input type="text" class="form-control border" name="" placeholder="Promo code" />
                                <button class="btn btn-light text-primary border">Apply</button>
                            </div>

                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}