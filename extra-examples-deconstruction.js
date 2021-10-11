


const cars = ['Audi', 'BMW', 'Fiat', 'Mercedes'];
const RobertKubica = {name : 'Robert', surname : 'Kubica'}

//Elision
const [ ,secondCar, ,fourthCar ] = cars;
console.log('secondCar: ', secondCar);
console.log('fourthCar: ', fourthCar);


//Rest
const [ firstCar, ...restOfCars ] = cars;
console.log('firstCar: ', firstCar);
console.log('restOfCars: ', restOfCars);


//Assign to 1.
const F1Driver = {};

({surname : F1Driver.driverName} = RobertKubica);
[ , F1Driver.car] = cars;

console.log(F1Driver);


//Assign to 2.

let F2Driver = {};
[F2Driver.name, F2Driver.surname] = "Robert Kubica".split(' ');

console.log(F2Driver);







//Algorytmy destrukcyjne
function foo({x=0, y=0} = {}){
    return [x, y];
}

foo({x: 3, y: 8}); // [3, 8]
foo({x: 3}); // [3, 0]
foo({}); // [0, 0]
foo(); // [0, 0]