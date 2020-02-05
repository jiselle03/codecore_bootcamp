import React from "react";

export const ProductDetails = props => {
  return (
    <div style={{padding:"0 3em"}}>
      <h2>{props.title}</h2>
      <p>
        {props.description} <br />
        {props.price} <br />
      </p>
      <small>
        Added by {props.seller.full_name} on {props.created_at.toLocaleString()}
      </small>
      <button
          className="ui small right floated red button"
          onClick={() => this.deleteProduct()}>Delete</button>
    </div>
  );
};
