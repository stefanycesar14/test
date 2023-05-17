import React from "react";

export const Post = ({ post }) => {
  return (
    <div className="card col-12 col-xs-10 col-md-6 col-lg-4 col-xxl-3 m-3">
      <div className="card-body ">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
};
