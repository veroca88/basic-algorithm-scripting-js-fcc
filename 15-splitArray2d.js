/* Basic Algorithm Scripting: Chunky Monkey.** Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */
function chunkArrayInGroups (arr, size) {
  var newArr = []
  for (var i = 0; arr.length / size; i++) {
    newArr.push(arr.splice(0, size))
  }
  return newArr
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)
