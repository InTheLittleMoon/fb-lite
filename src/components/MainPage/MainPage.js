import React, { useState } from "react";
import "./MainPage.css";

//default axios
import axiosInstance from "../../axiosInstance";

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
    // handles empty posts
    if (newPostContent === "") {
      console.log(currentUser);
      return;
    }

    let newPost = {
      creator: currentUser._id,
      content: newPostContent,
    };

    axiosInstance
      .post("/createPost", newPost)
      .then((response) => {
        if (response.data.success) {
          setCreatedPostsContainer([...createdPostsContainer, newPost]);
          setFadeOutAnimation(true);
          setTextInputValue("");
        } else {
          console.log("Failed to create post");
        }
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <div className="main-container">
      <div className="user-container">
        <div className="user-info-container">
          <div className="user-details">
            <h1>username</h1>
            <h3>
              {createdPostsContainer.length}{" "}
              {createdPostsContainer.length > 1 ? "posts" : "post"}
            </h3>
            {/* should be conditional based on username that matches posts */}
            <h3>Your posts: xxx</h3>
          </div>
          <div className="post-creator">
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
        {createPostTrigger && (
          <div
            className={`post-creator-block ${
              fadeOutAnimation ? "fade-out" : "fade-in-slide-down"
            }`}
            onAnimationEnd={() => {
              if (fadeOutAnimation) {
                setCreatePostTrigger(false);
                setFadeOutAnimation(false);
                setTextInputValue("");
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
        {/* should have window extend when someone wants to comment */}
        <Posts
          createdPostsContainer={createdPostsContainer}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
}

export default MainPage;
