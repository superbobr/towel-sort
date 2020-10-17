module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
  return [];
    }
    let result = [];
    for (let element in matrix) {
        if (element % 2 === 1) {
            result.push(...matrix[element].sort((a, b) => a - b).reverse());
        } else {
            result.push(...matrix[element].sort((a, b) => a - b));
        }
    }
    return result;
};
