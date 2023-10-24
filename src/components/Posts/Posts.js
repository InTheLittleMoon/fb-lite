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
            <h4>{post.creator}</h4>
            {/* date created? just timestamp and minimal date so no long form tracking needed */}
            {/* <h4>{post.creationDate}</h4> */}
          </div>
          <div className="horizontal-divider-line" />
          <div className="post-content-data">
            {/* Populate post content data here */}
            <p>{post.content}</p>
          </div>
          <div className="post-interactions-container">
            <div className="interaction-totals">
              {/* should be based off post alone */}
              <p>x likes</p>
              <p>x comments</p>
            </div>
            <div className="interaction-buttons">
              <button>Like</button>
              <div className="vertical-divider-line" />

              <button>Comment</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;
