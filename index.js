function twoSum(nums, target) { // Brute force method. We start at top and compare against all others in array then move to next and try again
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) { // Check if the nums added equal our target
        return [i, j];
      }
    }
  }
  return [];
}

function twoSumMap(nums, target) {  // More sophisticated we use a map here. Faster especially with bigger arrays
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const other = target - nums[i];

    if (map.has(other)) { // Check if we have a match in the map.
      return [map.get(other), i];
    }

    map.set(nums[i], i);  // Add the current numbber into the map. For future use
  }
  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]
console.log(twoSum([3, 3], 6));         // [0, 1]

// Again with map version plus a fail case.
console.log(twoSumMap([2, 7, 11, 15], 9));    // [0, 1]
console.log(twoSumMap([3, 2, 4], 6));         // [1, 2]
console.log(twoSumMap([3, 3], 6));            // [0, 1]
console.log(twoSumMap([1, 2, 3, 4], 8));      // [] (no match)