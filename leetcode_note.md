# Leetcode Note

## Easy Problems (Target: 100 out of 321)
1. Two Sum
7. Reverse Integer
9. Palindrome Number
13. Roman to Integer
14. Longest Common Prefix (reduce !!!)

      const longestCommonPrefix = function(strs) {
        if (strs === undefined || strs.length === 0) return '';
        return strs.reduce((prev, next) => {
          let i = 0;
          while (i < prev.length && i < next.length && prev[i] === next[i]) i++;
          return prev.slice(0, i);
        });
      };

20. Valid Parentheses
21. Merge Two Sorted Lists (do not use condition to check null, use !variable instead)
26. Remove Duplicates from Sorted Array
278. First Bad Version
383. Ransom Note
476. Number Complement (same as 1009.Complement of Base 10 Integer) (binary !!!)

      const findComplement = function(num) {
        num = num.toString(2);
        let complement = '';
        for (let n of num) {
          complement += n === '0'? '1': '0';
        }
        return parseInt(complement, 2);
      };

771. Jewels and Stones

## Medium Problems (Target: 50)
2. Add Two Numbers
3. **Longest Substring Without Repeating Characters (to be improved !!!)**
