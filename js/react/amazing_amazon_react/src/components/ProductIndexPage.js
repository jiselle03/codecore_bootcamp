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
        <h2 className="ui horizontal divider header">Products</h2>
        <ul className="ui list">
          {data.map(product => (
            <li 
              className="item"
              key={product.id}>
              <a className="ui header"
                href={`/products/${product.id}`}>{product.title}</a><br />
              {product.description}<br />
              ${product.price}
            </li>
          ))}
        </ul>
      </main>
    );
  };
};
