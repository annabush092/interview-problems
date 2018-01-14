// Given a string, write a function that returns that string in reverse.

let s = "Hello"
// Goal: return "olleH"

function reverseString(str) {
  let revArr = []
  for(let i=str.length-1; i>=0; i--) {
    revArr.push(str[i])
  }
  return revArr.join("")
}

reverseString(s)
