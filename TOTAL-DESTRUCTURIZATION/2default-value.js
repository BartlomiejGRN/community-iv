const randomPerson = {
    firstName: "Tomek",
    secondName: null,
    lastName : "Domek",
    address : undefined
}

const {
    firstName : fName,
    lastName : lName,
    balance : money = 0,
    secondName : sName = 'No second name',
    maidenName : mName = lName,
    address = 'No Address'
} = randomPerson;

console.log('1. fName: ', fName);
console.log('2. money: ', money);
console.log('3. sName: ', sName);
console.log('4. mName: ', mName);
console.log('5. address: ', address);



//Wartość domyślna wyliczana na tylko jeśli trzeba
const randomDog = {
    name : "Pimpek",
    age : 5,
    breed : undefined
}

function getDefaultBreed(){
    return 'Kundelek';
}

let lameDogBreed;

if(randomDog.breed === undefined){
    lameDogBreed = getDefaultBreed();
} else {
    lameDogBreed = randomDog.breed;
}

const { breed : proDogBreed = getDefaultBreed() } = randomDog;
console.log(proDogBreed);



