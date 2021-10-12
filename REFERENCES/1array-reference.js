const F1Drivers = ['Robert Kubica', 'Lewis Hamilton', 'Max Verstappen'];

let F1DriversCopy = F1Drivers;

console.log("Before change");
console.log(F1Drivers);
console.log(F1DriversCopy);


F1DriversCopy.pop();

console.log("After change");
console.log(F1Drivers);
console.log(F1DriversCopy);


//JSON copy
F1DriversCopy = JSON.parse(JSON.stringify(F1Drivers));


//Spread
F1DriversCopy = [...F1Drivers];

