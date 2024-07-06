interface Person {
  name: string;
  age: number;
}

//crate array of person objects
const people: Person[] = [
  { name: "James Hetfield", age: 30 },
  { name: "Robert Trujillo", age: 50 },
  { name: "Kirk Hammett", age: 25 },
];

//Function to filter people who are at least 30 years old
function filterAdult(persons: Person[]): Person[] {
  return persons.filter(person => person.age >= 30);
}

//using function and logging the resutl
const adults = filterAdult(people);
console.log(adults);
