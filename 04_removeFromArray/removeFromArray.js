
//remove 1+ items
// remove same type

//plan
//psudo code
//create new empty array
//for each element of the array, 
// if they are not in the argument list, then add to the new empty array.
//return new empty array

const removeFromArray = function(arr, ... args) {
    // const resultArr = [];
    // for (const item of arr){
    //     if(!arg.includes(item))
    //         resultArr.push(item)
    // }
    // return resultArr;
    return arr.filter((item)=> !args.includes(item));
    // const finalArr=arr;
    // for(let i=1;i<arguments.length;i++){
    //     let indexOfItem=finalArr.indexOf(arguments[i]);
    //     if(indexOfItem>-1)
    //         finalArr.splice(indexOfItem,1);
    // }
    
    // return finalArr;
}

const final = removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
// Do not edit below this line
module.exports = removeFromArray;
