import React, { useState, useEffect } from "react";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Opinion
 **/
let opinions = [];
for (let i; i < blogPost.length; i++) {
  if (blogPost[i].blogCategory === "Opinion") {
    opinions.push(blogPost[i]);
  }
}

const Opinion = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, posts);

  return (
    <div className="row">
      {posts.map((post) => {
        return (
          <div className="col-md-3">
            <img
              src={post.blogImage}
              style={{ width: "100%", height: "60.667%", objectFit: "cover" }}
            />

            <p className="lead2">
              <NavLink key={post.id} to={`/post/${post.id}`}>
                {" "}
                <div className="post-author2">
                  <span className={post.blogCategory}>{post.blogCategory}</span>
                  {post.author}
                </div>
                <div className="post-title2">{post.blogTitle}</div>{" "}
              </NavLink>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Opinion;
