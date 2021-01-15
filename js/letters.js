function letters(text, step) {
    // input/parameters validation
    if (typeof text !== 'string') {
        return 'ERROR: pirmasis parametras turi buti teksto tipo.';
    }
    if (text === '') {
        return 'ERROR: pirmasis paramtras negali buti tuscias tekstas.';
    }

    if (typeof step !== 'number') {
        return 'ERROR: zingsnis turi buti skaiciaus tipo.';
    }
    if (!isFinite(step)) {
        return 'ERROR: zingsnis turi buti tikras skaicius.';
    }
    if (step === 0) {
        return 'ERROR: zingsnis negali buti nulinis (0).';
    }

    const textSize = text.length;
    if (textSize < step) {
        return 'ERROR: zingsnis negali buti didesnis nei teksto ilgis';
    }

    // logic
    let newText = '';

    for (let i = 0; i < textSize; i++) {
        const letter = text[i];
        // console.log(i, letter);
        if (i % step === step - 1) {
            newText = newText + letter;
        }
    }

    // post logic validation
    if (newText === '') {
        return 'ERROR: nenumatytas atvejis, kazkodel grazino tuscia teksta... 🤔😬';
    }

    // return result
    return newText;
}

console.log(letters(1561, 2));
console.log(letters(true, 2));
console.log(letters([], 2));
console.log(letters('abcdef', 'wer'));
console.log(letters('abcdef', true));
console.log(letters('abcdef', []));
console.log(letters('abc', NaN));
console.log(letters('abc', Infinity));
console.log(letters('abc', -Infinity));
console.log(letters('', 2));
console.log(letters('abc', 0));
console.log(letters('abc', 4));

console.log(letters('abc', 1), '->', 'abc');
console.log(letters('abcdef', 1), '->', 'abcdef');
console.log(letters('abcdefg', 2), '->', 'bdf');
console.log(letters('qwertyuiop', 2), '->', 'wryip');
console.log(letters('abcdefghijkl', 3), '->', 'cfil');
console.log(letters('abcdefghijkl', 4), '->', 'dhl');
