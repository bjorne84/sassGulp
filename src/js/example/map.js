// Map


let arr = [4, 8, 1, 2, 9];
console.log(arr);

function doubler(x) {
    return x * 2;
}

let doubled = arr.map(doubler);
console.log(doubled);

let arrDubbel = arr.map(x => x * 2);
console.log(arrDubbel)