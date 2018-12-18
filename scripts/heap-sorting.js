const array = [44, 55, 12, 42, 94, 18, 06, 67, 153, 30, 27, 152, 113, 11, 5, 169, 69, 8155, 12, 42, 94, 18, 06];

class Heap {
  constructor(arr) {
    this.storage = arr;
    this.sortedArr = [];
    this.heapLength = arr.length;
    // this.heapSort();
    this.siftMax();

  }

  // heapSort() {
  //   let n = this.heapLength-1;
  //   for (let i = this.heapLength-1, counter = 0; i > 0; i--) {
  //     let k = this._findParentInd(i);
  //     if (i === 1 && counter === 0) return;
  //     if (this.storage[k] >= this.storage[i]) continue;
  //     if (this.storage[k] < this.storage[i]) {
  //       let temp = this.storage[k];
  //       this.storage[k] = this.storage[i];
  //       this.storage[i] = temp;
  //       counter++;
  //     }
  //   }
  //   this.heapSort();
  // }

  siftMax() {
    let n = this.heapLength-1;
    for (let i = this.heapLength-1, counter = 0; i > 0; i--) {
      let k = this._findParentInd(i);
      if (i === 1 && counter === 0) return;
      if (this.storage[k] >= this.storage[i]) continue;
      if (this.storage[k] < this.storage[i]) {
        let temp = this.storage[k];
        this.storage[k] = this.storage[i];
        this.storage[i] = temp;
        counter++;
      }
    }
    this.siftMax();
  }

  _findParentInd(i) {
    if (i < this.heapLength) {
      const parentInd = Math.floor((i+1)/2) - 1;
      return parentInd;
    }
  }

  // childComparison() {
  //   for (let i = 0, child1 = 2*i+1, child2 = child1+1; i < this.heapLength; i++) {
  //     if (this.storage[child1] >= this.storage[child2] && this.storage[child1] > this.storage[i]) {
  //       let temp = this.storage[child1];
  //       this.storage[child1] = this.storage[i]
  //       this.storage[i] = temp;
  //     } else
  //       if (this.storage[child2] >= this.storage[child1] && this.storage[child2] > this.storage[i]) {
  //         let temp = this.storage[child2];
  //         this.storage[child2] = this.storage[i]
  //         this.storage[i] = temp;
  //         counter++;
  //       } else continue;
  //   }
  // }
  // findChldren(i) {
  //   const n = this.heapLength-1;
  //   if (i === 0) return (`First child: ${this.storage[1]}\nSecond child: ${this.storage[2]}`);
  //   if (i < 0 || i > n) alert("The index You've entered is outside the selected array!");
  //   const index1 = 2*i+1, index2 = index1+1;
  //   if (i === n || index1 > n) alert("The item under the selected index is a leaf.");
  //   if ((index1 && index2) < n) return console.log(`First child: ${this.storage[index1]}\nSecond child: ${this.storage[index2]}`);
  //   if (index1 <= n) return console.log(`First child: ${this.storage[index1]};`);
  // }
}

const heap = new Heap(array);
console.log(heap.storage);
console.log(array);


// function findParent(arr, i) {
//   if (i > 0 && i < arr.length) {
//     const parrent = arr[Math.floor((i+1)/2) - 1];
//     return parrent;
//   }
//     else return alert("The index You've entered is outside the selected array or is a root element.");
// }

// function findChldren(arr, i) {
//   const n = arr.length-1;
//   if (i === 0) return (`First child: ${arr[1]}\nSecond child: ${arr[2]}`);
//   if (i < 0 || i > n) alert("The index You've entered is outside the selected array!");
//   const index1 = 2*i+1, index2 = 2*i+2;
//   if (i === n || index1 > n) alert("The item under the selected index is a leaf.");
//   if ((index1 && index2) < n) return console.log(`First child: ${arr[index1]}\nSecond child: ${arr[index2]}`);
//   if (index1 <= n) return console.log(`First child: ${arr[index1]};`);
// }


// THIS FUNCTION IS FROM SOME MANUAL
// function heapSort(arr) {
//   if (arr.length == 0) return [];
//   let n = arr.length, i = Math.floor(n/2), j, k, t;
//   while (true) {
//     if (i > 0) t = arr[--i];
//       else {
//         n--;
//        if (n == 0) return arr;
//        t = arr[n];  arr[n] = arr[0];
//       }
//     j = i;
//     k = j * 2 + 1;
//     while (k < n) {
//       if (k+1 < n && arr[k+1] > arr[k]) k++;
//       if (arr[k] > t) {
//         arr[j] = arr[k];  j = k;  k = j*2+1;
//       } else break;
//      }
//     arr[j] = t;
//   }
// }
