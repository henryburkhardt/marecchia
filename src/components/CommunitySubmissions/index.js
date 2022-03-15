import React, { useState, useEffect } from "react";
import blogPost from "../../data/guest.json";
import { NavLink } from "react-router-dom";

const CommunitySubmissions = (props) => {
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
            <NavLink key={post.id} to={`/post/${post.id}`}>
              <img
                src={post.blogImage}
                style={{ width: "100%", height: "60.667%", objectFit: "cover" }}
              />

              <p className="lead2">
                {" "}
                <div className="post-author2">
                  <span className={post.blogCategory}>{post.blogCategory}</span>
                  {post.author}
                </div>
                <div className="post-title2">{post.blogTitle}</div>{" "}
              </p>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default CommunitySubmissions;
