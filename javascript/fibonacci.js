// GOAL: for sequence starting 1, 1, 2, 3, 5 ... return nth number of the sequence.
// example: getNthFib(4) => 3 because the 4th number of the sequence = 3.

function getNthFib(n) {
  if(n < 2) {
    return n
  } else {
    return getNthFib(n-1) + getNthFib(n-2)
  }
}


// test, print first 10 numbers
for(let i=1; i<10; i++) {
  console.log(getNthFib(i))
}
