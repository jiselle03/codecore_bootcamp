import React, { useState, useEffect } from "react";

import { User } from "../../api/user";

export const UserEditPage = props => {
  const [user, setUser] = useState({});
  const [fileUrl, setFileUrl] = useState();

  const previewAvatar = event => {
    const { currentTarget } = event;

    debugger;

    setFileUrl(URL.createObjectURL(fileUrl));
  };

  const updateUser = event => {
    event.preventDefault();
    const { currentTarget: formNode } = event;
    const fd = new FormData(formNode);

    User.update()
      .then(res => res.json())
      .then(() => {
        props.history.push("/");
        if (typeof props.onUpdateUser === "function") {
          props.onUpdateUser();
        }
      })
      .catch(err => {
        debugger;
      });
  };
  return (
    <>
      <h1 className="ui header">Edit User</h1>
      {props.currentUser && (
        <>
          <div className="ui card">
            <div className="image">
              <img src={`${props.currentUser.avatar.url || undefined}`} />
            </div>
            <div className="content">
              <a className="header">{props.currentUser.full_name}</a>
            </div>
          </div>
        </>
      )}
      <form onSubmit={updateUser}>
        <label>Add Avatar</label>
        <input type="file" name="avatar" />
        <button className="ui blue button" type="submit">
          Save Changes
        </button>
      </form>
    </>
  );
};
