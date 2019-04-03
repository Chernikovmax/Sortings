const array = [24, 31, 15, 20, 52, 6];
const array2 = [44, 55, 12, 42, 94, 18, 06, 67, 153, 30, 27, 152, 113, 11, 5, 169, 69, 8155, 12, 42, 94, 18, 06];

// This code was implemented as class and do the Max Heap.

class Heap {
  constructor(array) {
    this.arr = array;
    this._maxHeapCreation(this.arr);
  }

  heapSort() {
    for (let i = 1; i < this.arr.length; i++) {
      const temp = this.arr[0];
      this.arr[0] = this.arr[this.arr.length-i];
      this.arr[this.arr.length-i] = temp;
      const heapSize = this.arr.length-i;
      this._siftingMax(this.arr, 0, heapSize)
    }
    return this.arr;
  }

  _siftingMax(arr, index, heapSize) {
    const left = 2 * index + 1, right = 2 * index + 2;

    let largestNum = index;

    if (heapSize > left && arr[largestNum] < arr[left]) {
      largestNum = left;
    }
    if (heapSize > right && arr[largestNum] < arr[right]) {
      largestNum = right;
    }
    if (largestNum !== index) {
      const temp = arr[index];
      arr[index] = arr[largestNum];
      arr[largestNum] = temp;
      this._siftingMax(arr, largestNum, heapSize)
    }
  }

  _maxHeapCreation(arr) {
    for (let i = Math.floor(arr.length/2); i >= 0; i--) {
      this._siftingMax(arr, i, arr.length);
    }
    return arr;
  }
}

const heap1 = new Heap(array);
console.log(heap1.heapSort());

const heap2 = new Heap(array2);
console.log(heap2.heapSort());

// This code was implemented as functions and do the Min Heap.

function heapSort(arr) {
  minHeapCreation(arr);
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[0];
    arr[0] = arr[arr.length-i];
    arr[arr.length-i] = temp;
    const heapSize = arr.length-i;
    siftingMin(arr, 0, heapSize)
  }
  return arr.reverse();
}

function minHeapCreation(arr) {
  for (let i = Math.floor(arr.length/2); i >= 0; i--) {
    siftingMin(arr, i, arr.length);
  }
  return arr;
}

function siftingMin(arr, index, heapSize) {
  const left = 2 * index + 1, right = 2 * index + 2;

  let lowerNum = index;

  if (heapSize > left && arr[lowerNum] > arr[left]) {
    lowerNum = left;
  }
  if (heapSize > right && arr[lowerNum] > arr[right]) {
    lowerNum = right;
  }
  if (lowerNum !== index) {
    const temp = arr[index];
    arr[index] = arr[lowerNum];
    arr[lowerNum] = temp;
    siftingMin(arr, lowerNum, heapSize)
  }
}
