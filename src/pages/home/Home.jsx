import { memo, useCallback, useMemo, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import ChildComponent from "./ChildComponent";


export default function Home() {

  const [count, setCount] = useState(1);

  const func = () => {
    alert('hello');
  };



  return (
    <div className="max-w-sm">


      {/* 
      <Input placeholder="Search" /> */}

      <h1>{count}</h1>
      <Button onClick={() => setCount(count + 1)} >Increment</Button>
      <ChildComponent func={func} />

    </div>
  )
}



