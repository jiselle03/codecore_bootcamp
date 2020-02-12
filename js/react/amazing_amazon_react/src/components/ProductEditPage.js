import React, { useState } from 'react';

import { Product } from "../api/product";
import { Spinner } from "../Spinner";
import { ProductForm } from "../ProductForm";

export const ProductEditPage = props => {
    const [errors, setErrors] = useState([]);
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    updateProduct = event => {
        event.preventDefault();
        const { currentTarget } = event;
        const fd = new FormData(currentTarget);

        const updatedProduct = {
            title: fd.get("title"),
            description: fd.get("description"),
            price: fd.get("price")
        };

        Product.update(props.match.params.id, updatedProduct).then(data => {
            if (!data.errors) {
                props.history.push(`/products/${data.id}`);
            } else {
                setErrors(data.errors);
            };
        });
    
    };

    useEffect(() => {
        Product.one(props.match.params.id).then(product => {
            setProduct(product);
            setIsLoading(false);
          });
    }, [props.match.params.id]);

    if (isLoading) {
        return <Spinner message="Loading form..."/>;
    }

    return (
        <ProductForm 
            errors={errors}
            onUpdateProduct={updateProduct}
            buttonMessage="Update Product"
            product={product}
        />
    );
};
