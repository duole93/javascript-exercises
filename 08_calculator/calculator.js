// 2 arguments

const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

//array
const sum = function(arr) {
	// if(arr.length===0)
  //   return 0;
  // else  
  //   return (arr[0] + sum (arr.slice(1)));
  if(arr.length===0)
    return 0;
  return arr.reduce((sum,value)=> sum+value,0);
};

const multiply = function(arr) {
  // let total=1;
  if(arr.length===0)
    return 0;
  // for (const num of arr){
  //   total *=num;
  // }
  return arr.reduce((total, value)=>total*value);
};
//2 arguments
const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	let facto = 1;
  if(num===0)
    return 1;
  for (let i=1;i<=num;i++)
    facto=multiply([i,facto]);
  return facto;
};
let s= sum([]);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
