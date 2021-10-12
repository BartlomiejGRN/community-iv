const F1Driver = {
    name : 'Robert',
    surname : 'Kubica',
    team : 'BMW Sauber',
};

const { proxy : F1DriverProxy, revoke } = Proxy.revocable(F1Driver, {
    set(target, prop, val) {
        if (prop === 'team') {
            throw new Error('Kubica nigdy nie zmieni teamu!')
        }
        target[prop] = val;
        return true;
    }
})

try {
    F1DriverProxy.team = 'Scuderia Ferrari'
}catch (err){
    console.log(err.message);
}

revoke();

try{
    F1DriverProxy.team = 'Mercedes Petronas'
}catch (err){
    console.log(err.message);
}

///json stringify