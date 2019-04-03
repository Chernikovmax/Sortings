class BubbleSort {
  constructor(arr) {
    this.array = arr;
  }
  sort() {
    for (let i = 0; i < this.array.length-1; i++) {
      for (let j = 0; j < this.array.length -1 -i; j++) {
        if (this.array[j] > this.array[j+1]) {
          let temp = this.array[j];
          this.array[j] = this.array[j+1];
          this.array[j+1] = temp;
        }
      }
    }
    return this.array;
  }
}


const bubleSortArray = [-2, 0, 1, 3, 4, 6, 2, 8, 17, -50, 9, 13, 13, 16, 12];

let sample = new BubbleSort(bubleSortArray);
console.log(`The result of Bubble Sorting for the array [${bubleSortArray}]: ${sample.sort()}`);
