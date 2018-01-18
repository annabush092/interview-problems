// Write a function that takes an integer and returns true/false if it is a self descriptive integer.
// A self descriptive integer is an integer in which every digit is the number of times that the current index number shows up in the number. So...

// 2020 is self descriptive, because:

// 0 1 2 3  //indexes of the number as a string
//"2 0 2 0" //digits of the number

// From left to right:
// index 0: there are 2 0's in 2020.
// index 1: there are 0 1's in 2020.
// index 2: there are 2 2's in 2020.
// index 3: there are 0 3's in 2020.

let myInt = 2020;
// Goal: return true
let notDescr = 1111;
// Goal: return false

function selfDescriptiveInt(n) {
  let str = n.toString();

  // create an array the length of the string, of all 0's. eg: [0, 0, 0, 0]
  let numMap = [];
  for(let i=0; i<str.length; i++) {
    numMap.push(0)
  }

  // The elements of the array will be a count of how many times the index number is found.
  // eg: numMap[0] => How many 0's are in the string
  for(let i=0; i<str.length; i++) {
    // if the digit is higher than the length of the string, it cannot be self descriptive.
    if (numMap.length <= str[i]) {
      return false;
    } else {
      // increment the count for the current digit
      numMap[str[i]] += 1;
    }
  }

  // check if the number is self descriptive by comparing the count in numMap to the str digit
  for (let i=0; i<numMap.length; i++) {
    // convert both to integers. If they are not equal, it is not self descriptive.
    if (numMap[i] !== +str[i]) {
      return false
    }
  }
  // If we made it this far... it's self descriptive!
  return true
}

// test known self-descriptive number
selfDescriptiveInt(myInt)

// test known not self-descriptive number
selfDescriptiveInt(notDescr)
