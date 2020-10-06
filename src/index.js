
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return Array.isArray(matrix) ? matrix.map((res, i) => i % 2 ? res.reverse() : res).flat() : [];
}
