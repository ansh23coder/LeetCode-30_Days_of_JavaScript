// https://leetcode.com/problems/add-two-promises/

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
  // Wait for both promises to resolve and retrieve their values
  const [value1, value2] = await Promise.all([promise1, promise2]);
  
  // Return a new promise that resolves with the sum of the values
  return value1 + value2;
};
/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */