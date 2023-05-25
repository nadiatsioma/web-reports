const arr = [3, 0, 8, 5, 67, 7];
console.log("Початковий масив: ", arr);

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const sortedArr = bubbleSort(arr);
console.log("Відсортований масив: ", sortedArr);
