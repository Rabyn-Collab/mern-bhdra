'use client';

import { db } from "@/lib/firestore";
import { EmployeeInterface } from "@/models/employeeInterface";
import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import DeleteEmployee from "./DeleteEmployee";
import { Button } from "./ui/button";
import Link from "next/link";


export default function EmployeeList() {
  const [posts, setPosts] = useState<EmployeeInterface[]>([]);

  useEffect(() => {

    onSnapshot(collection(db, 'employees'), (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as EmployeeInterface[];
      setPosts(posts);
    });

  }, []);


  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.fullname}</h1>
          <p>{post.position}</p>
          <p>{post.age}</p>
          <div className="flex gap-5 mt-3">

            <Link
              href={`/form/edit/${post.id}`}
            >

              <Button variant={'outline'}>Update</Button>
            </Link>


            <DeleteEmployee id={post.id} />
          </div>

        </div>
      ))}

    </div>
  )
}
