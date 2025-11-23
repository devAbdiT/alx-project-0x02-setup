// Comment;
import React from "react";
import { type CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, content, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
