// given a string, return the longest substring that is a palindrome.

let str = "babad"
// Goal: "bab" or "aba", both are valid answers

var longestPalindrome = function(s) {

  function isAPalindrome(str) {
    for(let i=0; i<Math.floor(str.length/2); i++) {
      if(str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
        return false
      }
    }
    return true
  }


};

//test
console.log("result: ", longestPalindrome(str))
