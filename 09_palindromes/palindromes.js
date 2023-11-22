const palindromes = function (str) {
    
	if (str.length === 0) {
		return false;
	}
	// let newString = [...str.match(/[a-zA-Z0-9]/g)].join('').toLowerCase();
    // console.log('newString :>> ', newString);
    // let newReverse = [... newString].reverse().join('');
    // console.log('newReverse :>> ', newReverse);
	// return newString === newReverse;
    let newStr = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    return newStr.split("").reverse().join("")===newStr
};

// Do not edit below this line
module.exports = palindromes;
