
// const persons = [
//   { id: 1, name: 'ram', age: 90 },
//   { id: 2, name: 'shyam', age: 70 },
// ];

// persons.forEach(({ id, name, age }) => {
//   console.log(id, name, age);
// })

export default function StateCard({ img, title, location }) {

  return (
    <div>
      <img className="h-[200px] rounded-xl" src={img} alt="" />
      <p className="bg-amber-50">{location}</p>
      <h1 className="text-xl font-black">{title}</h1>
      <hr />
    </div>
  )
}
