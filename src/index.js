
// You should implement your task here.

module.exports = function towelSort (matrix) {

	if (matrix) {
		var b = [];
		matrix.forEach(function(item, index, array){if (index%2 != 0) item.reverse();b.push(item)})
  		return b.flat();
	}
	return [];
}
