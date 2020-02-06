import React, { Component } from "react";
import { Product } from "../api/product";

export class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  };

  deleteProduct(id) {
    this.setState(state => {
      return {
        products: state.products.filter(p => p.id !== id)
      };
    });
  };

  componentDidMount() {
    Product.all().then(products => this.setState({ products: products }));
  };

  render() {
    return (
      <main>
        <h2
          style={{margin:"1em"}} 
          className="ui horizontal divider header">Products</h2>
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
