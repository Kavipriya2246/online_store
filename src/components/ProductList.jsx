import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const products = [
        { id: 1, name: "T-Shirt", price: 299 },
        { id: 2, name: "Sneakers", price: 1499 },
        { id: 3, name: "Jeans", price: 999 }
    ];

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
