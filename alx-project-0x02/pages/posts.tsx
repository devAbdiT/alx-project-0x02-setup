import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { ApiPost } from "@/interfaces";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

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
        setPosts(data.slice(0, 20)); // Limit to 20 posts for better performance
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
      setPosts(data.slice(0, 20));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Filter posts based on search term
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

          <div className="search-container">
            <input
              type="text"
              placeholder="Search posts by title or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="posts-stats">
              <span>
                Showing {filteredPosts.length} of {posts.length} posts
              </span>
            </div>
          </div>
        </div>

        <div className="posts-grid">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
              className={`post-card-${post.userId % 6}`}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && searchTerm && (
          <div className="no-results">
            <h3>No posts found</h3>
            <p>Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsPage;
