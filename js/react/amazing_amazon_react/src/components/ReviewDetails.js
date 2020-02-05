import React from "react";

export const ReviewDetails = props => {
  return (
    <div>
      <p>
        {props.body} <br />
        {props.rating} <br />
        <small>
        Added by {props.author.full_name} on {props.created_at.toLocaleString()}
        </small>
      </p>
    </div>
  );
};
