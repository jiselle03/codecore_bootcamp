import React, { Component } from "react";
import productData from "../productData";

export class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [...productData]
    };
  };

  deleteProduct(id) {
    this.setState(state => {
      return {
        products: state.products.filter(p => p.id !== id)
      };
    });
  };

  render() {
    return (
      <main>
        <h2 className="ui horizontal divider header">Products</h2>
        <ul className="ui list">
          {this.state.products.map(product => (
            <p 
              className="item"
              key={product.id}>
              <a className="ui header"
                href={`/products/${product.id}`}>{product.title}</a><br />
              {product.description}<br />
              ${product.price}
              <button
                className="ui small right floated red button"
                onClick={() => this.deleteProduct(product.id)}
              >Delete</button>
            </p>
          ))}
        </ul>
      </main>
    );
  };
};
