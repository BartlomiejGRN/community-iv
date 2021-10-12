let ageOfGoodDriver = {
    min : 20,
    max : 35
}

ageOfGoodDriver = new Proxy(ageOfGoodDriver, {
    has(target, prop) {
        return (prop >= target.min) && (prop <= target.max);
    }
})

console.log(19 in ageOfGoodDriver);
console.log(26 in ageOfGoodDriver);