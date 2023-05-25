const prompt = require("prompt-sync")();

function findMinMatchingElem(arr1, arr2) {
  const uniqueValues = [...new Set(arr2)];
  let minValue = Infinity;
  for (let i = 0; i < arr1.length; i++) {
    if (uniqueValues.includes(arr1[i])) {
      if (arr1[i] < minValue) {
        minValue = arr1[i];
      }
    }
  }
  return minValue;
}

const len1 = Number(prompt("Розмірність 1 масиву: "));
const len2 = Number(prompt("Розмірність 2 масиву: "));
const arr1 = new Array(len1);
const arr2 = new Array(len2);

for (let i = 0; i < arr1.length; i++) {
  arr1[i] = Number(prompt(`Введіть #${i + 1} 1 масиву: `));
}
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = Number(prompt(`Введіть #${i + 1} 2 масиву: `));
}

const minMatchingElem = findMinMatchingElem(arr1, arr2);
if (minMatchingElem === Infinity) {
  console.log("Значення не співпадають");
} else {
  console.log(`Найменший спільний елемент: ${minMatchingElem}`);
}
