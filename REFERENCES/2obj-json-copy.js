const F1Driver = {
    name: "Robert",
    surname: "Kubica",
    car :{
        name: 'BMW'
    },
    drive: function () {
        console.log('Jaaaadę!')
    }
};


const F1DriverCopy = JSON.parse(JSON.stringify(F1Driver));

console.log("Before change");
console.log('Prawdziwy Robert: ',F1Driver);
console.log('Kopia Roberta',F1DriverCopy);

F1DriverCopy.team = "BMW Sauber";

console.log("After change");
console.log('Prawdziwy Robert: ',F1Driver);
console.log('Kopia Roberta',F1DriverCopy);
