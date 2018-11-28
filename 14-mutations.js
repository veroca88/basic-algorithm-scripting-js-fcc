/* Basic Algorithm Scripting: Mutations. Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case. The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y". Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien". */
function mutation (arr) {
  var firstElement = arr[0].toLowerCase()
  var secondElement = arr[1].toLowerCase()
  for (var i = 0; i < secondElement.length; i++) {
    if (firstElement.indexOf(secondElement[i]) === -1) {
      return false
    }
  }
  return true
}

mutation(['hello', 'hey'])
