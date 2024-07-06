//crate array of person objects
var people = [
    { name: "James lee", age: 30 },
    { name: "Robert Trujillo", age: 50 },
    { name: "Kirk Hammett", age: 25 },
];
//Function to filter people who are at least 30 years old
function filterAdult(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
//using function and logging the resutl
var adults = filterAdult(people);
console.log(adults);
