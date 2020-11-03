// This checks for if the given string is palindrome
// or not
function palindrome(originalStr) {
  // First I'm going to rip it letter by letter. 
  // So it becomes array
  let strippedStr = originalStr.split('');

  // I will make a copy of strippedStr and reverse them
  let strippedStrReversed = strippedStr.slice().reverse();

  // And make that as a string by using join method
  let reversedStr = strippedStrReversed.join('');
  
  if (originalStr == reversedStr) {
    console.log(`'${originalStr}'는 거꾸로해도 '${reversedStr}'가 맞습니다.`);
  } else {
    console.log(`'${originalStr}'는 거꾸로하면 '${reversedStr}'기 때문에 회문이 아니쥬~?`);
  }
}


palindrome('이효이');