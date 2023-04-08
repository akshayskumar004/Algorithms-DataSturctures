import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting-algorithms',
  templateUrl: './sorting-algorithms.component.html',
  styleUrls: ['./sorting-algorithms.component.scss'],
})
export class SortingAlgorithmsComponent implements OnInit {
  array = [-6, 20, 8, -2, 49, -234, 98, 45, -34];
  ngOnInit(): void {
    // console.log(this.bubbleSort(this.array), 'bubbleSort');
    // console.log(this.insertionSort(this.array), 'insertionSort');
    // console.log(this.quickSort(this.array), 'Quick Sort');
    console.log(this.mergeSort(this.array), 'Merge Sort');
  }

  bubbleSort(arr: number[]) {
    //bubble Sort where all the values compares each other until swapped in accending or desecnding order... ie In this array ith checks --6 > 20
    // big O -- O(logn)
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);

    return arr;

    // O(n^2)
    //   const len = arr.length;
    //   for (let i = 0; i < len - 1; i++) {
    //     for (let j = 0; j < len - 1; j++) {
    //       if (arr[j] > arr[j + 1]) {
    //         const temp = arr[j];
    //         arr[j] = arr[j + 1];
    //         arr[j + 1] = temp;
    //       }
    //     }
    //   }
    //   return arr;
  }
  // array = [-6, 20, 8, -2, 49];
  insertionSort(arr: number[]) {
    //Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time by comparisons
    for (let i = 1; i < arr.length; i++) {
      let numberToInsert = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > numberToInsert) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = numberToInsert;
    }
    return arr;
  }

  quickSort(arr: number[]): number[] {
    //setting any element as pivot and make 2 diffeent array as left and right where it holds numbers less than pivot and greator than pivot respectively
    if (arr.length < 2) {
      return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] > pivot ? right.push(arr[i]) : left.push(arr[i]);
    }
    return [...this.quickSort(left), pivot, ...this.quickSort(right)];
  }

  mergeSort(arr: number[]): number[] {
    if (arr.length < 2) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return this.merge(this.mergeSort(leftArr), this.mergeSort(rightArr));
  }

  merge(leftArr: number[], rightArr: number[]): any[] {
    let sortedArr = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(rightArr.shift());
      } else {
        sortedArr.push(leftArr.shift());
      }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
  }
}
