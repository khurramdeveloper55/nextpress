"use client";

import { useParams } from "next/navigation";
import CreatePost from "../../page";

export default function EditPostPage() {
  const { slug } = useParams();

  return <CreatePost slug={slug} />;
}
