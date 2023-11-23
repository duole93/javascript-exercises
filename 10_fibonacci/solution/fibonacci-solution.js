const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let firstPrev = 1; //second
    let secondPrev = 0; //first 
    
    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

module.exports = fibonacci;
