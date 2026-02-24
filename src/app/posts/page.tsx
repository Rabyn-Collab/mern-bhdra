import { auth } from "@clerk/nextjs/server";
import axios from "axios"

export default async function Posts() {

  const { isAuthenticated, getToken } = await auth();


  const response = await axios.get('http://localhost:3000/api/posts', {
    headers: {
      Authorization: await getToken()
    }
  });

  console.log(response.data);


  return (
    <div>Posts</div>
  )
}
