import React, { useState } from "react";
import "./Posts.css";

function Posts({ createdPostsContainer }) {
  // states
  const [postLikes, setPostLikes] = useState(0);
  const [postComments, setPostComments] = useState([]);

  if (createdPostsContainer.length === 0) {
    return (
      <>
        <div className="empty-posts-array-message">
          No posts have been created. Be the first!
        </div>
      </>
    );
  }

  const likeButtonHandler = () => {
    console.log("you liked this comment");
    setPostLikes((prevState) => prevState + 1);
    console.log(postLikes);
  };

  const commentButtonHandler = () => {
    console.log("you liked this comment");
    let temp = "this is a temp comment";
    setPostComments((prevState) => [...prevState, temp]);
    console.log(postComments);
  };

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
            {(postLikes > 0 || postComments.length > 0) && (
              <div className="interaction-totals">
                {/* should be uniquely based off post */}
                {/* should only show when a comment or like even exists for the respective post */}
                <p>
                  {postLikes} {postLikes === 1 ? "Like" : "Likes"}
                </p>
                <p>
                  {postComments.length}{" "}
                  {postComments.length > 1 ? "Comments" : "Comment"}
                </p>
              </div>
            )}
            <div className="interaction-buttons">
              <button
                onClick={() => {
                  likeButtonHandler();
                }}
              >
                Like
              </button>
              <div className="vertical-divider-line" />
              <button
                onClick={() => {
                  commentButtonHandler();
                }}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;
