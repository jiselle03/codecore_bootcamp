import React from "react";

import data from "../productData";

export const ProductIndexPage = () => {
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
