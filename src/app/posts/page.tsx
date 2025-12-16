import { Post } from "@/models/model";
import axios from "axios";

export default async function PostsPage() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

  const posts = response.data;

  return (
    <div>


      {posts.map((post: Post) => {
        return <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      })}




    </div>
  )
}
