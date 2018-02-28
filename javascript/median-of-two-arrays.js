// Find the median of all of the values from two sorted arrays.
// Runtime should be O(log(n))

let nums1 = [1, 2]
let nums2 = [3, 4]
// Goal: 2.5

let nums3 = [1, 3]
let nums4 = [2]
// Goal: 2.0

let nums5 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
let nums6 = [0,6]

var findMedianSortedArrays = function(nums1, nums2) {
    // make copies of arrays so I can safely modify them
    let arr1 = [...nums1]
    let arr2 = [...nums2]

    console.log(arr1.length)
    console.log(arr2.length)

    // find the halfway point
    let midIndex = (arr1.length + arr2.length)/2

    console.log(midIndex)

    // go through arrays, shift() the lower number of index=0 for either array, add to counter, until you go through midIndex number of elements.
    let mostRecent = 0
    for(let i=0; i<midIndex; i++) {
      mostRecent = getNext(arr1, arr2)
      console.log(mostRecent)
    }

    if(midIndex%1 === 0) {
    // if midIndex is a whole number, take two middle numbers and find average
      let next = getNext(arr1, arr2)
      console.log("next: ", next)
      return (mostRecent + next)/2
    } else {
    // if midIndex is x.5, take the middle number
      return mostRecent
    }

    function getNext(a1, a2) {
      if(a1[0]!==undefined && a2[0]!==undefined && arr1[0]<arr2[0]) {
        return a1.shift()
      } else if(a1[0]!==undefined && a2[0]!==undefined) {
        return a2.shift()
      } else if(a1[0]!==undefined) {
        return a1.shift()
      } else {
        return a2.shift()
      }
    }

};

//test
console.log("Result: ", findMedianSortedArrays(nums5, nums6))
