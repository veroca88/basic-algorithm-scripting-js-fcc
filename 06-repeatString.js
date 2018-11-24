/* Basic Algorithm Scripting: Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. */
function repeatStringNumTimes (str, num) {
  var repeatString = ''
  for (var i = 0; i < num; i++) {
    repeatString = repeatString.concat(str)
  } return (repeatString)
}

repeatStringNumTimes('abc', 3)
