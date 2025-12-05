import { Button } from "../../components/ui/button";

function ChildComponent({ func }) {
  console.log('child render');
  return (
    <div>

      <h1>Hello Im child</h1>
      <Button onClick={func}>Click</Button>
    </div>
  )
}


export default ChildComponent

