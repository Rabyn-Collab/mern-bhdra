


//react lifecycle  mount, unmount update

import { useState } from "react";
import { Button } from "../../components/ui/button";
import Some from "./Some";

export default function Home() {

  const [show, setShow] = useState(true);






  return (
    <div className="p-5 space-y-5">



      {/* {show && <Some />} */}
      <Button onClick={() => setShow(!show)}>Toggle</Button>






    </div>
  )
}











// //suspense transition useActionState
// import { Input } from "../../components/ui/input";
// import { Button } from "../../components/ui/button";
// import { Spinner } from "../../components/ui/spinner";
// import { Formik } from "formik";
// import { useTransition } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";





// export default function Home() {
//   const [isPending, startTransition] = useTransition();



//   return (
//     <div className="p-5">

//       <Formik
//         initialValues={{
//           title: ''
//         }}
//         onSubmit={(val) => {
//           startTransition(async () => {
//             try {
//               await axios.post('https://6943678a69b12460f31474d4.mockapi.io/news', {
//                 title: val.title
//               });
//               toast.success('Success');
//             } catch (err) {
//               toast.error(err.message)
//             }
//           });

//         }}

//       >
//         {({ handleChange, values, errors, touched, handleSubmit }) => (
//           <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
//             <Input
//               name='title'
//               type="text"
//               onChange={handleChange}
//               value={values.title}
//               placeholder="Title"
//             />


//             <Button
//               disabled={isPending}
//               type="submit">
//               {isPending && <Spinner />}
//               Submit</Button>

//           </form>

//         )}
//       </Formik>












//     </div>
//   )
// }



//suspense transition useActionState

// import { useActionState } from "react";
// import { Input } from "../../components/ui/input";
// import { Button } from "../../components/ui/button";
// import axios from "axios";
// import { Spinner } from "../../components/ui/spinner";
// import toast from "react-hot-toast";



// const postData = async (prevState, formData) => {
//   try {
//     if (formData.get('title') === '') {
//       return 'please provide title';
//     }
//     await axios.post('https://6943678a69b12460f31474d4.mockapi.io/news', {
//       title: formData.get('title')
//     });

//     toast.success('Success!');
//   } catch (err) {
//     toast.error(err.message);


//   }

// }

// export default function Home() {

//   const [error, submitAction, isPending] = useActionState(postData, null);

//   return (
//     <div className="p-5">


//       <form action={submitAction} className="max-w-xl space-y-4">
//         <Input
//           name='title'
//           type="text"
//           placeholder="Title"

//         />
//         {error && <p className="text-red-500">{error}</p>}

//         <Button type="submit">
//           {isPending && <Spinner />}
//           Submit</Button>

//       </form>









//     </div>
//   )
// }