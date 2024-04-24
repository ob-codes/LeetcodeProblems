/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let finalRow = matrix.length;
  let finalCol = matrix[0].length;
  let result = [];

  let top = 0, left = 0, bottom = finalRow - 1, right = finalCol - 1;
  
  while ((top <= bottom) && (left <= right)) {
    //left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    //top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      //right to left
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    } 
    if (left <= right) {
      //bottom to top
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  
  return result;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));//[1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));//[1,2,3,4,8,12,11,10,9,5,6,7]