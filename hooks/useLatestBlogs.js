"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function useLatestBlogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/posts?limit=8");

        setPosts(res.data.posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return { posts, loading, error };
}
