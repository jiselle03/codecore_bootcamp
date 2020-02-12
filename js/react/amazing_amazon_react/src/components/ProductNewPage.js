import React, { useState } from 'react';

import { Product } from "../api/product";
import { ProductForm } from "./ProductForm";

export const ProductNewPage = props => {
    const [errors, setErrors] = useState([]);

    const createProduct = event => {
        event.preventDefault();
        const { currentTarget } = event;
        const fd = new FormData(currentTarget);

        const newProduct = {
            title: fd.get("title"),
            description: fd.get("description"),
            price: fd.get("price")
        };

        Product.create(newProduct).then(data => {
            if (!data.errors) {
                props.history.push(`/products/${data.id}`);
            };
        });
        
        currentTarget.reset();
    };

    return (
        <ProductForm 
            errors={errors}
            onCreateProduct={createProduct}
            buttonMessage="Create Product"
        />
    );
};
