const array = [4, 53, 623, 2, 7, 84, 15, 325, 2634, 23];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const less = arr.filter(val => val < pivot);
    const greater = arr.filter(val => val > pivot);
    return arr = [...quickSort(less), pivot, ...quickSort(greater)];
  }
}

console.log(`The result of Quicksort for the array [${array}]: [${quickSort(array)}]`);
