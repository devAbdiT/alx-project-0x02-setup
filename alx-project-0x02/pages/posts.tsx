import React, { useState } from "react";
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { ApiPost } from "@/interfaces";

interface PostsPageProps {
  posts: ApiPost[];
  error?: string;
}

const PostsPage: NextPage<PostsPageProps> = ({ posts, error }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter posts based on search term
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return (
      <>
        <Head>
          <title>Posts - MyApp</title>
          <meta name="description" content="Browse all posts" />
        </Head>
        <Header />
        <div className="min-h-screen bg-gray-50 pt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-2">
                Error Loading Posts
              </h2>
              <p className="text-gray-600 mb-6">{error}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Posts - MyApp</title>
        <meta
          name="description"
          content="Browse all posts from our community"
        />
      </Head>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  All Posts
                </h1>
                <p className="text-gray-600">
                  Discover the latest posts from our community
                </p>
              </div>
              <div className="text-sm text-gray-500">
                {posts.length} posts total
              </div>
            </div>

            {/* Search */}
            <div className="max-w-md">
              <input
                type="text"
                placeholder="Search posts by title or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="mt-2 text-sm text-gray-500">
                Showing {filteredPosts.length} of {posts.length} posts
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.body}
                userId={post.userId}
                className={`border-l-4 ${
                  post.userId % 6 === 0
                    ? "border-l-blue-500"
                    : post.userId % 6 === 1
                    ? "border-l-green-500"
                    : post.userId % 6 === 2
                    ? "border-l-yellow-500"
                    : post.userId % 6 === 3
                    ? "border-l-red-500"
                    : post.userId % 6 === 4
                    ? "border-l-purple-500"
                    : "border-l-orange-500"
                }`}
              />
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No posts found
              </h3>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// This function runs at build time on the server
export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts: ApiPost[] = await response.json();

    return {
      props: {
        posts: posts.slice(0, 12), // Limit to 12 posts for better performance
      },
      // Re-generate the page at most once every hour
      revalidate: 3600, // 1 hour in seconds
    };
  } catch (error) {
    return {
      props: {
        posts: [],
        error:
          error instanceof Error
            ? error.message
            : "An error occurred while fetching posts",
      },
    };
  }
};

export default PostsPage;
