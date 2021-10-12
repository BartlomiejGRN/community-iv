//Default Value

const F1Drivers = ['Robert Kubica', 'Lewis Hamilton', 'Max Verstappen'];

const F1DriversProxy = new Proxy(F1Drivers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return 'Nieznany Kierowca'; // default value
        }
    }
});

console.log(F1DriversProxy[0]);
console.log(F1DriversProxy[1]);
console.log(F1DriversProxy[123]);