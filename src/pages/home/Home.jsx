import axios from "axios"
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";

export default function Home() {

  const [data, setData] = useState();
  const [load, setload] = useState(false);
  const [err, setErr] = useState();
  const [skip, setSkip] = useState(0);

  const getData = async () => {
    try {
      setload(true);
      const response = await axios.get('https://dummyjson.com/comments', {
        params: {
          limit: 10,
          skip: skip
        }
      });
      setload(false);

      setData(response.data.comments);
    } catch (err) {
      setload(false);
      setErr(err.message)

    }
  }
  useEffect(() => {
    getData();
  }, [skip]);



  if (load) return <h1>Loading.....</h1>
  if (err) return <h1 className="text-red-500">{err}</h1>

  return (
    <div>
      <h1>hello</h1>

      <Button onClick={() => setSkip(skip + 10)}>Skip </Button>

      {data && data.map((comment) => {
        return <div key={comment.id}>
          <h1>{comment.body}</h1>
        </div>
      })}





    </div>
  )
}
