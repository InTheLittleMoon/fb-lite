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
              <div className="commentBlock-author">Gabe</div>
              <div key={index} className="commentBlock-data">
                <p>{comment.commentData}</p>
              </div>
            </div>
          );
        })}
        <button
          onClick={() => {
            console.log(postComments);
          }}
        >
          commentlog
        </button>
        <button
          onClick={() => {
            closeThreadHandler();
          }}
        >
          Close Me
        </button>
      </div>
    </div>
  );
}

export default CommentThread;
