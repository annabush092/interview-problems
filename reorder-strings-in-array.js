let arr = ["ABC", "123", "asd"]
// goal: return ["A1a", "B2s", "C3d"]

function reorderStrings(arr) {

  let splitArr = arr.map(el=>{
    return el.split('')
  })

  let newSplitArr = []

  for(let j=0; j<splitArr.length; j++) {
    for(let i=0; i<splitArr[j].length; i++) {
      if(newSplitArr[i]){
        newSplitArr[i].push(splitArr[j][i])
      } else {
        newSplitArr.push([splitArr[j][i]])
      }
    }
  }

  return newSplitArr.map(smallArr => {
    return smallArr.join('')
  })

}

reorderStrings(arr)
