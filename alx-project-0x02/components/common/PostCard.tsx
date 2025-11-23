import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({
  id,
  title,
  content,
  userId,
  className = "",
}) => {
  return (
    <div className={`post-card ${className}`}>
      <div className="post-card-header">
        <h3 className="post-title">{title}</h3>
        <div className="post-meta">
          <span className="post-id">Post #{id}</span>
          <span className="user-id">User #{userId}</span>
        </div>
      </div>

      <div className="post-content">
        <p>{content}</p>
      </div>

      <div className="post-footer">
        <button className="read-more-btn">Read More</button>
        <div className="post-actions">
          <button className="action-btn">Like</button>
          <button className="action-btn">Share</button>
          <button className="action-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
