"use client";

import useLatestBlogs from "./useLatestBlogs";

export default function usePopularBlogs() {
  const { posts, loading, error } = useLatestBlogs();
  const shuffledPosts = posts.length
    ? [...posts].sort(() => 0.5 - Math.random()).slice(0, 6)
    : [];

  return { posts: shuffledPosts, loading, error };
}
