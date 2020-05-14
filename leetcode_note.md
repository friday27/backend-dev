# Leetcode Note

## TODOs

* Pass by value and pass by reference in JS
* in v.c. includes
* The meaning of ^ operator (136. Single Number)

* Review and check time and space complexity

* Design patterns - handwriting note!

* To Read
  * [Top Node.js Interview Questions You Must Prepare In 2020](https://www.edureka.co/blog/interview-questions/top-node-js-interview-questions-2016/)

  * [The Comprehensive Guide to JavaScript Design Patterns](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)
  * [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#introduction)
  * [4 JavaScript Design Patterns You Should Know](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)

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
104\. Maximum Depth of Binary Tree  

    // if the node does not exist, simply return 0. Otherwise, return the 1+the longer distance of its subtree.
    var maxDepth = function(root) {
      if (!root) return 0;
      return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    };

107\. Binary Tree Level Order Traversal II  
108\. Convert Sorted Array to Binary Search Tree **(To Be Improved)**  
110\. Balanced Binary Tree  
111\. Minimum Depth of Binary Tree (time: O(n), space: O(n) for BFS)  
112\. Path Sum (time: O(n)  for DFS)  
118\. Pascal's Triangle  
119\. Pascal's Triangle II  
121\. Best Time to Buy and Sell Stock  
122\. Best Time to Buy and Sell Stock II  
125\. Valid Palindrome

    // replace other than alphanumeric
    const strippedString = s.replace(/\W/g, '');

136\. Single Number

    var singleNumber = function(nums) {
      return nums.reduce((prev, curr) => prev^curr, 0);
    };

141\. Linked List Cycle  
169\. Majority Element

    // my solution: map
    // a simple but slow version:  O(nlogn)
    var majorityElement = function(nums) {
      nums.sort((a, b) => a-b);
      return nums[Math.floor(nums.length/2)];
    };

278\. First Bad Version  
367\. Valid Perfect Square (a square number is 1+3+5+7+...)  
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

733\. Flood Fill  
771\. Jewels and Stones  
993\. Cousins in Binary Tree  
997\. Find the Town Judge  
1232\. Check If It Is a Straight Line （[三點共線行列式](https://xyzghio.xyz/threePointInlineDiscriminance/), or you can compare slopes)

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

8\. String to Integer (atoi)  
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

15\. 3Sum  
17\. Letter Combinations of a Phone Number (To be improved)  
19\. Remove Nth Node From End of List  
22\. Generate Parentheses

    var generateParenthesis = function(n) {
      const res = [];

      function generate(left, right, str) {
        if (left > right) return;
        if (left === 0 && right === 0) {
          res.push(str);
          return;
        }
        if (left > 0) generate(left-1, right, str+'(');
        if (right > 0) generate(left, right-1, str+')');
      };

      generate(n, n, '');
      return res;
    };

24\. Swap Nodes in Pairs (time: O(n))

    var swapPairs = function(head) {
      if (!head || !head.next) return head;
      const p1 = head, p2 = head.next, p3 = p2.next;
      p2.next = p1;
      p1.next = swapPairs(p3);
      return p2;
    };

29\. Divide Two Integers **[Read](https://leetcode.com/problems/divide-two-integers/discuss/13516/JavaScript-solution-with-O(logN)-time-and-O(logN)-stack-space)**  
208\. Implement Trie (Prefix Tree) **[Read](https://leetcode.com/problems/implement-trie-prefix-tree/discuss/58965/Concise-JavaScript-solution)**  
402\. Remove K Digits (time: O(n))

    var removeKdigits = function(num, k) {
      if (k >= num.length) return '0';

      let remove = 0;
      const stack = [];
      for (let n of num) {
        while (stack.length && n < stack[stack.length-1] && remove < k) {
          stack.pop();
          remove++;
        }
        stack.push(n);
      }

      while (remove < k) {
        stack.pop();
        remove++;
      }

      while (stack.length && stack[0] === '0') {
        stack.shift();
      }

      return stack.length? stack.join(''): '0';
    };

540\. Single Element in a Sorted Array (time: O(n)) **(To Be Improved)**  
