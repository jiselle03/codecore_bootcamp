import React, { useContext } from "react";

import { Star } from "./StarRating";
import { ProductShowContext } from "./ProductShowPage";

export const ReviewDetails = props => {
  const deleteReview = useContext(ProductShowContext);
  const stars = [1, 2, 3, 4, 5];
  const { id, rating, body, created_at, author = {} } = props;
  const { full_name } = author;
  return (
    <div className="ui segment list" style={{margin: "1em"}}>
      <p style={{padding: "2em"}}>
        {body} <br />
        {stars.map(star => 
        <Star style={{maxWidth: "1.5em", color: `${rating >= star ? "yellow" : "grey"}` }} />)}
        <small>
        Added by {full_name} on {created_at.toLocaleString()}
        </small>
        <button
          class="ui small right floated red button"
          onClick={() => deleteReview(id)}>Delete</button>
      </p>
    </div>
  );
};
