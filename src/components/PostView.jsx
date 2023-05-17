import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Post } from "./Post";

export const PostView = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const { data } = useFetch(url);

  console.log({ data });
  return (
    <div className="row mx-auto justify-content-center">
      {data && data.map((d) => <Post post={d} />)}
    </div>
  );
};
