// Write an algorithm so that if an element in an M x N matrix is 0, the entire row and column are set to 0.

// Goal: A matrix like:
// [
//   1, 0, 3, 4, 5,
//   1, 2, 3, 4, 5,
//   1, 2, 3, 4, 5,
//   1, 2, 3, 4, 5
// ]
// would change to:
// [
//   0, 0, 0, 0, 0,
//   1, 0, 3, 4, 5,
//   1, 0, 3, 4, 5,
//   1, 0, 3, 4, 5
// ]

#include <iostream>
#include <cstdlib>

// define matrix column size as global constant so we can pass to a function
const int COLS = 4;



int main() {

  //create a matrix that has dimensions m x n, of random ints between 0 and 9
  int m = 3;
  int n = COLS;
  int matrix[m][n];
  std::cout << "Original matrix: \n[ \n";
  for(int i=0; i<m; i++) {
    for(int j=0; j<n; j++) {
      matrix[i][j] = rand() % 10;
      std::cout << "  " << matrix[i][j];
    }
    std::cout << std::endl;
  }
  std::cout << "] \n";

  return 0;
}

// remember: arrays are default passed by reference (matr[] is a pointer to the first element of the matrix). Adding const makes it so we are not allowed to modify the original array.
void zeroMatrix(const int matr[][COLS], int rows) {
  return;
}
