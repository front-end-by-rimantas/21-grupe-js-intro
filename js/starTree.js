function starTree(nFloors) {
    const ats = [];
    for (let i = 0; i < nFloors; i++) {
        const spaces = nFloors - i - 1;
        const stars = i * 2 + 1;
        const text = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces);
        ats.push(text);
    }
    return ats;
}

starTree(10);


/*

3

  *
 ***
*****


4                               i
   *            3   1           0       level - i - 1
  ***           2   3           1
 *****          1   5           2
*******         0   7           3


*/