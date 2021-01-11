function mokesciai(amount, tax) {
    return amount * tax / 100;
}


const m1 = mokesciai(1000, 21);     // 210
const m2 = mokesciai(500, 15);      // 75
const m3 = mokesciai(0, 15);        // 0

console.log(m1, '->', 210);
console.log(m2, '->', 75);
console.log(m3, '->', 0);



const m4 = mokesciai(1000, 100);
console.log(m4);