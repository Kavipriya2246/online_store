import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(LoginContext);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        if (!isLoggedIn) {
            alert("Please login first.");
            navigate("/login");
        } else {
            addToCart(product);
            alert(`${product.name} added to cart!`);
        }
    };

    return (
        <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", width: "200px" }}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => navigate(`/product/${product.id}`)}>View</button>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
