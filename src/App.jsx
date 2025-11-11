import StateCard from "./components/StateCard";

// const greet = (personName) => {
//   console.log(`hello jee ${personName}`);
// }

// greet('ram');
// greet('shyam');

const numbers = [11, 22, 33, 44, 55];

export default function App() {

  return (
    <div className="p-5 ">

      {numbers.map((n, i) => {
        return <h1 key={i}>hello jee</h1>
      })}

      {/* <StateCard
        location={'Accra'}
        title={'4 Bedrrom Double Storey Townhouse'}
        img={'https://images.unsplash.com/photo-1761839257349-037aea1d94de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'} />

      <StateCard

        img={'https://images.unsplash.com/photo-1761839257864-c6ccab7238de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'}
        title={'3 Bedrrom Double Storey Townhouse'}
        location={'New Block'}
      /> */}






    </div>
  )
}

