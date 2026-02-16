


enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}
export default function App() {




  const someFunc = (gender: Gender) => {
    console.log(gender.toUpperCase());
  }

  someFunc(Gender.Female);



  return (
    <div>


      <h1>Hello Jee</h1>




    </div>
  )
}
