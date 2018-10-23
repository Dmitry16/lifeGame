// function prompt(arr, callback) {
//     var stdin = process.stdin,
//         stdout = process.stdout;
//     stdin.resume();
//     stdout.write(arr);

//     stdin.once('data', function (data) {
//         callback(data.toString().trim());
//     });
// }
// prompt('lets play:', function (input) {
//     console.log(input);
//     process.exit();
// });
// const n = 5;
// function makeArr(n) {
//     let arr = [];
//     for (let y=0; y<n; y++) {
//         arr.push([]);
//         arr[y].push( new Array(5));

//         for (let x=0; x<n; x++) {
//             arr[y][x] = 0;
//         }
//     }
//     console.log(arr);
// }
// makeArr(5);
let arr = [[1,0,1,0,1],[1,0,0,1,0],[0,1,1,0,1],[0,0,1,1,0],[1,1,0,1,1]];

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
        deadCounter++;
    }
}

function checkNextAlive(q,w) {
    let aliveCounter = 0;
    if (arr[q][w + 1] === 1) {
        aliveCounter++;
    }
    console.log('Alive: ', aliveCounter);
}

let deadCounter = 0;
console.log(arr);
letsPlay();
console.log('Dead: ', deadCounter);