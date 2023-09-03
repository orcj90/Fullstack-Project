import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    getLSContent,
    setLSContent
} from "../basket"
import { useEffect, useState } from 'react'


export default function Basket() {

    const products = JSON.parse(localStorage.getItem("products")) || [];
    const totalprice = JSON.parse(localStorage.getItem("totalprice")) || [];
    const [totalPrice, settotalPrice] = useState("0")
    const handleClick = (e) => {
        const id = e.currentTarget.id
        // // function removeProduct(id) {
        // remove product from cart (and from local storage)

        // retrieve list of products from LS
        const lsContent = getLSContent();

        // get the index of the product item to remove
        // inside the local storage content array
        let productIndex;
        lsContent.forEach(function (product, i) {
            if (product.id === id) {
                productIndex = i;
            }
        });

        // modify the items in local storage array
        // to remove the selected product item

        lsContent.splice(productIndex, 1);
        // update local storage content
        setLSContent(lsContent);
        navigate('/basket')

        console.log(lsContent)
    }
    const clearCart = (e) => {
        // clear all products from cart (and local storage)

        // retrieve list of products from LS
        const lsContent = getLSContent();
        // empty array in local storage
        lsContent.splice(0, lsContent.length);
        // update local storage
        setLSContent(lsContent);
        // display cart content again
        navigate('/basket')
    }

    const checkOut = (e) => {
        navigate('/Checkout')
    }
    const navigate = useNavigate()
    // settotalPrice(totalprice)
    return (
        <>
            <h1 className="text-center">Basket</h1>
            <div className="header__cart">
                <ul>
                    <li className="header__submenu" id="submenu">
                        <div id="shopping-cart" className="shopping-cart-container">
                            <table className="table table-striped table-hover" >
                                <thead>
                                    <tr>
                                        <th scope="row">Image</th>
                                        <th scope="row">Name</th>
                                        <th scope="row">Qty</th>
                                        <th scope="row">Price for each</th>
                                        <th scope="row">Total</th>
                                        <th scope="row">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product) => (

                                            <tr key={Math.random()} style={{ height: "50px" }}>
                                                <td><img className="cart-image" src={product.image} style={{ height: "50px" }} alt="phone" /></td>
                                                <td> {product.name}</td>
                                                <td>{product.qty}</td>
                                                <td>${product.price}</td>
                                                <td>${(product.price) * (product.qty)}</td>
                                                <td><button onClick={handleClick} className="btn btn-primary remove" data-id={product.id} id={product.id}>X</button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
                <div className="conteiner" style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "10px" }}>
                    <p className="total-container" id="total-price">${JSON.parse(localStorage.getItem("totalprice"))}</p>
                    <button onClick={clearCart} className="btn btn-primary" id={"clearcart"} style={{ margin: "10px" }}>Clear Cart</button>
                    <button onClick={checkOut} className="btn btn-primary" id={"btncheckout"} style={{ margin: "10px" }}>Checkout</button>

                </div>
            </div >
        </>
    )
}
