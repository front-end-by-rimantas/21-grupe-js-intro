/*
intervale 0..11
daliklis 3
kiekis, kiek skaiciu dalijasi be liekanos nurodytame intervale (imtinai)
*/

const nuo = 8;
const iki = 31;
const daliklis = 5;
let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
        kiekis++;
    }
}

const ats = 'Skaičių intervale tarp ' + nuo + ' ir ' + iki + ', besidalijančių be liekanos iš ' + daliklis + ' yra ' + kiekis + ' vienetai.';

console.log(ats);

// console.log('-----------------------');

// const nuo2 = 8;
// const iki2 = 31;
// const daliklis2 = 7;
// let kiekis2 = 0;

// for (let i = nuo2; i <= iki2; i++) {
//     if (i % daliklis2 === 0) {
//         kiekis2++;
//     }
// }

// const ats2 = 'Skaičių intervale tarp ' + nuo2 + ' ir ' + iki2 + ', besidalijančių be liekanos iš ' + daliklis2 + ' yra ' + kiekis2 + ' vienetai.';

// console.log(ats2);

// console.log('-----------------------');

// const nuo3 = 5;
// const iki3 = 41;
// const daliklis3 = 6;
// let kiekis3 = 0;

// for (let i = nuo3; i <= iki3; i++) {
//     if (i % daliklis3 === 0) {
//         kiekis3++;
//     }
// }

// const ats3 = 'Skaičių intervale tarp ' + nuo3 + ' ir ' + iki3 + ', besidalijančių be liekanos iš ' + daliklis3 + ' yra ' + kiekis3 + ' vienetai.';

// console.log(ats3);










function liekana(from, till, divider) {
    let count = 0;

    for (let i = from; i <= till; i++) {
        if (i % divider === 0) {
            count++;
        }
    }

    return 'Skaičių intervale tarp ' + from + ' ir ' + till + ', besidalijančių be liekanos iš ' + divider + ' yra ' + count + ' vienetai.';
}

const tekstas = liekana(8, 31, 5);
console.log(tekstas);

const tekstas2 = liekana(88, 331, 7);
console.log(tekstas2);