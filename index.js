function bruteForceTwoSum(a, sum) {
  let sumArray = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] === sum) {
        sumArray.push([a[i], a[j]])
      }
    }
  }
  return sumArray;
}

function binarySearchTwoSum(array, sum) {

}

function hashTwoSum(array, sum) {
  let hashTable = {};
  let sumArray = [];
  for (let i = 0; i < array.length; i++) {
    let potentialMatch = sum - array[i];
    if (potentialMatch in hashTable) {
      sumArray.push([potentialMatch, array[i]])
    } else {
      hashTable[array[i]] = true;
    }
  }

  return sumArray;
}