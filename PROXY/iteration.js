const F1Driver = {
    name : 'Robert',
    surname : 'Kubica',
    team : 'BMW Sauber',
    _age : 36,
    _password : 'Tajne Hasło Roberta Kubicy'
};

let F1DriverProxy = new Proxy(F1Driver, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
})

for(let key in F1DriverProxy){
    console.log(key);
}

console.log('Klucze Roberta: ',Object.keys(F1DriverProxy));
console.log('Wartości Roberta: ',Object.values(F1DriverProxy));






F1DriverProxy = new Proxy(F1Driver, {
    get(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        }
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value;
    },

    set(target, prop, val) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            target[prop] = val;
            return true;
        }
    },

    deleteProperty(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            delete target[prop];
            return true;
        }
    },

    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
})


