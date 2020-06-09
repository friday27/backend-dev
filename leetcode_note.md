# Leetcode Note

## TODOs

* Pass by value and pass by reference in JS
* in v.c. includes
* The meaning of ^ operator (136. Single Number)
* bit manipulation
* JS regex matching

* Study + Review + Complexity

* Design patterns - handwriting note!

* To Read
  * [Top Node.js Interview Questions You Must Prepare In 2020](https://www.edureka.co/blog/interview-questions/top-node-js-interview-questions-2016/)

  * [The Comprehensive Guide to JavaScript Design Patterns](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)
  * [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#introduction)
  * [4 JavaScript Design Patterns You Should Know](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)

## Notes

* [3 ways to merge 2 arrays](https://www.samanthaming.com/tidbits/49-2-ways-to-merge-arrays/)

      const arr1 = [1,2,3];
      const arr2 = [4,5,6];

      // method 1: using oncat with 2 versions
      console.log([].concat(arr1, arr2));
      console.log(arr1.concat(arr2));
      
      // method 2: using spread
      console.log([...arr1, ...arr2]);

      // method 3: using push
      console.log(arr1.push(...arr2));

* Create an array with elements from 1 to n

      const nums = Array.from({length: n}, (v, i) => i+1);

* Deep copy an array

      const nums2 = nums.slice();

* One-line swap

      [nums[i], nums[j]] = [nums[j], nums[i]];

## Easy Problems

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
155\. Min Stack  
160\. Intersection of Two Linked Lists  
167\. Two Sum II - Input array is sorted  
168\. Excel Sheet Column Title **(Review - recursive)**  
169\. Majority Element

    // my solution: map
    // a simple but slow version:  O(nlogn)
    var majorityElement = function(nums) {
      nums.sort((a, b) => a-b);
      return nums[Math.floor(nums.length/2)];
    };

171\. Excel Sheet Column Number  
172\. Factorial Trailing Zeroes **(Review - recursive)**  
189\. Rotate Array  
191\. Number of 1 Bits  
198\. House Robber **(Review)**  
202\. Happy Number  
203\. Remove Linked List Elements  
204\. Count Primes

    var countPrimes = function(n) {
      let flagArray = [], result = 0;
      for(let i = 2; i < n; i++){
        if(flagArray[i] === undefined){
          // is Primes
          flagArray[i] = 1;
          result++;
          // rm it's multiples
          let j = 2;
          while(i * j < n){
            flagArray[i * j] = 0;
            j++;
          }
        }
      }
      return result;
    };

205\. Isomorphic Strings **(Study!)**  
206\. Reverse Linked List  
217\. Contains Duplicate  
278\. First Bad Version  
219\. Contains Duplicate II  
225\. Implement Stack using Queues  
226\. Invert Binary Tree  
231\. Power of Two  

    // (n & (n-1)) 消除到剩 1 or 0
    var isPowerOfTwo = function(n) {
      return n > 0 && (n & (n - 1)) === 0;
    };

232\. Implement Queue using Stacks  
234\. Palindrome Linked List  
235\. Lowest Common Ancestor of a Binary Search Tree  
237\. Delete Node in a Linked List  
242\. Valid Anagram  
257\. Binary Tree Paths  
258\. Add Digits  
263\. Ugly Number  
268\. Missing Number  
283\. Move Zeroes  
290\. Word Pattern  
292\. Nim Game

    var canWinNim = function(n) {return (n % 4 !== 0};

299\. Bulls and Cows  
303\. Range Sum Query - Immutable  
326\. Power of Three **(Review)**  
342\. Power of Four  
344\. Reverse String  
345\. Reverse Vowels of a String  
349\. Intersection of Two Arrays  
350\. Intersection of Two Arrays II  
389\. Find the Difference (XOR operation)  
392\. Is Subsequence  
367\. Valid Perfect Square (a square number is 1+3+5+7+...)  
374\. Guess Number Higher or Lower  
383\. Ransom Note  
387\. First Unique Character in a String

    var firstUniqChar = function(s) {
      for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
      }
      return -1;
    };

404\. Sum of Left Leaves  
405\. Convert a Number to Hexadecimal  
409\. Longest Palindrome  
412\. Fizz Buzz  
414\. Third Maximum Number  
415\. Add Strings  
434\. Number of Segments in a String  
437\. Path Sum III  
441\. Arranging Coins  
448\. Find All Numbers Disappeared in an Array  
455\. Assign Cookies  
459\. Repeated Substring Pattern  
461\. Hamming Distance  

    // By default JavaScript will only replace the first matching value it finds
    // Use /g to replace all matching characters
    str.replace(/0/g, '');

463\. Island Perimeter  
476\. Number Complement (same as 1009.Complement of Base 10 Integer) (binary !!!)

    const findComplement = function(num) {
      num = num.toString(2);
      let complement = '';
      for (let n of num) {
        complement += n === '0'? '1': '0';
      }
      return parseInt(complement, 2);
    };

482\. License Key Formatting  
485\. Max Consecutive Ones  
496\. Next Greater Element I  
500\. Keyboard Row  
501\. Find Mode in Binary Search Tree (To Be Improved)  
504\. Base 7  
506\. Relative Ranks  
507\. Perfect Number  
509\. Fibonacci Number  
520\. Detect Capital  
532\. K-diff Pairs in an Array (Review)  
538\. Convert BST to Greater Tree **(Study)**  
543\. Diameter of Binary Tree **(Review)**  
551\. Student Attendance Record I  
557\. Reverse Words in a String III  
559\. Maximum Depth of N-ary Tree  
561\. Array Partition I  
733\. Flood Fill  
771\. Jewels and Stones  
993\. Cousins in Binary Tree  
997\. Find the Town Judge  
1029\. Two City Scheduling  
1232\. Check If It Is a Straight Line （[三點共線行列式](https://xyzghio.xyz/threePointInlineDiscriminance/), or you can compare slopes)

## Medium Problems

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

12\. Integer to Roman  
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
33\. Search in Rotated Sorted Array **(Review)**  
34\. Find First and Last Position of Element in Sorted Array **(To be improved from O(n) to O(log n))**  
36\. Valid Sudoku  **(Review)**  
39\. Combination Sum **(Study)**  
40\. Combination Sum II (see 39)  
43\. Multiply Strings **(Review)**  
46\. Permutations  
47\. Permutations II  

    var rotate = function(matrix) {
      matrix = matrix.reverse();
      for (let i = 0; i < matrix.length; i++) {
        for (let j = i+1; j < matrix.length; j++) {
          const tmp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = tmp;
        }
      }
    };

49\. Group Anagrams  
50\. Pow(x, n) **(Review: recursive)**  
55\. Jump Game  
56\. Merge Intervals  
61\. Rotate List  
62\. Unique Paths **(Review!)**  
63\. Unique Paths II  
64\. Minimum Path Sum  
71\. Simplify Path  
73\. Set Matrix Zeroes  
74\. Search a 2D Matrix  
75\. Sort Colors  
77\. Combinations  
78\. Subsets  

    // append new element to the reference variable
    arr.concat(nums[i])

79\. Word Search **(Study!)**  
80\. Remove Duplicates from Sorted Array II (To Be Improved)  
208\. Implement Trie (Prefix Tree) **[Read](https://leetcode.com/problems/implement-trie-prefix-tree/discuss/58965/Concise-JavaScript-solution)**  
230\. Kth Smallest Element in a BST  
328\. Odd Even Linked List  
338\. Counting Bits  
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

406\. Queue Reconstruction by Height **(Study)**  
438\. Find All Anagrams in a String (sliding window)  
451\. Sort Characters By Frequency  

    // sort dict by values
    const sorted = Object.keys(hmap).sort((a, b) => hmap[b] - hmap[a])

    // repeat char
    result += char.repeat(hmap[char])

518\. Coin Change 2 **(Study)**  
525\. Contiguous Array **(Review)**  
528\. Random Pick with Weight  
540\. Single Element in a Sorted Array (time: O(n)) **(To Be Improved)**  
567\. Permutation in String (sliding window) **(To be improved from O(n) to O(log n))**  
886\. Possible Bipartition **(Study!)**  
901\. Online Stock Span **(Review)**  
918\. Maximum Sum Circular Subarray **[Read](https://leetcode.com/problems/maximum-sum-circular-subarray/discuss/178422/One-Pass)**  
973\. K Closest Points to Origin  
986\. Interval List Intersections **(Review)**  
1008\. Construct Binary Search Tree from Preorder Traversal  
1035\. Uncrossed Lines **(Study: DP!)**  
1277\. Count Square Submatrices with All Ones **(Review)**  

## SQL

175\. Combine Two Tables  
176\. Second Highest Salary

    select (
      select distinct Salary
      from Employee
      order by Salary desc
      limit 1 offset 1) as SecondHighestSalary;

181\. Employees Earning More Than Their Managers  
182\. Duplicate Emails

    select Email
    from Person
    group by Email
    having count(Email) > 1;

183\. Customers Who Never Order
196\. Delete Duplicate Emails

    delete p1
    from Person p1, Person p2
    where p1.Email = p2.Email
    and p1.Id > p2.Id;

197\. Rising Temperature

    SELECT a.Id
    FROM Weather a, Weather b
    WHERE DATEDIFF(a.RecordDate, b.RecordDate)=1 
    AND a.Temperature > b.Temperature;
