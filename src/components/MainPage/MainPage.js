import React, { useState } from "react";
import "./MainPage.css";
import OtherUsers from "../OtherUsers/OtherUsers";
import Posts from "../Posts/Posts";

function MainPage({ currentUser }) {
  // states
  const [createPostTrigger, setCreatePostTrigger] = useState(false);

  const postCreatorHandler = () => {
    console.log("Creates Post");
    // setCreatePostTrigger(true);
  };

  const cancelPostCreator = () => {
    console.log("Cancels Create Post");
    // setCreatePostTrigger(false);
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
          </div>
          <div className="post-creator">
            {/* should have popup similar to other app to make posts */}
            {/* should be conditonal button that rerenders on click */}
            <button
              onClick={() => {
                postCreatorHandler();
              }}
            >
              Create New Post
            </button>
          </div>
        </div>
      </div>
      <div className="user-posts-container">
        {/* should have all posts from newest at top to oldest */}
        {/* should have window extend when someone wants to comment */}
        <Posts />
      </div>
      <div className="other-users-container">
        {/* should have all other users */}
        <OtherUsers />
      </div>
    </div>
  );
}

export default MainPage;
