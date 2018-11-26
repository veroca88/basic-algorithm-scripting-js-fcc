/* Basic Algorithm Scripting: Slice and Splice. You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs. */
function frankenSplice (arr1, arr2, n) {
  var arrConcave = arr2.slice()
  for (var i = 0; i < arr1.length; i++) {
    arrConcave.splice(n++, 0, arr1[i])
  }
  return arrConcave
}
frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)
