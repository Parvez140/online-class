import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);

    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const course = cart[i];
        total = total + course.price;
    }

    let discount = 0;
    if(cart.length >= 5){
        discount = 35;
    }
    else if(cart.length >= 3){
        discount = 15;
    }
    else if(cart.length == 2){
        discount = 10;
    }

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summery</h4>
            <h3>Items : {cart.length}</h3>
            <p><small>Discount : {discount} %</small></p>
            <p>Total Price : ${formatNumber(total)}</p>
            <button className="btn btn-danger" >Purchase Course</button>
        </div>
    );
};

export default Cart;