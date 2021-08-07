
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const sorted = [];
  if(!matrix || matrix.lenght == 0) {
    return []; 
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if ( i % 2) {
        let reversedEl = matrix[i].reverse();
        sorted.push(...reversedEl);
      } else {
        sorted.push(...matrix[i]);
      }
    }
  }
  return sorted;
}
