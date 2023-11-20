import React, { useEffect, useState } from "react";
import "./MainPage.css";

//default axios
import axiosInstance from "../../axiosInstance";

//components
import Posts from "../Posts/Posts";
import CommentThread from "../CommentThread/CommentThread";
import AddCommentPopup from "../AddCommentPopup/AddCommentPopup";

function MainPage({ currentUser }) {
  // states
  const [createPostTrigger, setCreatePostTrigger] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const [createdPostsContainer, setCreatedPostsContainer] = useState([]);
  const [makeCommentTrigger, setMakeCommentTrigger] = useState(false);
  const [commentThreadTrigger, setCommentThreadTrigger] = useState(false);
  const [addCommentData, setAddCommentData] = useState("");
  const [postComments, setPostComments] = useState([]);

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
          setCreatedPostsContainer([
            ...createdPostsContainer,
            response.data.post,
          ]);
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

  // deals with getting list of posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get("/posts");
        if (response.data.success) {
          console.log(response.data);
          setCreatedPostsContainer(response.data.posts);
        } else {
          console.log("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

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
      {/* should show thread once trigger activated */}
      {commentThreadTrigger && (
        <CommentThread
          postComments={postComments}
          setPostComments={setPostComments}
          setCommentThreadTrigger={setCommentThreadTrigger}
        />
      )}
      <div className="main-container">
        <div className="user-container">
          <div className="user-info-container">
            <div className="user-details">
              <h1>{currentUser.username}</h1>
              <h3>
                {createdPostsContainer.length}{" "}
                {createdPostsContainer.length === 1 ? "post" : "posts"}
              </h3>
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
            setMakeCommentTrigger={setMakeCommentTrigger}
            setCommentThreadTrigger={setCommentThreadTrigger}
            postComments={postComments}
          />
        </div>
      </div>
    </>
  );
}

export default MainPage;
