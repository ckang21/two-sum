# 🧮 Two Sum (Vanilla JavaScript)

This is a simple JavaScript implementation of the classic **Two Sum** problem using two different approaches: **brute force** and **hash map optimization**. Mostly just here to do a bit of practice and brush up on some skills

## 📌 Problem Statement

Given an array of integers `nums` and an integer `target`, return **indices of the two numbers** such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

## ✅ Example

Input: nums = [2, 7, 11, 15], target = 9  
Output: [0, 1] // because 2 + 7 = 9

## 🧠 Solutions

### Brute Force Approach

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

### Hash Map Approach

function twoSumMap(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const other = target - nums[i];

    if (map.has(other)) {
      return [map.get(other), i];
    }

    map.set(nums[i], i);
  }
  return [];
}

## 🧪 Test Cases

// Brute force version
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]
console.log(twoSum([3, 3], 6));         // [0, 1]

// Map version + no match
console.log(twoSumMap([2, 7, 11, 15], 9));    // [0, 1]
console.log(twoSumMap([3, 2, 4], 6));         // [1, 2]
console.log(twoSumMap([3, 3], 6));            // [0, 1]
console.log(twoSumMap([1, 2, 3, 4], 8));      // [] (no match)

## 🚀 How to Run

Make sure you have Node.js installed. Then in your terminal, run:

node two-sum.js

## 🧠 Notes

- The brute force solution is simple but slow: O(n²).
- The hash map solution improves performance to O(n) by trading space for time.
