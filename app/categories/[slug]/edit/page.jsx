"use client";

import { useParams } from "next/navigation";
import CreateCategory from "../../page";

export default function EditPostPage() {
  const { slug } = useParams();

  return <CreateCategory slug={slug} />;
}
