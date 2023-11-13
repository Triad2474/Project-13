/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    //store the n value to the y var
    let y=n-1
    
    return function() {
        //return the value of y+1
       return y+=1

    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */