function bigNum(list) {
    if (typeof list !== 'object') {
        return 'ERROR: parametras turi buti array tipo.'
    }
    if (list.length === 0) {
        return 'ERROR: array negali buti tuscias.'
    }

    let biggestNumber = list[0];

    for (let i = 0; i < list.length; i++) {
        const number = list[i];

        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    return biggestNumber;
}

console.log(bigNum('pomidoras'));
console.log(bigNum([]));

console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([1, 3, 2, 4, 1]), '->', 4);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);

