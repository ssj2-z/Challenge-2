// Task 1 
let products = ["knife", "fork", "spoon", "butterknife", "spork"];
products.push("plate");
products.pop();
console.log(products);

//Task 2 
let scores = [2, 4, 6, 8, 5];
let sum = 0;
for(let i = 0 < scores.length; i++) {
    sum += scores[i];
}
let size = scores.length;
result = sum / size; 
console.log("scores array", scores);
console.log("average: ", result); 

//Task 3 
let employee = {
    name: "Joey Diaz",
    age: 61,
    department: "Marketing",
    isActive: true
};
employee.department = "Sales";
employee.position = "Team Leader";
console.log("update employee records:" , employee);
