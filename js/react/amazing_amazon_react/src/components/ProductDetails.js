import React from "react";

export const ProductDetails = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.description} <br />
        {props.price} <br />
      </p>
      <small>
        Added by {props.seller.full_name} on {props.created_at.toLocaleString()}
      </small>
    </div>
  );
};
