// https://leetcode.com/problems/counter-ii/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let presentCount = init;

    function increment(){
        return ++presentCount;
    }
    function reset(){
        return (presentCount = init);
    }
    function decrement(){
        return --presentCount;
    }
    return {increment, decrement, reset};
};
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */