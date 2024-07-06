//create and access array
var numbers = [10, 20, 30, 40, 50];
console.log(numbers[2]); //30
//using loop with array
var names = ["Robert", "Lars", "Kirk", "James"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
//add and delete data in array(push, pop)
var fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log("push", fruits);
fruits.pop();
console.log("pop: ", fruits);
