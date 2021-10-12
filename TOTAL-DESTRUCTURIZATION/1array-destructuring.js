//Destrukturyzacja Tablicy
const F1Drivers = [
    { name : 'Robert', surname : 'Kubica'},
    { name : 'Lewis', surname : 'Hamilton'},
    { name : 'Max', surname : 'Verstappen'},
];


//Pominięcie
const [ firstDriver,,lastDriver ] = F1Drivers;
console.log('firstDriver: ', firstDriver);
console.log('lastDriver: ', lastDriver);


//Reszta
const [ bestDriver, ...lameDrivers] = F1Drivers;
console.log('bestDriver: ', bestDriver);
console.log('lameDrivers: ', lameDrivers);


//Wartości domyślne
const [driverName = 'Robert', driverSurname] = [];
console.log('Default Values', driverName, driverSurname);


//Przypisanie*
const driver = {};
[driver.name, driver.surname] = 'Robert Kubica'.split(' ');

console.log('driver', driver);

//Podmiana*
let boss = 'Lewis Hamilton';
let looser = 'Robert Kubica';

console.log('Fałszywy Szef:', boss);
console.log('Fałszywy Słabiak:', looser);

[boss, looser] = [looser, boss];

console.log('Prawdziwy Szef:', boss);
console.log('Prawdziwy Słabiak:', looser);




