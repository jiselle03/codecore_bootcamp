import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Product } from "../api/product";
import { Spinner } from "./Spinner";

export const ProductIndexPage = () => {
  const [productIndex, setProductIndex] = useState({
    products: [],
    isLoading: true
  });

  useEffect(() => {
    Product.all().then(products => { 
      setProductIndex({ products, isLoading: false })
    });
  }, []);

  // deleteProduct = id => {
  //   Product.destroy(id).then(data => {
  //     Product.all().then(products => this.setState({ products: products, isLoading: false }));
  //   });
  // };

  if(productIndex.isLoading) {
    return(
      <Spinner message="Loading products..." />
    );
  };

  return (
    <main>
      <h2
        style={{margin:"1em"}} 
        className="ui horizontal divider header">Products</h2>
      <div className="ui list">
        {productIndex.products.map(product => (
          <div
            className="item"
            key={product.id}>
          <h3 className="ui header"><Link to={`/products/${product.id}`} className="ui link" href="">
            {product.title}
          </Link></h3>
            {product.description}<br />
            ${product.price}
            {/* <button
              className="ui small right floated red button"
              onClick={() => this.deleteProduct(product.id)}
            >Delete</button> */}
          </div>
        ))}
      </div>
    </main>
  );
};
