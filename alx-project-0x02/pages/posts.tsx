import React from "react";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="posts-page">
        <div className="page-header">
          <h1>Posts Page</h1>
          <p>This is the posts page where you can view all your posts.</p>
        </div>

        <div className="posts-content">
          <div className="post-item">
            <h3>Welcome to Our Blog</h3>
            <p>This is a sample post showing how the posts page would look.</p>
            <span className="post-date">Posted on January 1, 2024</span>
          </div>

          <div className="post-item">
            <h3>Getting Started with React</h3>
            <p>
              Learn how to build amazing applications with React and TypeScript.
            </p>
            <span className="post-date">Posted on December 15, 2023</span>
          </div>

          <div className="post-item">
            <h3>Component Architecture</h3>
            <p>
              Best practices for building reusable and maintainable components.
            </p>
            <span className="post-date">Posted on December 1, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
