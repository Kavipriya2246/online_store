import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Product Detail</h2>
            <p>Viewing product ID: {id}</p>
        </div>
    );
};

export default ProductDetail;
