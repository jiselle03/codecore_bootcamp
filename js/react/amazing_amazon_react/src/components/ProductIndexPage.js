import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Product } from "../api/product";
import { Spinner } from "./Spinner";

export class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true
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
    Product.all().then(products => this.setState({ products: products, isLoading: false }));
  };

  render() {
    if(this.state.isLoading) {
      return(
        <Spinner message="Loading products..." />
      );
    };

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
            <h3 className="ui header"><Link to={`/products/${product.id}`} className="ui link" href="">
              {product.title}
            </Link></h3>
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
