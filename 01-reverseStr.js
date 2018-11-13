/* Basic Algorithm Scripting: Reverse a String.
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
Remember to use Read-Search-Ask if you get stuck. Write your own code. */
function reverseString (str) {
  let newString = ''
  for (let i = 0; i < str.length; i++) {
    newString = str[i] + newString
  }
  return newString
}

reverseString('hello')
