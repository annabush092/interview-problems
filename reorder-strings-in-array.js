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

  return newArr.map(smallArr => {
    return smallArr.join('')
  })

}

reorderStrings(arr)
