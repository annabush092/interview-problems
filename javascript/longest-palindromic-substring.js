// given a string, return the longest substring that is a palindrome.

let str = "babad"
// Goal: "bab" or "aba", both are valid answers
let str2 = "abba"
let str3 = "abbcb"
let str4 = "aahjaagfdgankahvjhgkjlkjlaasknksjjjjjl;jlkjjjj"
let str5 = ""
let str6 = "a"

//this can be more optimized!
var longestPalindrome = function(s) {

  function isAPalindrome(str) {
    for(let i=0; i<Math.floor(str.length/2); i++) {
      if(str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
        return false
      }
    }
    return true
  }

  for(let i=s.length; i>0; i--) {
    for(let j=0; j<s.length; j++) {
      let subStr = s.slice(j, j+i)
      // if the substring is not long enough, move on to next smaller substrings
      if(subStr.length < i){
        break
      } else if(isAPalindrome(subStr)) {
        return subStr
      }
    }
  }

  return "no palindromes found"
};

//test
console.log("result: ", longestPalindrome(str6))
