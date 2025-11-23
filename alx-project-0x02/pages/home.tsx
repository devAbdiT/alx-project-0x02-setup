import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData } from "@/interfaces";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([
    {
      title: "Feature One",
      content:
        "This is the first feature of our amazing application. It provides great value to our users.",
    },
    {
      title: "Getting Started",
      content:
        "Learn how to use our platform with our comprehensive documentation and tutorials.",
    },
  ]);

  const handleAddPost = (postData: PostData) => {
    setPosts((prevPosts) => [...prevPosts, postData]);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <Header />
      <div className="home-page">
        <div className="page-header">
          <h1>Welcome to Our Application</h1>
          <button className="add-post-button" onClick={openModal}>
            + Add New Post
          </button>
        </div>

        <div className="cards-container">
          {posts.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              content={post.content}
              className={`post-card post-card-${index % 4}`}
            />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleAddPost}
        />
      </div>
    </div>
  );
};

export default HomePage;
