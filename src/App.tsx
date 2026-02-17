import type React from "react";
import { useRef } from "react";

export default function App() {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    console.log(inputRef.current?.value);

  }

  return (
    <div>


      <form onSubmit={handleSubmit}>

        <input
          ref={inputRef}
          name='username'
          type="text"
          placeholder="username"
        />


        <button type="submit">Click TO FOcus</button>
      </form>



    </div>
  )
}
