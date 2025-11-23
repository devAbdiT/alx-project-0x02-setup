import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { ApiPost } from "@/interfaces";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts from JSONPlaceholder API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data: ApiPost[] = await response.json();
        setPosts(data.slice(0, 12)); // Limit to 12 posts for better performance
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Refresh posts function
  const refreshPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data: ApiPost[] = await response.json();
      setPosts(data.slice(0, 12));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="app">
        <Header />
        <div className="posts-page">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading posts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <Header />
        <div className="posts-page">
          <div className="error-container">
            <h2>Error Loading Posts</h2>
            <p>{error}</p>
            <button onClick={refreshPosts} className="retry-button">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <div className="posts-page">
        <div className="page-header">
          <div className="header-content">
            <div>
              <h1>All Posts</h1>
              <p>Discover the latest posts from our community</p>
            </div>
            <button onClick={refreshPosts} className="refresh-button">
              Refresh Posts
            </button>
          </div>
          <div className="posts-stats">
            <span>Showing {posts.length} posts</span>
          </div>
        </div>

        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
              className={`post-card-${post.userId % 6}`} // Different colors for different users
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
