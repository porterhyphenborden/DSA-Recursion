//1. Counting Sheep

function countSheep(x) {
    if (x < 0) return;
    if (x === 0) {
        console.log('All sheep jumped over the fence');
        return;
    }
    console.log(`${x}: Another sheep jump over the fence`);
    countSheep(x - 1);
}

countSheep(3);

//2. Power Calculator

function powerCalculator(x,y) {
    if ((x < 0) || (y < 0)) return 'exponent should be >= 0';
    if ( y === 1) return x;
    return x * powerCalculator(x,(y-1));
}

console.log(powerCalculator(10,3));

//3. Reverse String

function revStr(str) {
    if (str === '') return '';
    return revStr(str.substr(1)) + str[0];
}

console.log(revStr('callie'));

//4. nth Triangular Number

function triNum(x) {
    if (x < 0) return 'X must be greater than 0.';
    if (x === 1) return x;
    return x + triNum(x-1);
}

console.log(triNum(4));

//5. String Splitter

function strSplit(str, char) {
    if (str.length === 0 ) return '';
    return ((str[0] !== char) ? (str[0] + strSplit(str.substr(1), char)) : strSplit(str.substr(1), char));
}

console.log(strSplit('3/15/83', '/'));


//6. Fibonacci

function fibonacci(x) {
    if (x === 1 ) return [1];
    if (x === 2) return [1, 1];
    let seq = fibonacci(x-1);
    seq.push(seq[seq.length-2] + seq[seq.length-1]);
    return seq;
}

console.log(fibonacci(7));

//7. Factorial

function factorial(x) {
    if (x === 1) return 1;
    return x * factorial(x-1);
}

console.log(factorial(5));

//8. Find a way out of the maze - not sure how to do this

//9. Find all ways out of the maze - not sure how to do this

//10. Anagrams

function anagrams(str) {
    let results = [];
    if (str.length === 1) {
        results.push(str);
        return results;
    }
    for (let i = 0; i < str.length; i++) {
        let firstChar = str[i];
        let charsRem = str.substring(0, i) + str.substring(i + 1);
        let innerAngagrams = anagrams(charsRem);
        for (let j = 0; j < innerAngagrams.length; j++) {
            results.push(firstChar + innerAngagrams[j]);
        }
    }
    return results;
}

console.log(anagrams('east'));

//11. Organization Chart - don't understand the prompt

//12. Binary Representation

function binary(x) {
    if (x === 0) return '';
    return x % 2 + 10 * binary(Math.floor(x / 2));
}

console.log(binary(25));