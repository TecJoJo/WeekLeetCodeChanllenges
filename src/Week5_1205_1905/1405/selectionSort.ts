function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      // we do the swap here
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([2, 7, 4, 8, 10, 9, 3]));
console.log(selectionSort([5, 7, 0, 5, 10, -3, 3]));

//completed this with AI assistance on small bug, where the let min = arr[i]; let minIndex = i; are put wrong places
//most of the time using was on the TS configuration...
