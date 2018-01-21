// Given a string, find the length of the longest substring with no duplicate characters

let s = "abca"
// Goal: return 3 (the length of "abc" or of "bca" without repeating any characters)

function longestUniqSubstr(str) {
  let usedObj = {}
  let longest = 0
  let beg = 0

  for(let i=0; i<str.length; i++) {

    // if the char has never been encountered/added to usedObj,
    // or if it is found but located before the beginning of the substring, thus irrelevant to the current substring we are testing
    if((usedObj[str[i]] === undefined) || usedObj[str[i]]<beg) {

      // test if the current substring is longer than the previous longest, and replace the value if it is
      if(longest <= (i - beg)) {
        // + 1 offesets the 0 index to make an accurate count
        longest = (i - beg) + 1
      }
    } else {
      // if the char is already in the substring, move the beginning index of the substring forward to the char directly after the duplicate
      beg = usedObj[str[i]] + 1
    }
    // add the current element to the object, as {character, index in str}, or replace the old index if it's a duplicate
    usedObj[str[i]] = i
  }

  return longest
}

//test
longestUniqSubstr(s)

//test more complex string
let biggerS = "abcaaebcda"
longestUniqSubstr(biggerS)
