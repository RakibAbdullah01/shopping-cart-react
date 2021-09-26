import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}= props;
    const shippingCharge = 5;
    
    const itemReducer = (previous,product)=>previous+product.price;
    const item = cart.reduce(itemReducer,0);
    // for (const product of cart){
    //     item = item + product.price;
    // }
    let beforeTax = item+shippingCharge;
    let tax = beforeTax * 0.10;
    let total = beforeTax+tax;
    return (
        <div>
            <div className="order-summery">
                <h3>Order Summery</h3>
                <h5>Items ordered: {props.cart.length}</h5>
            </div>
            
            <br/>
            <p>Item:  ${item}</p>
            <p>Shipping & Handling:  ${shippingCharge}</p>
            <p>Total before tax:  ${beforeTax}</p>
            <p>Estimated Tax:  ${tax}</p>
            <h4>Order Total:  ${total}</h4>

        </div>
    );
};

export default Cart;