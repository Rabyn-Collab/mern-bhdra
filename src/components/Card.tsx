
interface CardProps {
  age: number,
  name: string
}


export default function Card({ name, age }: CardProps) {




  return (
    <div>

      <h1>{name}</h1>
      <p>{age}</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sunt facilis tenetur vel dolorem? Molestiae voluptatibus quaerat numquam, reiciendis provident, ratione aspernatur harum nesciunt illo, officiis tempore cupiditate soluta distinctio.</p>





    </div>
  )
}
