// https://leetcode.com/problems/convert-the-temperature/

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    return [celsius+273.15, celsius*1.8+32.00];
};
