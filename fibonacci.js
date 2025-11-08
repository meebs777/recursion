function fibs(num) {
    const arr = [];
    for (let index = 0; index < num; index++) {
        if (index === 0) arr[0] = 0;
        else if (index === 1) arr[1] = 1;
        else arr[index] = arr[index - 1] + arr[index - 2];
    }
    return arr;
}


function fibsRec(num) {
    console.log("This was printed recursively")
    if (num === 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    const arr = fibsRec(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

console.log(fibsRec(8));