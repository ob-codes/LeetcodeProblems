/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let result = [];

  let top = 0, left = 0, bottom = rows - 1, right = cols - 1, count = 0;
  
  while (count < rows*cols) {
    //left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
      count++;
    }
    top++;

    if (count == rows*cols)
      break;

    //top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
      count++;
    }
    right--;

    if (count == rows*cols)
      break;

    //right to left
    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
      count++;
    }
    bottom--;
    
    if (count == rows*cols)
      break;

    //bottom to top
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
      count++;
    }
    left++;

    if (count == rows*cols)
      break;
  }
  
  return result;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));//[1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));//[1,2,3,4,8,12,11,10,9,5,6,7]