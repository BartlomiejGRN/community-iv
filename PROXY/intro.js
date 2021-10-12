//Obiekt Proxy otacza inny obiekt i przechwytuje operacje, takie jak odczytywanie/zapisywanie właściwości

//Syntax

// let proxy = new Proxy(target, handler);

//target – jest obiektem do opkaowania, może być dowolnym obiektem, a nawet funkcją.
//handler – konfiguracja proxy: obiekt z „pułapkami”, metodami przechwytującymi operacje.
//np. "get trap" do odczytu właściwości targetu, "set trap" do zapisania właściwości do targetu.

let target = {};
let proxy = new Proxy(target, {}); // empty handler

proxy.test = 5; // zapis do proxy (1)
console.log(target.test); // wartość jest zapisywana na targetcie!

console.log(proxy.test); // można go odczytywać także z targetu







