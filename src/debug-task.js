function isPalindrome(str) {
  const reverseStr = str.toLocaleLowerCase().match(/\w/g).reverse().join('');
  const sourceStr = str.toLocaleLowerCase().match(/\w/g).join('');
  if (sourceStr === reverseStr) return true;
  return false;
}

isPalindrome('A man, a plan, a canal, Panama!');

function countVowels(str) {
  if (str) return str.match(/[aeiouyAEIOUY]/).length + 1;
  return 0;
}

countVowels('banana');
