import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - ₹{item.price}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => navigate("/checkout")}>Go to Checkout</button>
                    <button onClick={clearCart}>Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default Cart;
