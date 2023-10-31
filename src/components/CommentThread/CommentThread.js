import React from "react";
import "./CommentThread.css";

function CommentThread({ postComments, setCommentThreadTrigger }) {
  const closeThreadHandler = () => {
    setCommentThreadTrigger(false);
  };

  return (
    <div className="commentThreadPopup">
      <div className="commentThreadPopup-inner">
        {postComments.map((comment, index) => {
          return (
            <div className="commentBlock">
              <div className="commentBlock-author">Gabriel</div>
              <div className="horizontal-divider-line"></div>
              <div key={index} className="commentBlock-data">
                <p>{comment.commentData}</p>
              </div>
            </div>
          );
        })}
        <div className="commentBlock-buttons">
          <button
            onClick={() => {
              console.log(postComments);
            }}
          >
            commentlog
          </button>
          <div className="vertical-divider-line" />
          <button
            onClick={() => {
              closeThreadHandler();
            }}
          >
            Close Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentThread;
