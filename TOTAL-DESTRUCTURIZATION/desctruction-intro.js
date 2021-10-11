//Destrukturyzacja Tablicy
const F1Drivers = ['Robert Kubica', 'Lewis Hamilton', 'Max Verstappen'];

const driver = F1Drivers[0];
console.log('driver: ', driver);

const [robert, lewis, max] = F1Drivers;
console.log(robert, lewis, max);





//Destrukturyzacja Obiektu
const F1Car = {
    team : 'BMW Sauber',
    weight : 790,
    maxSpeed : 350,
    driver : {
        name : 'Robert',
        surname : 'Kubica'
    }
}

const { team, driver : { name, surname } } = F1Car;
console.log(team, name, surname);


