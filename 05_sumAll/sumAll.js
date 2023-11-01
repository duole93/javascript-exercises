const sumAll = function (num1, num2) {
	let sum = 0;
	if (
		num1 < 0 ||
		num2 < 0 ||
		!Number.isInteger(num1) ||
		typeof num2 !== "number"
	)
		return "ERROR";
	//loop
	let [min, max] = [num1, num2];
	if (num1 > num2) [min, max] = [num2, num1];

	for (let i = min; i <= max; i++) {
		sum += i;
	}
	return sum;

	//no loop
	// return sum=(Math.abs(num1-num2)+1)*(num1+num2)/2;
};

// Do not edit below this line
module.exports = sumAll;
