// Given an integer, write a function that returns that integer with the numbers in reverse.

let posInt = 123
// Goal: return 321

function revInt(n) {
  // make a copy of n and change it to a positive number if it is negative
  let posN = n<0 ? (n * -1) : (n)

  // convert posN to an array and reverse it
  let revArr = posN.toString().split("").reverse()

  // convert back to an integer
  let revInt = parseInt(revArr.join(""))

  // Return the reversed integer. If the original number was negative, change it back to a negative.
  return (n<0 ? (revInt * -1) : (revInt))
}

//test on positive number
revInt(posInt)

//test negative numbers
let negInt = -123
revInt(negInt)
