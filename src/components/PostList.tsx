'use client';

import { Post } from "@/models/post";
import { db } from "@/utils/firebaseFirestore";
import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import DeletePost from "./DeletePost";
import { Button } from "./ui/button";
import Link from "next/link";

export default function PostList() {

  const [posts, setPosts] = useState<Post[]>([]);



  useEffect(() => {

    const subs = onSnapshot(collection(db, 'posts'), (snapshot) => {

      const posts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }) as Post[];
      setPosts(posts);

    });

  }, []);







  return (
    <div className="p-5">

      {posts.map((post) => (
        <div key={post.id} className="mb-4">
          <img src={post.image} alt="" />
          <h1>{post.title}</h1>
          <p>{post.detail}</p>
          <div className="flex gap-5 mt-4">
            <Link href={`/posts/edit/${post.id}`}>
              <Button className="bg-green-400">Edit</Button>
            </Link>

            <DeletePost id={post.id} />

          </div>

          <hr />
        </div>
      ))}




    </div>
  )
}
