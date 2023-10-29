import React, { useState } from "react";
import "./Posts.css";

// images
import deleteIcon from "../../assets/images/delete-button.png";

//components
import CommentThread from "../CommentThread/CommentThread";
import AddCommentPopup from "../AddCommentPopup/AddCommentPopup";

function Posts({ createdPostsContainer }) {
  // states
  const [makeCommentTrigger, setMakeCommentTrigger] = useState(false);
  const [addCommentData, setAddCommentData] = useState("");

  //should recieve from user login
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
    setMakeCommentTrigger(true);
    console.log(postComments);
  };

  const deletePostHandler = () => {
    console.log("Comment Deleted");
  };

  return (
    <>
      {/* shouold have comment maker popup when triggered */}
      {makeCommentTrigger && (
        <AddCommentPopup
          setMakeCommentTrigger={setMakeCommentTrigger}
          addCommentData={addCommentData}
          setAddCommentData={setAddCommentData}
          setPostComments={setPostComments}
        />
      )}
      {createdPostsContainer.map((post, index) => (
        <div key={index} className="post">
          <div className="post-creator-data">
            {/* Populate post creator data here */}
            <h4>{post.creator}</h4>
            {/* date created? just timestamp and minimal date so no long form tracking needed */}
            {/* <h4>{post.creationDate}</h4> */}
            <button
              className="deleteButton"
              onClick={() => {
                deletePostHandler();
              }}
            >
              <img alt="x" src={deleteIcon} />
            </button>
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
                <div className="totals-likes">
                  {postLikes > 0 && (
                    <p>
                      {postLikes} {postLikes === 1 ? "Like" : "Likes"}
                    </p>
                  )}
                </div>
                <div className="totals-comments">
                  {postComments.length > 0 && (
                    <p>
                      {postComments.length}{" "}
                      {postComments.length > 1 ? "Comments" : "Comment"}
                    </p>
                  )}
                </div>
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
