import React, { useState } from "react";
import "./MainPage.css";

//components
import Posts from "../Posts/Posts";

function MainPage({ currentUser }) {
  // states
  const [createPostTrigger, setCreatePostTrigger] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const [createdPostsContainer, setCreatedPostsContainer] = useState([]);

  // animation state
  const [fadeOutAnimation, setFadeOutAnimation] = useState(false);

  const postCreatorHandler = () => {
    setCreatePostTrigger(true);
  };

  const cancelPostCreatorHandler = () => {
    setFadeOutAnimation(true);
  };

  const postTextInputHandler = (event) => {
    setTextInputValue(event.target.value);
  };

  const createNewPost = (newPostContent) => {
    console.log(newPostContent);
    setFadeOutAnimation(true);
    setTextInputValue("");
  };

  return (
    <div className="main-container">
      <div className="user-container">
        <div className="user-info-container">
          <div className="user-details">
            {/* should have user name and posts total */}
            <h1>username</h1>
            {/* make conditional on amount of posts */}
            <h3>x posts</h3>
            <h3>Your posts: xxx</h3>
          </div>
          <div className="post-creator">
            {/* should be conditonal button that rerenders on click */}
            {!createPostTrigger && (
              <button
                onClick={() => {
                  postCreatorHandler();
                }}
              >
                Create New Post
              </button>
            )}
            {createPostTrigger && (
              <button
                onClick={() => {
                  cancelPostCreatorHandler();
                }}
              >
                Cancel Create Post
              </button>
            )}
          </div>
        </div>
        {/* conditionally based on button above */}
        {createPostTrigger && (
          <div
            className={`post-creator-block ${
              fadeOutAnimation ? "fade-out" : "fade-in-slide-down"
            }`}
            onAnimationEnd={() => {
              if (fadeOutAnimation) {
                setCreatePostTrigger(false);
                setFadeOutAnimation(false);
              }
            }}
          >
            <textarea
              placeholder="What's on your mind?"
              value={textInputValue}
              onChange={(event) => {
                postTextInputHandler(event);
              }}
            />
            <button
              onClick={() => {
                createNewPost(textInputValue);
              }}
            >
              Post
            </button>
          </div>
        )}
      </div>
      <div className="user-posts-container">
        {/* should have all posts from newest at top to oldest */}
        {/* should have window extend when someone wants to comment */}
        <Posts createdPostsContainer={createdPostsContainer} />
      </div>
    </div>
  );
}

export default MainPage;
