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
    checkout
} from "../basket"
import { useEffect } from 'react'




const Tabledata = ({ img, title, id, newPrice }) => {

    // const handleClick = () => {

    //     console.log('btn clicked ', id, id, title, img, newPrice)

    //     saveProduct(id, title, img, newPrice)
    // }
    return (
        <>
            <tr>
                <td><img className="cart-image" src={{ img }} alt="phone" stayle={{ width: "120" }} /></td>
                <td>
                    {{ title }}
                </td>
                <td>{{ newPrice }}</td>
                {/* <td><button onClick={handleClick} className="btn btn-primary remove" data-id={{ id }} id={{ id }}>X</button></td> */}
            </tr>
        </>
    )
}

export default Tabledata;
