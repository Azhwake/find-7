// Good Luck 💪🏾
function findSeven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString().includes('7')) {
            return "Found!";
        }
    }
    return "there is no 7 in the array";
}

// Test cases
console.log(findSeven([1, 2, 3, 4, 5, 6, 7])); // "Found!"
console.log(findSeven([8, 6, 33, 100]));       // "there is no 7 in the array"
console.log(findSeven([2, 55, 60, 97, 86]));   // "there is no 7 in the array"