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
                    <div className="card shadow-0 border" style={{ height: "100%", width: "80%" }}>
                        <div className="p-4">
                            <h5 className="card-title mb-3">checkout</h5>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <p className="mb-0">First name</p>
                                    <div className="form-outline">
                                        <input type="text" id="typeText" placeholder="Type here" className="form-control" required />
                                    </div>
                                </div>

                                <div className="col-6">
                                    <p className="mb-0">Last name</p>
                                    <div className="form-outline">
                                        <input type="text" id="typeText" placeholder="Type here" className="form-control" required />
                                    </div>
                                </div>

                                <div className="col-6 mb-3">
                                    <p className="mb-0">Phone</p>
                                    <div className="form-outline">
                                        <input type="tel" id="typePhone" value="" className="form-control" required />
                                    </div>
                                </div>

                                <div className="col-6 mb-3">
                                    <p className="mb-0">Email</p>
                                    <div className="form-outline">
                                        <input type="email" id="typeEmail" placeholder="example@gmail.com" className="form-control" required />
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <h5 className="card-title mb-3">Shipping info</h5>

                            <div className="row mb-3">
                                <div className="col-lg-4 mb-3">

                                    <div className="form-check h-100 border ">
                                        <div className="p-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Express delivery <br />
                                                <small className="text-muted">3-4 days via Fedex </small>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-3">

                                    <div className="form-check h-100 border ">
                                        <div className="p-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                                Post office <br />
                                                <small className="text-muted">20-30 days via post </small>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-3">

                                    <div className="form-check h-100 border ">
                                        <div className="p-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                            <label className="form-check-label" for="flexRadioDefault3">
                                                Self pick-up <br />
                                                <small className="text-muted">Come to our shop </small>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-8 mb-3">
                                    <p className="mb-0">Address</p>
                                    <div className="form-outline">
                                        <input type="text" id="typeText" placeholder="Type here" className="form-control" required />
                                    </div>
                                </div>

                                <div className="col-sm-4 mb-3">
                                    <p className="mb-0">City</p>
                                    <select className="form-select">
                                        <option value="1">Beer sheva</option>
                                        <option value="2">Ofakim</option>
                                    </select>
                                </div>

                                <div className="col-sm-4 mb-3">
                                    <p className="mb-0">House</p>
                                    <div className="form-outline">
                                        <input type="text" id="typeText" placeholder="Type here" className="form-control" required />
                                    </div>
                                </div>

                                <div className="col-sm-4 col-6 mb-3">
                                    <p className="mb-0">Zip</p>
                                    <div className="form-outline">
                                        <input type="text" id="typeText" className="form-control" required />
                                    </div>
                                </div>
                            </div>

                            <div className="float-end">
                                <button className="btn btn-light border" onClick={abort}>Cancel</button>
                                <button className="btn btn-success shadow-0 border" onClick={checkout}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 container-fluid border" style={{ display: "inline-block", top: "100px", verticalAlign: "text-top" }}>
                    <div className="col">
                        <div className="ms-lg-4 mt-4 mt-lg-0" style={{ maxwidth: 320 + "px" }}>
                            <h6 className="mb-3">Summary</h6>
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Total price:</p>
                                <p className="mb-2">${JSON.parse(localStorage.getItem("totalprice"))}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Discount:</p>
                                <p className="mb-2 text-danger">30%</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Shipping cost:</p>
                                <p className="mb-2">+ $14.00</p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Total price:</p>
                                <p className="mb-2 fw-bold">${JSON.parse(localStorage.getItem("totalprice")) + 14}</p>
                            </div>

                            <div className="input-group mt-3 mb-4">
                                <input type="text" className="form-control border" name="" placeholder="Promo code" />
                                <button className="btn btn-light text-primary border">Apply</button>
                            </div>

                            <hr />
                            <div className="border">
                                <div className="col-6">
                                    <p className="mb-0">Card Number</p>
                                    <div className="form-outline">
                                        <input type="number" id="creditnumber" placeholder="0000-0000-0000-0000" className="form-control" required />
                                    </div>
                                </div>

                                <div className="col-6 mb-3">
                                    <p className="mb-0">Date</p>
                                    <div className="form-outline">
                                        <input type="text" id="creditdate" value="" placeholder="00/00" className="ofrm-control" required />
                                    </div>
                                </div>

                                <div className="col-6 mb-3">
                                    <p className="mb-0">Code</p>
                                    <div className="form-outline">
                                        <input type="number" id="creditcode" placeholder="000" pattern="" className="form-control" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}