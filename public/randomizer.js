


function randomize(arr){
    let ranN = Math.floor(Math.random() * arr.length);
    return arr[ranN];
}

module.exports = randomize;