import React from "react";

import { ReviewDetails } from "./ReviewDetails";

export const ReviewList = props => {
  return (
    <>
      <h2 className="ui horizontal divider header">Reviews</h2>
      <ul className="ui list">
        {props.reviews.map(review => (
          <ReviewDetails key={review.id} {...review} />
        ))}
      </ul>
    </>
  );
};
