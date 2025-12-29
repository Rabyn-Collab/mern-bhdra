import { useEffect } from "react"

export default function Some() {


  useEffect(() => {
    const evenListener = () => {
      console.log('hello jee');
    }
    window.addEventListener('keypress', evenListener);

    return () => {
      window.removeEventListener('keypress', evenListener);
    }

  }, []);

  return (
    <div>


      <h1>Hello jee</h1>
      <p>Im SOme</p>




    </div>
  )
}
