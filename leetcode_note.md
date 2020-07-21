# Leetcode Note

## TODOs

* 500!
* Clean up problems
* Pass by value and pass by reference in JS
* XOR operator (136. Single Number)
* bit manipulation
* JS regex matching

* Study + Review + Complexity

* Design patterns - handwriting note!

* Leetcode Collections
  * [Top Interview Questions](https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/)
  * [Binary Search](https://leetcode.com/explore/learn/card/binary-search/)
  * [Recursion I](https://leetcode.com/explore/featured/card/recursion-i/250/principle-of-recursion/)
  * [Recursion II](https://leetcode.com/explore/learn/card/recursion-ii/)
  * [Leetcode: ML concepts](https://leetcode.com/explore/featured/card/machine-learning-101/287/what_is_ml/)

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

1\. Two Sum  
2\. Add Two Numbers  
3\. **Longest Substring Without Repeating Characters (TBR !!!)**  
4\. Median of Two Sorted Arrays  
6\. [ZigZag Conversion](https://leetcode.com/problems/zigzag-conversion/discuss/614271/JavaScript-Solution)

    const mat = Array(3).fill('');
    // ['', '', '']

    let range = [...Array(5).keys()];
    // [0, 1, 2, 3, 4]

    let range2 = [...Array(5).keys].slice(1, 4).reverse();
    // [3, 2, 1]

7\. Reverse Integer  
8\. String to Integer (atoi)  
9\. Palindrome Number  
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

17\. Letter Combinations of a Phone Number (To be improved)  
19\. Remove Nth Node From End of List  
20\. Valid Parentheses  
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

23\. Merge k Sorted Lists  
24\. Swap Nodes in Pairs (time: O(n))

    var swapPairs = function(head) {
      if (!head || !head.next) return head;
      const p1 = head, p2 = head.next, p3 = p2.next;
      p2.next = p1;
      p1.next = swapPairs(p3);
      return p2;
    };

26\. Remove Duplicates from Sorted Array  
27\. Remove Element  
28\. Implement strStr()  
29\. Divide Two Integers **[Read](https://leetcode.com/problems/divide-two-integers/discuss/13516/JavaScript-solution-with-O(logN)-time-and-O(logN)-stack-space)**  
33\. Search in Rotated Sorted Array **(Review)**  
34\. Find First and Last Position of Element in Sorted Array **(To be improved from O(n) to O(log n))**  
35\. Search Insert Position  
36\. Valid Sudoku  **(Review)**  
38\. Count and Say  
39\. Combination Sum **(Study)**  
40\. Combination Sum II (see 39)  
41\. First Missing Positive  
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
53\. **Maximum Subarray (TBR !!! Math.max())**

    var maxSubArray = function(nums) {
      for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i]+nums[i-1]);
      }
      return Math.max(...nums);
    };

55\. Jump Game  
56\. Merge Intervals  
58\. Length of Last Word  
61\. Rotate List  
62\. Unique Paths **(Review!)**  
63\. Unique Paths II  
64\. Minimum Path Sum  
66\. Plus One  
69\. Sqrt(x) **Solve it without built-in methods !!!**  
70\. Climbing Stairs  
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
81\. Search in Rotated Sorted Array II (To Be Improved)  
82\. Remove Duplicates from Sorted List II  
83\. Remove Duplicates from Sorted List **+1**  
86\. Partition List  
88\. Merge Sorted Array **(Note: start from the end)**  
91\. Decode Ways **(Study - DP)**  
92\. Reverse Linked List II  
93\. Restore IP Addresses  
94\. Binary Tree Inorder Traversal **(Review: iterative)**  
96\. Unique Binary Search Trees  
98\. Validate Binary Search Tree  
100\. Same Tree  
101\. Symmetric Tree  
102\. Binary Tree Level Order Traversal  
103\. Binary Tree Zigzag Level Order Traversal  
104\. Maximum Depth of Binary Tree  

    // if the node does not exist, simply return 0. Otherwise, return the 1+the longer distance of its subtree.
    var maxDepth = function(root) {
      if (!root) return 0;
      return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    };

107\. Binary Tree Level Order Traversal II  
108\. Convert Sorted Array to Binary Search Tree **(To Be Improved)**  
109\. Convert Sorted List to Binary Search Tree  
110\. Balanced Binary Tree  
111\. Minimum Depth of Binary Tree (time: O(n), space: O(n) for BFS)  
112\. Path Sum (time: O(n)  for DFS)  
113\. Path Sum II  
114\. Flatten Binary Tree to Linked List  
116\. Populating Next Right Pointers in Each Node  
117\. Populating Next Right Pointers in Each Node II  
118\. Pascal's Triangle  
119\. Pascal's Triangle II  
121\. Best Time to Buy and Sell Stock  
122\. Best Time to Buy and Sell Stock II  
125\. Valid Palindrome

    // replace other than alphanumeric
    const strippedString = s.replace(/\W/g, '');

129\. Sum Root to Leaf Numbers  
130\. Surrounded Regions  
136\. Single Number

    var singleNumber = function(nums) {
      return nums.reduce((prev, curr) => prev^curr, 0);
    };

137\. Single Number II  
141\. Linked List Cycle  
142\. Linked List Cycle II  
144\. Binary Tree Preorder Traversal  
151\. Reverse Words in a String  
155\. Min Stack  
160\. Intersection of Two Linked Lists  
162\. Find Peak Element  
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
173\. Binary Search Tree Iterator  
179\. Largest Number (Review)  
187\. Repeated DNA Sequences  
189\. Rotate Array  
190\. Reverse Bits  
191\. Number of 1 Bits  
198\. House Robber **(Review)**  
199\. Binary Tree Right Side View  
200\. Number of Islands (tip: set visited cell to 0)  
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
208\. Implement Trie (Prefix Tree) **[Read](https://leetcode.com/problems/implement-trie-prefix-tree/discuss/58965/Concise-JavaScript-solution)**  
210\. Course Schedule II **[(Study!)](https://leetcode.com/problems/course-schedule-ii/discuss/146326/JavaScript-DFS)**  
212\. Word Search II (To be improved)  
216\. Combination Sum III  
217\. Contains Duplicate (To be improved)  
222\. Count Complete Tree Nodes  
227\. Basic Calculator II  
219\. Contains Duplicate II  
225\. Implement Stack using Queues  
226\. Invert Binary Tree  
228\. Summary Ranges  
230\. Kth Smallest Element in a BST  
231\. Power of Two  

    // (n & (n-1)) 消除到剩 1 or 0
    var isPowerOfTwo = function(n) {
      return n > 0 && (n & (n - 1)) === 0;
    };

232\. Implement Queue using Stacks  
234\. Palindrome Linked List  
235\. Lowest Common Ancestor of a Binary Search Tree  
236\. Lowest Common Ancestor of a Binary Tree (Review -> Iterative without parent pointers!)  
237\. Delete Node in a Linked List  
238\. Product of Array Except Self (To be improved)  
242\. Valid Anagram  
257\. Binary Tree Paths  
258\. Add Digits  
263\. Ugly Number  
264\. Ugly Number II [(Study!)](https://leetcode.com/problems/ugly-number-ii/discuss/69362/O(n)-Java-solution)  
268\. Missing Number  
274\. H-Index  
275\. H-Index II  
278\. First Bad Version  
279\. Perfect Squares (To be improved)  
283\. Move Zeroes  
287\. Find the Duplicate Number  
289\. Game of Life  
290\. Word Pattern  
292\. Nim Game

    var canWinNim = function(n) {return (n % 4 !== 0};

299\. Bulls and Cows  
303\. Range Sum Query - Immutable  
304\. Range Sum Query 2D - Immutable  
380\. Insert Delete GetRandom O(1)  
326\. Power of Three **(Review)**  
328\. Odd Even Linked List  
332\. Reconstruct Itinerary **(Review !)**  
338\. Counting Bits  
342\. Power of Four  
344\. Reverse String  
345\. Reverse Vowels of a String  
347\. Top K Frequent Elements  
349\. Intersection of Two Arrays  
350\. Intersection of Two Arrays II  
355\. Design Twitter  
368\. Largest Divisible Subset **(Study: DP)**  
389\. Find the Difference (XOR operation)  
392\. Is Subsequence  
367\. Valid Perfect Square (a square number is 1+3+5+7+...)  
374\. Guess Number Higher or Lower  
377\. Combination Sum IV **[(Study)](https://leetcode.com/problems/combination-sum-iv/discuss/85036/1ms-Java-DP-Solution-with-Detailed-Explanation)**  
378\. Kth Smallest Element in a Sorted Matrix  
383\. Ransom Note  
384\. Shuffle an Array  
387\. First Unique Character in a String

    var firstUniqChar = function(s) {
      for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
      }
      return -1;
    };

398\. Random Pick Index  
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

404\. Sum of Left Leaves  
405\. Convert a Number to Hexadecimal  
406\. Queue Reconstruction by Height **(Study)**  
409\. Longest Palindrome  
412\. Fizz Buzz  
414\. Third Maximum Number  
415\. Add Strings  
419\. Battleships in a Board (To be improved)  
429\. N-ary Tree Level Order Traversal  
430\. Flatten a Multilevel Doubly Linked List  
434\. Number of Segments in a String  
437\. Path Sum III  
438\. Find All Anagrams in a String (sliding window)  
441\. Arranging Coins  
448\. Find All Numbers Disappeared in an Array  
451\. Sort Characters By Frequency  

    // sort dict by values
    const sorted = Object.keys(hmap).sort((a, b) => hmap[b] - hmap[a])

    // repeat char
    result += char.repeat(hmap[char])

453\. Minimum Moves to Equal Array Elements (smart!)  
455\. Assign Cookies  
459\. Repeated Substring Pattern  
461\. Hamming Distance  

    // By default JavaScript will only replace the first matching value it finds
    // Use /g to replace all matching characters
    str.replace(/0/g, '');

463\. Island Perimeter  
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

482\. License Key Formatting  
485\. Max Consecutive Ones  
494\. Target Sum **[(Study for DP!)](https://leetcode.com/problems/target-sum/solution/)**  
496\. Next Greater Element I  
500\. Keyboard Row  
501\. Find Mode in Binary Search Tree (To Be Improved)  
503\. Next Greater Element II **[(Review: Solution with stack)](https://leetcode.com/problems/next-greater-element-ii/solution/)**  
504\. Base 7  
506\. Relative Ranks  
507\. Perfect Number  
508\. Most Frequent Subtree Sum  
509\. Fibonacci Number  
518\. Coin Change 2 **(Study)**  
520\. Detect Capital  
525\. Contiguous Array **(Review)**  
528\. Random Pick with Weight  
530\. Minimum Absolute Difference in BST  
532\. K-diff Pairs in an Array (Review)  
538\. Convert BST to Greater Tree **(Study)**  
540\. Single Element in a Sorted Array (time: O(n)) **(To Be Improved)**  
543\. Diameter of Binary Tree **(Review)**  
551\. Student Attendance Record I  
557\. Reverse Words in a String III  
559\. Maximum Depth of N-ary Tree  
561\. Array Partition I  
563\. Binary Tree Tilt  
566\. Reshape the Matrix  
567\. Permutation in String (sliding window) **(To be improved from O(n) to O(log n))**  
572\. Subtree of Another Tree  
581\. Shortest Unsorted Continuous Subarray **(Study)**  
589\. N-ary Tree Preorder Traversal  
590\. N-ary Tree Postorder Traversal (Try queue)  
594\. Longest Harmonious Subsequence  
598\. Range Addition II  
599\. Minimum Index Sum of Two Lists  
605\. Can Place Flowers  
606\. Construct String from Binary Tree  
617\. Merge Two Binary Trees **(Stude: iterative)**  
628\. Maximum Product of Three Numbers  
633\. Sum of Square Numbers  
637\. Average of Levels in Binary Tree  
643\. Maximum Average Subarray I  
645\. Set Mismatch  
653\. Two Sum IV - Input is a BST  
657\. Robot Return to Origin  
661\. Image Smoother  
662\. Maximum Width of Binary Tree  
669\. Trim a Binary Search Tree  
671\. Second Minimum Node In a Binary Tree  
674\. Longest Continuous Increasing Subsequence  
682\. Baseball Game  
686\. Repeated String Match  
687\. Longest Univalue Path (To be improved)  
690\. Employee Importance  
692\. Top K Frequent Words  
693\. Binary Number with Alternating Bits  
697\. Degree of an Array  
700\. Search in a Binary Search Tree  
703\. Kth Largest Element in a Stream  
704\. Binary Search  
705\. Design HashSet  
706\. Design HashMap  
709\. To Lower Case  
720\. Longest Word in Dictionary  
724\. Find Pivot Index  
728\. Self Dividing Numbers  
733\. Flood Fill  
744\. Find Smallest Letter Greater Than Target  
746\. Min Cost Climbing Stairs **(Study: DP)**  
747\. Largest Number At Least Twice of Others  
766\. Toeplitz Matrix  
771\. Jewels and Stones  
783\. Minimum Distance Between BST Nodes  
784\. Letter Case Permutation  
787\. Cheapest Flights Within K Stops **(Study: [Dijkstra's algorithm](http://nthucad.cs.nthu.edu.tw/~yyliu/personal/nou/04ds/dijkstra.html))**  
796\. Rotate String  
804\. Unique Morse Code Words  
811\. Subdomain Visit Count  
819\. Most Common Word  
821\. Shortest Distance to a Character  
830\. Positions of Large Groups  
832\. Flipping an Image  
836\. Rectangle Overlap (Review)  
860\. Lemonade Change  
867\. Transpose Matrix  
868\. Binary Gap  
872\. Leaf-Similar Trees  
874\. Walking Robot Simulation  
876\. Middle of the Linked List  
884\. Uncommon Words from Two Sentences  
886\. Possible Bipartition **(Study!)**  
888\. Fair Candy Swap  
896\. Monotonic Array (To be improved)  
897\. Increasing Order Search Tree (To be improved)  
901\. Online Stock Span **(Review)**  
917\. Reverse Only Letters  
918\. Maximum Sum Circular Subarray **[Read](https://leetcode.com/problems/maximum-sum-circular-subarray/discuss/178422/One-Pass)**  
925\. Long Pressed Name  
929\. Unique Email Addresses  
933\. Number of Recent Calls  
938\. Range Sum of BST  
957\. Prison Cells After N Days (Study)  
961\. N-Repeated Element in Size 2N Array  
965\. Univalued Binary Tree  
970\. Powerful Integers (To be improved)  
973\. K Closest Points to Origin  
977\. Squares of a Sorted Array  
985\. Sum of Even Numbers After Queries  
986\. Interval List Intersections **(Review)**  
989\. Add to Array-Form of Integer  
993\. Cousins in Binary Tree  
997\. Find the Town Judge  
1002\. Find Common Characters  
1008\. Construct Binary Search Tree from Preorder Traversal  
1010\. Pairs of Songs With Total Durations Divisible by 60 (To be improved)  
1013\. Partition Array Into Three Parts With Equal Sum  
1018\. Binary Prefix Divisible By 5  
1022\. Sum of Root To Leaf Binary Numbers  
1029\. Two City Scheduling  
1030\. Matrix Cells in Distance Order (To be improved)  
1035\. Uncrossed Lines **(Study: DP!)**  
1046\. Last Stone Weight (To be improved)  
1047\. Remove All Adjacent Duplicates In String  
1051\. Height Checker  
1078\. Occurrences After Bigram  
1089\. Duplicate Zeros (To be improved)  
1103\. Distribute Candies to People  
1108\. Defanging an IP Address  
1122\. Relative Sort Array  
1128\. Number of Equivalent Domino Pairs  
1137\. N-th Tribonacci Number  
1154\. Day of the Year  
1160\. Find Words That Can Be Formed by Characters (To be improved)  
1184\. Distance Between Bus Stops  
1189\. Maximum Number of Balloons  
1200\. Minimum Absolute Difference  
1207\. Unique Number of Occurrences  
1221\. Split a String in Balanced Strings  
1232\. Check If It Is a Straight Line （[三點共線行列式](https://xyzghio.xyz/threePointInlineDiscriminance/), or you can compare slopes)  
1252\. Cells with Odd Values in a Matrix  
1267\. Count Servers that Communicate  
1268\. Search Suggestions System (Review)  
1275\. Find Winner on a Tic Tac Toe Game  
1277\. Count Square Submatrices with All Ones **(Review)**  
1281\. Subtract the Product and Sum of Digits of an Integer  
1287\. Element Appearing More Than 25% In Sorted Array  
1290\. Convert Binary Number in a Linked List to Integer  
1295\. Find Numbers with Even Number of Digits  
1297\. Maximum Number of Occurrences of a Substring (To be improved)  
1299\. Replace Elements with Greatest Element on Right Side  
1302\. Deepest Leaves Sum  
1304\. Find N Unique Integers Sum up to Zero  
1305\. All Elements in Two Binary Search Trees  
1306\. Jump Game III  
1309\. Decrypt String from Alphabet to Integer Mapping  
1313\. Decompress Run-Length Encoded List  
1315\. Sum of Nodes with Even-Valued Grandparent  
1317\. Convert Integer to the Sum of Two No-Zero Integers  
1323\. Maximum 69 Number  
1337\. The K Weakest Rows in a Matrix  
1342\. Number of Steps to Reduce a Number to Zero  
1344\. Angle Between Hands of a Clock  
1346\. Check If N and Its Double Exist (To be improved)  
1351\. Count Negative Numbers in a Sorted Matrix (To be improved)  
1356\. Sort Integers by The Number of 1 Bits  
1365\. How Many Numbers Are Smaller Than the Current Number  
1374\. Generate a String With Characters That Have Odd Counts  
1380\. Lucky Numbers in a Matrix  
1381\. Design a Stack With Increment Operation  
1389\. Create Target Array in the Given Order  
1394\. Find Lucky Integer in an Array (To be improved)  
1396\. Design Underground System  
1399\. Count Largest Group  
1403\. Minimum Subsequence in Non-Increasing Order  
1408\. String Matching in an Array  
1413\. Minimum Value to Get Positive Step by Step Sum  
1417\. Reformat The String  
1418\. Display Table of Food Orders in a Restaurant  
1422\. Maximum Score After Splitting a String  
1431\. Kids With the Greatest Number of Candies  
1433\. Check If a String Can Break Another String  
1436\. Destination City  
1441\. Build an Array With Stack Operations  
1446\. Consecutive Characters  
1448\. Count Good Nodes in Binary Tree  
1450\. Number of Students Doing Homework at a Given Time  
1451\. Rearrange Words in a Sentence  
1455\. Check If a Word Occurs As a Prefix of Any Word in a Sentence  
1457\. Pseudo-Palindromic Paths in a Binary Tree  
1460\. Make Two Arrays Equal by Reversing Sub-arrays  
1464\. Maximum Product of Two Elements in an Array  
1466\. Reorder Routes to Make All Paths Lead to the City Zero (To be improved)  
1470\. Shuffle the Array  
1472\. Design Browser History  
1475\. Final Prices With a Special Discount in a Shop  
1476\. Subrectangle Queries  
1480\. Running Sum of 1d Array  
1481\. Least Number of Unique Integers after K Removals  
1486\. XOR Operation in an Array  
1491\. Average Salary Excluding the Minimum and Maximum Salary  
1492\. The kth Factor of n  
1496\. Path Crossing  
1502\. Can Make Arithmetic Progression From Sequence  
1507\. Reformat Date  
1508\. Range Sum of Sorted Subarray Sums  
1512\. Number of Good Pairs  
1513\. Number of Substrings With Only 1s (Review)  
1514\. Path with Maximum Probability **[(Study! Dijkstra+BFS)](https://leetcode.com/problems/path-with-maximum-probability/discuss/732721/Javascript-Dijkstra%2BBFS-clear-solution)**  
1518\. Water Bottles  

## SQL Problems

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

595\. Big Countries  

    SELECT class
    FROM courses
    GROUP BY class
    HAVING COUNT(DISTINCT student) >= 5;

620\. Not Boring Movies  
627\. Swap Salary  

    UPDATE salary
    SET sex = CASE WHEN sex = 'm' THEN 'f'
                   ELSE 'm' END;
