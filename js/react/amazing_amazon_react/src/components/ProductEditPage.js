import React, { Component } from 'react';
import { Product } from "../api/product";

export class ProductEditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    };
    
    updateProduct = event => {
        event.preventDefault();
        const { currentTarget } = event;
        const fd = new FormData(currentTarget);

        const updatedProduct = {
            title: fd.get("title"),
            description: fd.get("description"),
            price: fd.get("price")
        };

        Product.update(this.props.match.params.id, updatedProduct).then(data => {
            if (!data.errors) {
                this.props.history.push(`/products/${data.id}`);
            };
        });
        
        currentTarget.reset();
    };

    handleChange = event => {
        this.setState({
            product: {...this.state.product, [event.target.name]: event.target.value} 
        });
    };

    componentDidMount() {
        Product.one(this.props.match.params.id).then(product => {
            this.setState({ product, isLoading: false });
          });
    };

    render() {
        const { product } = this.state;

        return (
            <form 
                className="NewProductForm ui form" 
                onSubmit={event => this.updateProduct(event)}
            >
                <div className="field">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="title"
                        id="title" 
                        value={this.state.product.title} 
                        onChange={this.handleChange} />
                </div>
                <div className="field">
                    <label htmlFor="description">Description</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        value={this.state.product.description} 
                        onChange={this.handleChange} />
                </div>
                <div className="field">
                    <label htmlFor="price">Price</label>
                    <input 
                        type="number" 
                        min="0" 
                        step="0.01" 
                        name="price" 
                        id="price" value={this.state.product.price} 
                        onChange={this.handleChange} />
                </div>
                <button className="ui orange button" type="submit">
                    Update Product
                </button>
            </form>
        );
    };
};
