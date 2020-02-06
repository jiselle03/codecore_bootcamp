import React from "react";

export const ReviewDetails = props => {
  const { id, rating, body, created_at, author = {} } = props;
  const { full_name } = author;
  return (
    <div className="ui segment list" style={{margin: "1em"}}>
      <p style={{padding: "2em"}}>
        {body} <br />
        {rating} <br />
        <small>
        Added by {full_name} on {created_at.toLocaleString()}
        </small>
        <button
          class="ui small right floated red button"
          onClick={() => props.onDeleteClick(id)}>Delete</button>
      </p>
    </div>
  );
};
