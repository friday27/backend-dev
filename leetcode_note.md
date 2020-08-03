# Leetcode Note

## :star: TODOs

* Pass by value and pass by reference in JS
* 2 sum -> 3 sum -> 4 sum
* 因數分解, 最大公因數與最小公倍數
* XOR operator (136. Single Number)
* bit manipulation
* JS regex matching

* Study + Review + Complexity
* Leetcode Collections
  * [Top Interview Questions](https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/)
  * [Binary Search](https://leetcode.com/explore/learn/card/binary-search/)
  * [Recursion I](https://leetcode.com/explore/featured/card/recursion-i/250/principle-of-recursion/)
  * [Recursion II](https://leetcode.com/explore/learn/card/recursion-ii/)
  * [Leetcode: ML concepts](https://leetcode.com/explore/featured/card/machine-learning-101/287/what_is_ml/)

* Design patterns - note!

* To Read
  * [Top Node.js Interview Questions You Must Prepare In 2020](https://www.edureka.co/blog/interview-questions/top-node-js-interview-questions-2016/)
  * [The Comprehensive Guide to JavaScript Design Patterns](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)
  * [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#introduction)
  * [4 JavaScript Design Patterns You Should Know](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)

## :book: Notes

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

* Array shuffle

      function shuffle(a) {
        for (let i = a.length-1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }

* One-line swap

      [nums[i], nums[j]] = [nums[j], nums[i]];

* Generate random int

      const idx = Math.floor(Math.random() * max);
      // max is not included

* Find element in an array with `arr.includes(elem)` since the runtime is shorter than arr.indexOf(elem)

* Use `Array.from(set)` rather than [...set]

* Replace characters `str.replace(/[!?',;.]/g, '')`

* Regex
  * str.match(pattern) returns matched results. Use `typed.match(pattern) !== null` to get true/false.

* For iterative, use concat() instead of slice(), push() and pop()

      // arr.push(nums[i]);
      // pick(i+1, arr);
      // arr.pop();

      pick(i+1, arr.concat(nums[i]));

## Data Structures and Algorithms Problems

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

14\. Longest Common Prefix **(reduce !!!)**

    const longestCommonPrefix = function(strs) {
      if (strs === undefined || strs.length === 0) return '';
      return strs.reduce((prev, next) => {
          let i = 0;
          while (i < prev.length && i < next.length && prev[i] === next[i]) i++;
            return prev.slice(0, i);
      });
    };

15\. 3Sum  

    var threeSum = function(nums) {
      nums = nums.sort((a, b) => a-b);
      const res = [];

      for (let i = 0; i < nums.length-2; i++) {
        if (nums[i] === nums[i-1]) continue;
        let lo = i + 1;
        let hi = nums.length - 1;
        let sum = 0 - nums[i];
        while (lo < hi) {
          if (nums[lo] + nums[hi] === sum) {
            res.push([nums[lo], nums[hi], nums[i]]);
            while (nums[lo] === nums[lo+1]) lo++;
            while (nums[hi] === nums[hi-1]) hi--;
            lo++;
            hi--;
          } else if (nums[lo] + nums[hi] < sum) lo++;
          else hi--;
        }
      }
      return res;
    };

16\. 3Sum Closest (To be improved)  
17\. Letter Combinations of a Phone Number (To be improved)  
18\. 4Sum  (To be improved)  
21\. Merge Two Sorted Lists (do not use condition to check null, use !variable instead)  
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
31\. Next Permutation **(Study!)**  
33\. Search in Rotated Sorted Array **(Review)**  
34\. Find First and Last Position of Element in Sorted Array **(To be improved from O(n) to O(log n))**  
36\. Valid Sudoku  **(Review)**  
39\. Combination Sum **(Study)**  
40\. Combination Sum II (see 39)  
43\. Multiply Strings **(Review)**  
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

50\. Pow(x, n) **(Review: recursive)**  
53\. **Maximum Subarray (TBR !!! Math.max())**

    var maxSubArray = function(nums) {
      for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i]+nums[i-1]);
      }
      return Math.max(...nums);
    };

62\. Unique Paths **(Review!)**  
69\. Sqrt(x) **Solve it without built-in methods !!!**  
78\. Subsets  

    // append new element to the reference variable
    arr.concat(nums[i])

79\. Word Search **(Study!)**  
80\. Remove Duplicates from Sorted Array II (To Be Improved)  
81\. Search in Rotated Sorted Array II (To Be Improved)  
83\. Remove Duplicates from Sorted List **+1**  
88\. Merge Sorted Array **(Note: start from the end)**  
90\. Subsets II (To be improved)  
91\. Decode Ways **(Study - DP)**  
94\. Binary Tree Inorder Traversal **(Review: iterative)**  
95\. Unique Binary Search Trees II (To be improved)  
104\. Maximum Depth of Binary Tree  

    // if the node does not exist, simply return 0. Otherwise, return the 1+the longer distance of its subtree.
    var maxDepth = function(root) {
      if (!root) return 0;
      return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    };

105\. Construct Binary Tree from Preorder and Inorder Traversal **(Review!!)**  
106\. Construct Binary Tree from Inorder and Postorder Traversal **(Review!!)**  
108\. Convert Sorted Array to Binary Search Tree **(To Be Improved)**  
125\. Valid Palindrome

    // replace other than alphanumeric
    const strippedString = s.replace(/\W/g, '');

127\. Word Ladder (To be improved)  
136\. Single Number

    var singleNumber = function(nums) {
      return nums.reduce((prev, curr) => prev^curr, 0);
    };

139\. Word Break (Review)  
140\. Word Break II (Study!)  
148\. Sort List (To be improved)  
152\. Maximum Product Subarray (To be improved)  
153\. Find Minimum in Rotated Sorted Array (Review)  
168\. Excel Sheet Column Title **(Review - recursive)**  
169\. Majority Element

    // my solution: map
    // a simple but slow version:  O(nlogn)
    var majorityElement = function(nums) {
      nums.sort((a, b) => a-b);
      return nums[Math.floor(nums.length/2)];
    };

172\. Factorial Trailing Zeroes **(Review - recursive)**  
179\. Largest Number (Review)  
198\. House Robber **(Review)**  
200\. Number of Islands (tip: set visited cell to 0)  
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
208\. Implement Trie (Prefix Tree) **[Read](https://leetcode.com/problems/implement-trie-prefix-tree/discuss/58965/Concise-JavaScript-solution)**  
209\. Minimum Size Subarray Sum (Review)  
210\. Course Schedule II **[(Study!)](https://leetcode.com/problems/course-schedule-ii/discuss/146326/JavaScript-DFS)**  
212\. Word Search II (To be improved)  
217\. Contains Duplicate (To be improved)  
231\. Power of Two  

    // (n & (n-1)) 消除到剩 1 or 0
    var isPowerOfTwo = function(n) {
      return n > 0 && (n & (n - 1)) === 0;
    };

236\. Lowest Common Ancestor of a Binary Tree (Review -> Iterative without parent pointers!)  
238\. Product of Array Except Self (To be improved)  
240\. Search a 2D Matrix II (To be improved)  
260\. Single Number III (Study: XOR)  
264\. Ugly Number II [(Study!)](https://leetcode.com/problems/ugly-number-ii/discuss/69362/O(n)-Java-solution)  
279\. Perfect Squares (To be improved)  
292\. Nim Game

    var canWinNim = function(n) {return (n % 4 !== 0};

309\. Best Time to Buy and Sell Stock with Cooldown (Study!)  
318\. Maximum Product of Word Lengths (To be improved)  
319\. Bulb Switcher (square!)  
326\. Power of Three **(Review)**  
332\. Reconstruct Itinerary **(Review !)**  
368\. Largest Divisible Subset **(Study: DP)**  
389\. Find the Difference (XOR operation)  
367\. Valid Perfect Square (a square number is 1+3+5+7+...)  
373\. Find K Pairs with Smallest Sums (To be improved)  
377\. Combination Sum IV **[(Study)](https://leetcode.com/problems/combination-sum-iv/discuss/85036/1ms-Java-DP-Solution-with-Detailed-Explanation)**  
387\. First Unique Character in a String

    var firstUniqChar = function(s) {
      for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
      }
      return -1;
    };

394\. Decode String (Review)  
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
419\. Battleships in a Board (To be improved)  
421\. Maximum XOR of Two Numbers in an Array (To be improved)  
438\. Find All Anagrams in a String (sliding window)  
442\. Find All Duplicates in an Array (To be improved)  
445\. Add Two Numbers II (To be improved)  
451\. Sort Characters By Frequency  

    // sort dict by values
    const sorted = Object.keys(hmap).sort((a, b) => hmap[b] - hmap[a])

    // repeat char
    result += char.repeat(hmap[char])

453\. Minimum Moves to Equal Array Elements (smart!)  
461\. Hamming Distance  

    // By default JavaScript will only replace the first matching value it finds
    // Use /g to replace all matching characters
    str.replace(/0/g, '');

468\. Validate IP Address **(Study: regex)**  
470\. Implement Rand10() Using Rand7() (Study)  
476\. Number Complement (same as 1009.Complement of Base 10 Integer) (binary !!!)

    const findComplement = function(num) {
      num = num.toString(2);
      let complement = '';
      for (let n of num) {
        complement += n === '0'? '1': '0';
      }
      return parseInt(complement, 2);
    };

494\. Target Sum **[(Study for DP!)](https://leetcode.com/problems/target-sum/solution/)**  
501\. Find Mode in Binary Search Tree (To Be Improved)  
503\. Next Greater Element II **[(Review: Solution with stack)](https://leetcode.com/problems/next-greater-element-ii/solution/)**  
518\. Coin Change 2 **(Study)**  
525\. Contiguous Array **(Review)**  
532\. K-diff Pairs in an Array (Review)  
538\. Convert BST to Greater Tree **(Study)**  
540\. Single Element in a Sorted Array (time: O(n)) **(To Be Improved)**  
543\. Diameter of Binary Tree **(Review)**  
567\. Permutation in String (sliding window) **(To be improved from O(n) to O(log n))**  
581\. Shortest Unsorted Continuous Subarray **(Study)**  
590\. N-ary Tree Postorder Traversal (Try queue)  
617\. Merge Two Binary Trees **(Stude: iterative)**  
621\. Task Scheduler (Review!)  
680\. Valid Palindrome II (To be improved)  
687\. Longest Univalue Path (To be improved)  
746\. Min Cost Climbing Stairs **(Study: DP)**  
787\. Cheapest Flights Within K Stops **(Study: [Dijkstra's algorithm](http://nthucad.cs.nthu.edu.tw/~yyliu/personal/nou/04ds/dijkstra.html))**  
836\. Rectangle Overlap (Review)  
886\. Possible Bipartition **(Study!)**  
890\. Find and Replace Pattern (Review)  
896\. Monotonic Array (To be improved)  
897\. Increasing Order Search Tree (To be improved)  
901\. Online Stock Span **(Review)**  
918\. Maximum Sum Circular Subarray **[Read](https://leetcode.com/problems/maximum-sum-circular-subarray/discuss/178422/One-Pass)**  
957\. Prison Cells After N Days (Study)  
970\. Powerful Integers (To be improved)  
986\. Interval List Intersections **(Review)**  
1010\. Pairs of Songs With Total Durations Divisible by 60 (To be improved)  
1026\. Maximum Difference Between Node and Ancestor (To be improved)  
1030\. Matrix Cells in Distance Order (To be improved)  
1035\. Uncrossed Lines **(Study: DP!)**  
1046\. Last Stone Weight (To be improved)  
1089\. Duplicate Zeros (To be improved)  
1104\. Path In Zigzag Labelled Binary Tree (To be improved)  
1160\. Find Words That Can Be Formed by Characters (To be improved)  
1232\. Check If It Is a Straight Line （[三點共線行列式](https://xyzghio.xyz/threePointInlineDiscriminance/), or you can compare slopes)  
1268\. Search Suggestions System (Review)  
1277\. Count Square Submatrices with All Ones **(Review)**  
1297\. Maximum Number of Occurrences of a Substring (To be improved)  
1325\. Delete Leaves With a Given Value (To be improved)  
1346\. Check If N and Its Double Exist (To be improved)  
1351\. Count Negative Numbers in a Sorted Matrix (To be improved)  
1394\. Find Lucky Integer in an Array (To be improved)  
1465\. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts (study)  
1466\. Reorder Routes to Make All Paths Lead to the City Zero (To be improved)  
1513\. Number of Substrings With Only 1s (Review)  
1514\. Path with Maximum Probability **[(Study! Dijkstra+BFS)](https://leetcode.com/problems/path-with-maximum-probability/discuss/732721/Javascript-Dijkstra%2BBFS-clear-solution)**  

## SQL Problems

176\. Second Highest Salary

    select (
      select distinct Salary
      from Employee
      order by Salary desc
      limit 1 offset 1) as SecondHighestSalary;

182\. Duplicate Emails

    select Email
    from Person
    group by Email
    having count(Email) > 1;

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

595\. Big Countries  

    SELECT class
    FROM courses
    GROUP BY class
    HAVING COUNT(DISTINCT student) >= 5;

627\. Swap Salary  

    UPDATE salary
    SET sex = CASE WHEN sex = 'm' THEN 'f'
                   ELSE 'm' END;
