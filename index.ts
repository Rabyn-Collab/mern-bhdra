




interface Person {
  readonly name: string;
  age?: number;
  func: () => string
}



const m: Person = {
  name: "s",
  func: () => 'hewllo'
}





const getSome = (a: Person) => {
  console.log(a.age, a.name);

}


getSome({ name: "s", age: 1, func: () => 'hewllo' });





