/*
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:

pvz.: “abcdef” -> “fedcba”

*/

const pradinisTekstas = 'abcdef';
const tekstoIlgis = pradinisTekstas.length;
let atbulasTekstas = '';

// for (let i = 0; i < tekstoIlgis; i++) {
//     const raide = pradinisTekstas[i];
//     atbulasTekstas = raide + atbulasTekstas;
// }

// for (let i = 0; i < tekstoIlgis; i++) {
//     const raide = pradinisTekstas[tekstoIlgis - i - 1];
//     atbulasTekstas += raide;
// }

// for (let i = tekstoIlgis; i > 0; i--) {
//     const raide = pradinisTekstas[i - 1];
//     atbulasTekstas += raide;
// }

for (let i = tekstoIlgis - 1; i >= 0; i--) {
    const raide = pradinisTekstas[i];
    atbulasTekstas += raide;
}

console.log(pradinisTekstas, '->', atbulasTekstas);