/*
Suskaiciuok nuo 1 iki 5.
Atvaizdavimas:
console.log(skaicius);
*/

const menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis'];

// console.log(menesiai[0]);
// console.log(menesiai[1]);
// console.log(menesiai[2]);
// console.log(menesiai[3]);

for (let i = 0; i < menesiai.length; i++) {
    console.log(menesiai[i]);
}



const pazymiai = [10, 2, 8, 4, 7];     // 6

let suma = 0;
const skaiciuKiekis = pazymiai.length;

// susumuojame visus pazymiu saraso narius (skaicius)
for (let i = 0; i < skaiciuKiekis; i++) {
    suma += pazymiai[i];
}

const vidurkis = suma / skaiciuKiekis;

console.log(suma, '/', skaiciuKiekis, '=', vidurkis);
console.log('Pazymiu vidurkis:', vidurkis);

