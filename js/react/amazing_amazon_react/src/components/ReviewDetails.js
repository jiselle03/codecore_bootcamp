import React from "react";

export const ReviewDetails = props => {
  return (
    <div className="ui segment list" style={{margin: "1em"}}>
      <p style={{padding: "2em"}}>
        {props.body} <br />
        {props.rating} <br />
        <small>
        Added by {props.author.full_name} on {props.created_at.toLocaleString()}
        </small>
        <button
          class="ui small right floated red button"
          onClick={() => props.onDeleteClick(props.id)}>Delete</button>
      </p>
    </div>
  );
};
