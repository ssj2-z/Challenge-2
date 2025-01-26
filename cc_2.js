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

//Task 4
let customers = [
    {
        name: "Michael Jordan",
        email: "MJordan@gmail.com",
        purchaseAmount: 23.00
    },
    {
        name: "Scottie Pitman",
        email: "PitmanS@gmail.com",
        purchaseAmount: 8.25
    },
    {
        name: "Michael Jackson",
        email: "MJ@gmail.com",
        purchaseAmount: 205.05
    }
];
let newCustomer = {
    name: "Taylor Parker",
    email: "TParker@gmail.com",
    purchaseAmount: 125.00
};
customers.push(newCustomer);
console.log(customers);

//Task 5
let order = {
    orderId: 13579,
    customerName: "Ric Flair",
    amount: 350.00
    calculateTax: function () {
        return this.amountt * .10;
    }
};
console.log("Order Details:");
console.log("Order ID:" order.orderId);
console.log("Customer Name:" order.customerName);
console.log("Order Amount:" order.amount);
console.log("Tax Amount:" order.calculateTax());