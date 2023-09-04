import React, { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from API on component mount
    fetch("https://fnpmyh.sse.codesandbox.io/studentsfromdb", {
      method: "GET",
      credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data.posts);
      });
  }, []);

  return (
    <div>
      <h1>Recent Posts</h1>
      <ul>
        {posts.map((post) => (
          <PostItem post={post} />
        ))}
      </ul>
    </div>
  );
};

const PostItem = ({ post }) => {
  // Component rendering logic for individual post item
  return (
    <li>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </li>
  );
};

export default PostList;
