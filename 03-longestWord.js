/* Basic Algorithm Scripting: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number.
Remember to use Read-Search-Ask if you get stuck. Write your own code. */
function findLongestWordLength (str) {
  var byWords = str.split(' ')
  var LongestWordLength = 0
  for (var i = 0; i < byWords.length; i++) {
    if (byWords[i].length > LongestWordLength) {
      LongestWordLength = byWords[i].length
    }
  }
  return LongestWordLength
}

findLongestWordLength('The quick brown fox jumped over the lazy dog')
