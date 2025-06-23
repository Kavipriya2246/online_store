import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        if (cartItems.length === 0) {
            alert("Cart is empty!");
            return;
        }

        clearCart(); // Clear cart after checkout
        navigate("/confirmation");
    };

    return (
        <div>
            <h2>Checkout</h2>
            {cartItems.length === 0 ? (
                <p>No items to checkout.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - ₹{item.price}
                            </li>
                        ))}
                    </ul>
                    <button onClick={handlePlaceOrder}>Place Order</button>
                </>
            )}
        </div>
    );
};

export default Checkout;
