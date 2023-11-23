const fibonacci = function (num) {
	let tempNum = parseInt(num);

	if(tempNum<0){
		return "OOPS";
	}
	if (tempNum === 0) return 0;
	
	let first = 0;
	let second = 1;
	let current = 1;

	//num>2
	for( let i = 2; i<=tempNum; i++){
			
			current = second + first;
			first = second;
			second= current;
			
	}

	return current;
	
};

// Do not edit below this line
module.exports = fibonacci;

/**
 *  assume num > 3
 *  empty array
 * loop i=1; i<n=num; i++
 * array.push(i+i-1);
 *
 * num=3
 * i=1 -> array.push(1+1-1) = [1]
 * i=2 -> array.push(2+1) = [1,3]
 */
