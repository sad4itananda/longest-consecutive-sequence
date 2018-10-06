module.exports = function longestConsecutiveLength(array) {
	let obj = {}, res = 0;
	if (array.length == 1) { return 1};
	if (array.length == 0) { return 0};

	array.sort ( function(a, b) {return a - b});
	array = array.filter((num, index) => num != array[index + 1]);

	for (let i = 0, sum = 0; i < array.length; i++) {
		if (array[i + 1] - array[i] == 1) {sum++
		} else if (res < sum) {
			res = sum; sum = 0;
		} else sum = 0;
	}
	return res + 1;
};
