import React from "react";
import './CartItem.css';

const CartItem = ({name, img, price, quantity}) => (
    <div className='CartItem'>
        <h4 className='CartItem-title'>{name}</h4>
        <img className='CartItem-img' src={img} width="200" alt=''/>
        <ul>
            <li style={{color: 'magenta', backgroundColor:'green'}}>Price: ${price}</li>
            <li>Quantity: {quantity}</li>
            <li>Subtotal: ${price * quantity}</li>
        </ul>
    </div>
)

export default CartItem;
