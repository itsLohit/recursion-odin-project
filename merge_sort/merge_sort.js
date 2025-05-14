function MergeSort(arr) {
    const lengthArr = arr.length;
    if (lengthArr === 0) {
        console.error('No elements to be sorted.');
        return arr;
    };

    if (lengthArr === 1) return arr.slice();

    const sortedArr = [];
    
    const mid = lengthArr / 2;
    const leftDivision = arr.slice(0, mid); 
    const rightDivision = arr.slice(mid);


    const leftArr = MergeSort(leftDivision);
    const rightArr = MergeSort(rightDivision);


    while (leftArr.length > 0) {
        if (leftArr[0] > rightArr[0]) {
            sortedArr.push(rightArr.shift());
        } else {
            sortedArr.push(leftArr.shift());
        };
    }


    while (rightArr.length > 0) {
        sortedArr.push(rightArr.shift());
    };

    return sortedArr;
};

console.log(MergeSort([]));
console.log(MergeSort([0]));
console.log(MergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(MergeSort([105, 79, 100, 110]));
console.log(MergeSort([12, 3, 17, 8, 34, 1, 0, 56, 23, 5]));
console.log(MergeSort([99, 87, 75, 63, 51, 39, 27, 15, 3, -9]));
console.log(MergeSort([13, -3, 7, 7, 42, 0, -5, 2, 2, 1, 0, 13]));
console.log(MergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));





// Another Solution:
function mergeSort(arr) {
    // If the array has 1 or 0 elements, it's already sorted
    if (arr.length <= 1) return arr;

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Sort each half, then merge them
    return merge(mergeSort(left), mergeSort(right));
}

// Merge two sorted arrays into one sorted array
function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        // Take the smaller element from the front of left or right
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    // Add any remaining elements from left or right
    return result.concat(left, right);
}

// Example usage:
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));