// Given an array of integers and a target number, return two ints from the array that add up to the target number

let arr = [5, 7, 2, 3, 9]
let target = 10
// Goal: return [7, 3]

function twoSum(arr, target) {
  let triedObj = {}
  for(let i=0; i<arr.length; i++) {
    //find x for ( x + current element = target )
    let compliment = target - arr[i]

    // if any previous elements of the array match the compliment, return the twoSum
    if(triedObj[compliment]){
      return [compliment, arr[i]]
    // else, add the current element to the object to test against compliments of future iterations
    } else {
      triedObj[arr[i]] = 1  // value of the object does not matter
    }
  }
  // if no twoSum found, return null
  return null
}

//test
makeSum(arr, target)
