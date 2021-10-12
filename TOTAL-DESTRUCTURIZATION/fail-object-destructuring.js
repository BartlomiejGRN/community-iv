const chalk = require("chalk");
const red = chalk.red;
const green = chalk.green;

//Nieudana destrukturyzacja

try {
    //1
    const {length} = 'BMW';
    console.log('This is length from BMW: ', green(length));
}catch (err){
    console.log('1', red(err.message));
}

try {
    //2
    const {foo} = 1;
    console.log('This is foo from 1: ', green(foo));
}catch (err){
    console.log('2', red(err.message));
}

try {
    //3
    const {foo : { bar : property}} = true;
    console.log('This is foo.bar from true: ', green(property));
}catch (err){
    console.log('3', red(err.message));
}

//array

try {
    //4
    const {thatIsNull} = null;
    console.log('thatIsNull', green(thatIsNull));
}catch (err){
    console.log('4', red(err.message));
}

try {
    //5
    const {thatIsUndefined} = undefined;
    console.log('thatIsUndefined', green(thatIsUndefined));
}catch (err){
    console.log('5', red(err.message));
}




const objFromNull = Object(null);
console.log('objFromNull', objFromNull);

const objFromUndefined = Object(undefined);
console.log('objFromUndefined', objFromUndefined);

const objFromPrimitive = Object(true);
console.log('objFromPrimitive', objFromPrimitive);

//https://262.ecma-international.org/6.0/#sec-toobject


const nullObj = null;
try{
    ({} = nullObj)
}catch (err){
    console.log(red(err.message));
}