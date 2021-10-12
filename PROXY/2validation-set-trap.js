//Validacja z użyciem “set trap"

const F1Driver = {
    name : 'Robert',
    surname : 'Kubica',
    team : 'BMW Sauber',
    age : 36
};


const F1DriverProxy = new Proxy(F1Driver, {
    set(target, prop, val) {
        if (prop === 'age' && Number.isInteger(val) && target.age < val) {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    }
});


F1DriverProxy.age = 5;
console.log('Przez Proxy Robert nie może być młodszy ', F1Driver);

F1DriverProxy.age = 37;
console.log('Stary Robert Kubica: ',F1Driver);

F1Driver.age = 21;
console.log('Młody Robert Kubica: ',F1Driver);
