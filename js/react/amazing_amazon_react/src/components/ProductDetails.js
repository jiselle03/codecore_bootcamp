import React from "react";

export const ProductDetails = props => {
  const { title, description, price, created_at } = props;
  const { seller } = props
  return (
    <div style={{padding:"0 3em"}}>
      <h2>{title}</h2>
      <p>
        {description} <br />
        {price} <br />
      </p>
      <small>
        Added by {seller.full_name} on {created_at.toLocaleString()}
      </small>
    </div>
  );
};
