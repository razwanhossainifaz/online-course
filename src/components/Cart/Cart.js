import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let totalAmount = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        totalAmount = totalAmount + parseInt(course.amount)
    }
    return (
        <div className = "cart-style">
            <h2 className = "cart-header-style">Order Summary</h2>
            <div className = "ml-5">
                <h1>Added course : {cart.length}</h1>
                <h3>Total amount : ${totalAmount}</h3>
            </div>
        </div>
    );
};

export default Cart;