
let arr = [[1,0,1,0,1],[1,0,0,1,0],[0,1,1,0,1],[0,0,1,1,0],[1,1,0,1,1]];
let mutatedArr = arr.slice();

function letsPlay() {
    for (let y=0; y<arr.length; y++) {
        for (let x=0; x<arr.length; x++) {
            checkForLife(x,y)
        }
    }
}
function checkForLife(i,j) {
    if (arr[i][j] === 1) {
        checkNextAlive(i,j);
    }
    if (arr[i][j] === 0) {
        // checkNextDead();
    }
}
function checkNextAlive(q,w) {
    let nextAlive = 0;
    
    if (arr[q][w + 1] && arr[q][w + 1] === 1) {
        nextAlive++;
    }
    if (arr[q][w - 1] && arr[q][w - 1] === 1) {
        nextAlive++;
    }
    if (arr[q + 1] && arr[q + 1][w] === 1) {
        nextAlive++;
    }
    if (arr[q - 1] && arr[q - 1][w] === 1) {
        nextAlive++;
    }
    if (arr[q + 1] && arr[q + 1][w + 1] && arr[q + 1][w + 1] === 1) {
        nextAlive++;
    }
    if (arr[q + 1] && arr[q + 1][w - 1] && arr[q + 1][w - 1] === 1) {
        nextAlive++;
    }
    if (arr[q - 1] && arr[q - 1][w + 1] && arr[q - 1][w + 1] === 1) {
        nextAlive++;
    }
    if (arr[q - 1] && arr[q - 1][w - 1] && arr[q - 1][w - 1] === 1) {
        nextAlive++;
    }
    if (nextAlive < 2 || nextAlive > 3) {
        mutatedArr[q][w] = 0;
    }
}

// let deadCounter = 0;
// let aliveCounter = 0;
console.log(arr);
letsPlay();
console.log('------------------------');
console.log(mutatedArr);