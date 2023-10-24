import React from "react";
import "./Posts.css";

function Posts({ createdPostsContainer }) {
  if (createdPostsContainer.length === 0) {
    return (
      <>
        <div className="empty-posts-array-message">
          No posts have been created. Be the first!
        </div>
      </>
    );
  }

  return (
    <>
      {createdPostsContainer.map((post, index) => (
        <div key={index} className="post">
          <div className="post-creator-data">
            {/* Populate post creator data here */}
            {/* {post.creator} */}
          </div>
          <div className="post-content-data">
            {/* Populate post content data here */}
            {/* {post.content} */}
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;
