function mergeSort(array) {
    const length = array.length;
    if(length === 0) return [] 
    else if (length === 1) {
        return array
    } else {
        const lowerBound = Math.floor(length / 2);
        let lowerHalf = array.slice(0, lowerBound);
        let upperHalf = array.slice(lowerBound);
        lowerHalf = mergeSort(lowerHalf);
        upperHalf = mergeSort(upperHalf);
        const arr = [];
        let arr1 = 0;
        let arr2 = 0;
        for (let index = 0; index < length; index++) {
            if ((lowerHalf[arr1] <= upperHalf[arr2]) || upperHalf[arr2] === undefined) {
                arr[index] = lowerHalf[arr1];
                arr1 = arr1 +1;
            } else {
                arr[index] = upperHalf[arr2];
                arr2++;
            }
        }
        return arr;
    }
}


console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));