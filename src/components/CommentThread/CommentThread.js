import React, { useState } from "react";
import "./CommentThread.css";

function CommentThread({
  postComments,
  setPostComments,
  setCommentThreadTrigger,
}) {
  //states
  const [inThreadCommentTrigger, setInThreadCommentTrigger] = useState(false);
  const [inThreadTextAreaValue, setTnThreadTextAreaValue] = useState("");

  const closeThreadHandler = () => {
    setCommentThreadTrigger(false);
  };

  const AddCommentFromThreadHandler = (action) => {
    if (action === "add") {
      setInThreadCommentTrigger(true);
    } else {
      setTnThreadTextAreaValue("");
      setInThreadCommentTrigger(false);
    }
  };

  const inThreadTextAreaHandler = (event) => {
    setTnThreadTextAreaValue(event.target.value);
  };

  const inThreadPostCommentHandler = () => {
    console.log(inThreadTextAreaValue);
    let temp = { commentData: inThreadTextAreaValue };
    setPostComments((prevState) => [...prevState, temp]);

    setTnThreadTextAreaValue("");
    setInThreadCommentTrigger(false);
  };

  return (
    <div className="commentThreadPopup">
      <div className="commentThreadPopup-inner">
        {inThreadCommentTrigger && (
          <div className="in-thread-comment-box">
            <textarea
              onChange={(event) => {
                inThreadTextAreaHandler(event);
              }}
              value={inThreadTextAreaValue}
            ></textarea>
            <button
              onClick={() => {
                inThreadPostCommentHandler();
              }}
            >
              Post New Comment
            </button>
          </div>
        )}
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
          {!inThreadCommentTrigger && (
            <button
              onClick={() => {
                AddCommentFromThreadHandler("add");
              }}
            >
              Add Comment
            </button>
          )}
          {inThreadCommentTrigger && (
            <button
              onClick={() => {
                AddCommentFromThreadHandler("cancel");
              }}
            >
              Cancel Comment
            </button>
          )}
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
