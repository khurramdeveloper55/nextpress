"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useLogout() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const logout = async () => {
    try {
      setLoggingOut(true);
      const res = await axios.post("/api/logout");
      if (res.data.success) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoggingOut(false);
    }
  };

  return { logout, loggingOut };
}
