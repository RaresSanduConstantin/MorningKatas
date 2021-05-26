/* 
Kata 10.05.2021

Task
Given a matrix, find its submatrix obtained by deleting the specified rows and columns.

Input/Output
[input] 2D integer array matrix

2-dimensional array of integers.

1 ≤ matrix.length ≤ 10,

1 ≤ matrix[0].length ≤ 10,

0 ≤ matrix[i][j] ≤ 9.

[input] integer array rowsToDelete

Array of indices (0-based) of rows to be deleted.

0 ≤ rowsToDelete.length ≤ 5,

0 ≤ rowsToDelete[i] < matrix.length.

[input] integer array columnsToDelete

Array of indices (0-based) of columns to be deleted.

0 ≤ columnsToDelete.length ≤ 5,

0 ≤ columnsToDelete[i] < matrix[0].length.

[output] 2D integer array

Example
For

matrix = [
[1, 0, 0, 2], 
[0, 5, 0, 1], 
[0, 0, 3, 5]
]
rowsToDelete = [1] and columnsToDelete = [0, 2]
the output should be

[ [0, 2], [0, 5] ]
*/

function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  //coding and coding..
  if (rowsToDelete.length > 0) {
    for (let k = 0; k < rowsToDelete.length; k++) {
      matrix.splice(rowsToDelete[k], 1, undefined);
      matrix[k] = matrix[k].filter((el) => el !== undefined);
    }
  }

  if (columnsToDelete.length > 0) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < columnsToDelete.length; j++) {
        matrix[i].splice(columnsToDelete[j], 1, undefined);
      }
      matrix[i] = matrix[i].filter((el) => el !== undefined);
    }
  }
  console.log('test', matrix);

  return matrix;
}

/* 
  matrix =
  [
  [3,8,8,7,5,7], 
  [1,5,6,8,2,7], x
  [6,1,3,7,8,3], x
  [3,7,5,7,0,0],
  [2,5,1,7,3,0],
  [6,4,4,8,9,5], x
  [3,5,5,2,5,3], x
  [4,5,5,2,2,5], 
  [6,4,2,5,5,3]  x
  ]
   */
let newArr = matrix
  .filter((rowElement, rowIndex) => {
    return rowsToDelete.indexOf(rowIndex) < 0;
  })
  .map((e, i) => {
    e = e.filter((colElement, colIndex) => {
      return columnsToDelete.indexOf(colIndex) < 0;
    });
    return e;
  });
