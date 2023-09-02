import React from 'react'

export default function Basketmodal() {
    return (
        <>
            <div class="header__cart">
                <ul>
                    <li class="header__submenu" id="submenu">
                        <button class="header__cart-btn" id="toggle-cart-btn">Cart</button>
                        <div id="shopping-cart" class="shopping-cart-container">
                            <table id="cart-content">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                            <p class="total-container" id="total-price"></p>
                            <a href="#" id="checkout-btn" class="cart-btn">Checkout</a>
                            <a href="#" id="clear-cart" class="cart-btn">Clear Cart</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
