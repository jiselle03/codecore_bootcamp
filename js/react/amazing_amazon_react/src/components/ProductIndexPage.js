import React, { Component } from "react";

import productData from "../productData";

export class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [...productData]
    };
  };

  render() {
    return (
      <main>
        <h2>Products</h2>
        <ul>
          {data.map(product => (
            <li key={product.id}>
              <a href={`/products/${product.id}`}>{product.title}</a><br />
              {product.description}<br />
              ${product.price}
            </li>
          ))}
        </ul>
      </main>
    );
  };
};
