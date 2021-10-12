//Destrukturyzacja Obiektu
const F1Team = {
    name : 'BMW Sauber F1',
    engineBrand : 'BMW',
    firstEntry : '1952 German Grand Prix',
    owner : {
        name : 'Peter Sauber',
        from : 1970,
        to : null
    },
    drivers : [
        {
            name : 'Robert',
            surname : 'Kubica',
            injuries : 'Twisted wrist',
            car : {
                name : 'Fast BMW',
                maxSpeed : 350,
                isBroken : false
            }
        },
        {
            name : 'Sebastian',
            surname : 'Vettel',
            car : {
                name: 'Slow BMW',
                maxSpeed: 100,
                isBroken: true
            }
        }
    ]
};

const exampleObject = {
    name : 'Barti'
}





const {
    firstEntry, //Bezpośrednio po nazwie

    name : teamName, //Zmienia Nazwy

    owner : {name : ownerName}, //Dostęp do wartości zagnieżdżonych

    drivers : [{car : { name : robertCar }}], //Dostęp do wartości zagnieżdżonych (tablica)

    drivers : [ ,{injuries : sebastianInjury = 'No injuries'}], //wartość domyślna

} = F1Team;







console.log('Pierwsze wystąpienie: ', firstEntry);
console.log('Nazwa Teamu: ', teamName);
console.log('Właściciel Teamu: ', ownerName);
console.log('Auto Roberta: ', robertCar);
console.log('Kontuzja Sebastiana: ', sebastianInjury);







