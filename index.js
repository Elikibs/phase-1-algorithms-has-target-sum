function hasTargetSum(array, target) {
  // Write your algorithm here
  const seen = new Set();
  
  for (let num of array) {
    const complement = target - num;

    if (seen.has(complement)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

/*
  Big O time complexity: O(n)
  The function iterates through the array once, where n is the length of the array. The Set data structure allows for constant time lookups, so the overall time complexity is O(n).

  Pseudocode:
  - Create an empty Set called 'seen' to store numbers seen in the array.
  - Iterate through each number 'num' in the input array:
    - Calculate the 'complement' by subtracting 'num' from the target.
    - Check if 'complement' is in the 'seen' Set. If found, return true as a pair exists.
    - Add 'num' to the 'seen' Set.
  - If the loop completes without finding a pair, return false as no pair adds up to the target.

Explanation:
The function uses a Set to efficiently track seen numbers while iterating through the array. It calculates the complement for each number and checks if it has been seen before. If a pair is found, it returns true; otherwise, it returns false.

You can test the function with the provided test cases and add your custom tests as needed.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
