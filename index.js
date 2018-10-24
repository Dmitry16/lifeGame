
let arr = [[0,0,1,0,1],[1,0,0,1,0],[0,1,0,0,1],[0,0,1,1,0],[0,1,0,1,1]];
let aliveMutation = arr.map(el => [...el]);
let deadMutation = arr.map(el => [...el]);

function letsPlay() {
    for (let y=0; y<arr.length; y++) {
        for (let x=0; x<arr.length; x++) {
            checkCell(x,y)
        }
    }
}
function checkCell(i,j) {
    if (arr[i][j] === 1) {
        checkBro('alive', i,j);
    }
    if (arr[i][j] === 0) {
        checkBro('dead', i,j);
    }
}
function checkBro(target, q,w) {
    let nextAlive = 0;
    if (arr[q][w + 1] && arr[q][w + 1] === 1) nextAlive++;

    if (arr[q][w - 1] && arr[q][w - 1] === 1) nextAlive++;

    if (arr[q + 1] && arr[q + 1][w] === 1) nextAlive++;

    if (arr[q - 1] && arr[q - 1][w] === 1) nextAlive++;

    if (arr[q + 1] && arr[q + 1][w + 1] && arr[q + 1][w + 1] === 1) nextAlive++;

    if (arr[q + 1] && arr[q + 1][w - 1] && arr[q + 1][w - 1] === 1) nextAlive++;

    if (arr[q - 1] && arr[q - 1][w + 1] && arr[q - 1][w + 1] === 1) nextAlive++;

    if (arr[q - 1] && arr[q - 1][w - 1] && arr[q - 1][w - 1] === 1) nextAlive++;

    if (target === 'alive') {
        if (nextAlive < 2 || nextAlive > 3) {
            aliveMutation[q][w] = 0;
        }
    }
    if (target === 'dead') {
        if (nextAlive >= 3) {
            deadMutation[q][w] = 1;
        }
    }
}

console.log('initial array::');
console.log(arr);
letsPlay();
console.log('alive mutation to dead::');
console.log(aliveMutation);
console.log('dead mutation to alive::');
console.log(deadMutation);