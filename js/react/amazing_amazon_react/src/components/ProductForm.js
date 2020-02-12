import React from 'react';

import { FormErrors } from "./FormErrors";

export const ProductForm = props => {
    let doAction;
    if (props.onUpdateProduct) {
        doAction = props.onUpdateProduct;
    } else {
        doAction = props.onCreateProduct;
    };

    let updateProduct = { title: "", body: "" }
    let productPlaceholder = { ...updateProduct };
    
    if (props.product) {
        updateProduct = {
            title: props.product.title,
            description: props.product.description,
            price: props.product.price
        };
    } else {
        productPlaceholder = {
            title: "Enter product title",
            description: "Enter product description",
            price: 0.00
        }
    };

    return (
        <form 
            className="ui form" 
            onSubmit={event => doAction(event)}
        >
            <div className="field">
                <label htmlFor="title">Title</label>
                <FormErrors errors={props.errors} forField="title" />
                <input 
                    type="text" 
                    name="title"
                    id="title" 
                    defaultValue={updateProduct.title} 
                    placeholder={productPlaceholder.title}
                />
            </div>
            <div className="field">
                <label htmlFor="description">Description</label>
                <FormErrors errors={props.errors} forField="description" />
                <textarea 
                    name="description" 
                    id="description" 
                    defaultValue={updateProduct.title} 
                    placeholder={productPlaceholder.description} 
                />
            </div>
            <div className="field">
                <label htmlFor="price">Price</label>
                <FormErrors errors={props.errors} forField="price" />
                <input 
                    type="number" 
                    min="0" 
                    step="0.01" 
                    name="price" 
                    id="price" 
                    defaultValue={updateProduct.price} 
                    placeholder={productPlaceholder.price} 
                />
            </div>
            <button className="ui orange button" type="submit">
                {props.buttonMessage}
            </button>
        </form>
    )
};
