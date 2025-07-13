// https://leetcode.com/problems/fibonacci-number/description/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1) return n;
        let a = 0, b = 1;

        for(let i=2; i<=n; ++i){
            let temp = a+b;
            a=b;
            b=temp;
        }
        return b;
};
