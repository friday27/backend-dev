# Leetcode Note

## Easy Problems (Target: 100 / 321)

1\. Two Sum  
7\. Reverse Integer  
9\. Palindrome Number  
13\. Roman to Integer  
14\. Longest Common Prefix **(reduce !!!)**

    const longestCommonPrefix = function(strs) {
      if (strs === undefined || strs.length === 0) return '';
      return strs.reduce((prev, next) => {
          let i = 0;
          while (i < prev.length && i < next.length && prev[i] === next[i]) i++;
            return prev.slice(0, i);
      });
    };

20\. Valid Parentheses  
21\. Merge Two Sorted Lists (do not use condition to check null, use !variable instead)  
26\. Remove Duplicates from Sorted Array  
27\. Remove Element  
28\. Implement strStr()  
35\. Search Insert Position  
38\. Count and Say  
53\. **Maximum Subarray (TBR !!! Math.max())**

    var maxSubArray = function(nums) {
      for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i]+nums[i-1]);
      }
      return Math.max(...nums);
    };

58\. Length of Last Word  
66\. Plus One  
67\. Add Binary  

    var addBinary = function(a, b) {
      return (BigInt('0b'+a) + BigInt('0b'+b)).toString(2);
    };

69\. Sqrt(x) **Solve it without built-in methods !!!**  
70\. Climbing Stairs  
83\. Remove Duplicates from Sorted List **+1**  
88\. Merge Sorted Array **(Note: start from the end)**  
100\. Same Tree  
101\. Symmetric Tree  
169\. Majority Element

    // my solution: map
    // a simple but slow version:  O(nlogn)
    var majorityElement = function(nums) {
      nums.sort((a, b) => a-b);
      return nums[Math.floor(nums.length/2)];
    };

278\. First Bad Version  
383\. Ransom Note  
387\. First Unique Character in a String

    var firstUniqChar = function(s) {
      for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
      }
      return -1;
    };

476\. Number Complement (same as 1009.Complement of Base 10 Integer) (binary !!!)

    const findComplement = function(num) {
      num = num.toString(2);
      let complement = '';
      for (let n of num) {
        complement += n === '0'? '1': '0';
      }
      return parseInt(complement, 2);
    };

771\. Jewels and Stones  
993\. Cousins in Binary Tree  
1232\. Check If It Is a Straight Line （[三點共線行列式](https://xyzghio.xyz/threePointInlineDiscriminance/))

## Medium Problems (Target: 50)

2\. Add Two Numbers  
3\. **Longest Substring Without Repeating Characters (TBR !!!)**  
6\. [ZigZag Conversion](https://leetcode.com/problems/zigzag-conversion/discuss/614271/JavaScript-Solution)

    const mat = Array(3).fill('');
    // ['', '', '']

    let range = [...Array(5).keys()];
    // [0, 1, 2, 3, 4]

    let range2 = [...Array(5).keys].slice(1, 4).reverse();
    // [3, 2, 1]

11\. **Container With Most Water (TBR !!!)**

    var maxArea = function(height) {
      let maxArea = 0;
      let head = 0, tail = height.length - 1;
      while (head < tail) {
        const area = Math.min(height[head], height[tail]) * (tail-head);
        if (area > maxArea) maxArea = area;
        if (height[head] > height[tail]) tail--;
        else head++;
      }
      return maxArea;
    };
