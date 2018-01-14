// Given an array of strings, write a function to return a new array of strings, in which the first string is all of the first letters of the original array, the second string is all of the second letters of the original array, etc

let arr = ["ABC", "123", "asd"]
// goal: return ["A1a", "B2s", "C3d"]

function reorderStrings(arr) {

  //create an array to hold the altered strings
  let newArr = []

  //iterate through the original array
  for(let j=0; j<arr.length; j++) {

    // split each string into an array: "ABC" => ["A", "B", "C"]
    let smallArr = arr[j].split('')

    // loop through each newly created smallArray
    for(let i=0; i<smallArr.length; i++) {
      // if newArr already has started a new smallArray, add to it
      if(newArr[i]){
        newArr[i].push(smallArr[i])
      } else { //if no smallArray exists yet at this index, create a new smallArray
        newArr.push([smallArr[i]])
      }
    }
  }

  //join the small arrays back into strings: ["A", "1", "a"] => "A1a"
  return newArr.map(newSmallArr => {
    return newSmallArr.join('')
  })

}

//test simple case
reorderStrings(arr)

//test an array in which strings are different lengths
let weirdArr = ["ABCD", "123", "asdfg"]
reorderStrings(weirdArr)
