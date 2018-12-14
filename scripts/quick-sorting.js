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

console.log(quickSort(array));


// function partSort(arr, pLeft, pRight) {
//
//   if (arr.length < 2) return arr;
//
//   const pivot = arr[Math.round((pRight + pLeft)/2)];
//   let i = pLeft,
//     j = pRight;
//
//   while (i <= j) {
//     while (arr[i] < pivot) {
//       i++;
//     }
//     while (arr[j] > pivot) {
//       j--;
//     }
//
//     if (i <= j) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//       i++;
//       j--;
//     }
//   }
//   return i;
// }
//
// function quickSort(arr, pLeft, pRight) {
//   let index;
//
//   if (arr.length > 1) {
//     index = partSort(arr, pLeft, pRight);
//     if (pLeft < index - 1) {
//       quickSort(arr, pLeft, index - 1);
//     }
//
//     if (index < pRight) {
//       quickSort(arr, index, pRight);
//     }
//   }
//   return arr;
// }


// console.log(quickSort(array, 0, array.length-1));
