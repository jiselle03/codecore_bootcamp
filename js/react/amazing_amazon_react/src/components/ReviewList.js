import React from "react";

import { ReviewDetails } from "./ReviewDetails";

export const ReviewList = props => {
  return (
    <ul>
      {props.reviews.map(review => (
        <ReviewDetails
          key={review.id}
          body={review.body}
          rating={review.rating}
          author={review.author}
          created_at={new Date(review.created_at)}
        />
      ))}
    </ul>
  );
};
