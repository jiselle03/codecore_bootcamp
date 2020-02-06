import React, { Component } from 'react';
import { Product } from "../api/product";

export class ProductNewPage extends Component {
    createQuestion = event => {
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
                this.props.history.push(`/products/${data.id}`);
            };
        });
        
        currentTarget.reset();
    };

    render() {
        return (
            <form 
                className="NewProductForm ui form" 
                onSubmit={event => this.createProduct(event)}
            >
                <div className="field">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div className="field">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" />
                </div>
                <div className="field">
                    <label htmlFor="price">Price</label>
                    <input type="number" min="0" step="0.01" name="price" id="price" />
                </div>
                <button className="ui orange button" type="submit">
                    Add Product
                </button>
            </form>
        );
    };
};
