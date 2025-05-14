//This problem is being given pseudo code, so it would anyway be solved completely by myself

function swap(a, b) {
  const temp = a;
  a = b;
  b = temp;
  return [a, b];
}
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const [a, b] = swap(arr[j], arr[j + 1]);
        arr[j] = a;
        arr[j + 1] = b;
      }
    }
  }
  return arr;
}

//try it out

console.log(bubbleSort([3, 7, 11, 2, 6, 3, 8, 2]));
console.log(bubbleSort([3, 20, 11, 5, 6, 9, 8, 1]));

//Problem solved using provided pseudo code but without any AI assistance
