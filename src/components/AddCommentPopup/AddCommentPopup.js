import React from "react";
import "./AddCommentPopup.css";

// images
import deleteIcon from "../../assets/images/delete-button.png";

function AddCommentPopup({
  setMakeCommentTrigger,
  addCommentData,
  setAddCommentData,
  setPostComments,
}) {
  const addCommentToArrayHandler = () => {
    let temp = addCommentData;
    setPostComments((prevState) => [...prevState, temp]);
    setAddCommentData("");
    setMakeCommentTrigger(false);
  };

  const addCommentTextAreaHandler = (event) => {
    setAddCommentData(event.target.value);
  };

  const cancelCreateCommentHandler = () => {
    console.log("close this comment");
    setAddCommentData("");
    setMakeCommentTrigger(false);
  };

  return (
    <div className="addCommentPopup">
      <div className="addCommentPopup-inner">
        <textarea
          value={addCommentData}
          onChange={(event) => {
            addCommentTextAreaHandler(event);
          }}
          placeholder="What would you like to say?"
        ></textarea>
        <button
          onClick={() => {
            addCommentToArrayHandler();
          }}
        >
          Add Comment
        </button>
        <button
          className="cancelCommentButton"
          onClick={() => {
            cancelCreateCommentHandler();
          }}
        >
          <img alt="x" src={deleteIcon} />
        </button>
      </div>
    </div>
  );
}

export default AddCommentPopup;
