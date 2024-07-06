//create and access array
let numbers: number[] = [10, 20, 30, 40, 50];

console.log(numbers[2]); //30

//using loop with array
let names: string[] = ["Robert", "Lars", "Kirk", "James"];

for (let name of names) {
  console.log(name);
}

//add and delete data in array(push, pop)
let fruits: string[] = ["Apple", "Banana"];
fruits.push("Cherry");
console.log("push:", fruits);

fruits.pop();
console.log("pop: ", fruits); //latest item in array will be remove


