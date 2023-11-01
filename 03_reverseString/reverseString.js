const reverseString = function(str) {
    // let finalStr='';
    // let i=str.length-1;
    // while (i>=0){
    //     finalStr+=str[i];
    //     i--;
    // }
    // return finalStr;
    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
