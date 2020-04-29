/*
	The sum of a range

	The introduction of this book alluded to the following as a nice way to compute the sum of 
	a range of numbers:
	console.log(sum(range(1, 10)));
	
	Write a range function that takes two arguments, start and end, and returns an array 
	containing all the numbers from start up to (and including) end.

	Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
	Run the example program and see whether it does indeed return 55.

	As a bonus assignment, modify your range function to take an optional third argument that 
	indicates the “step” value used when building the array. 
	If no step is given, the elements go up by increments of one, corresponding to the old behavior. 
	The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 

	Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

console.log('='.repeat(5)+' The sum of s range '+'='.repeat(5));

function range(start, end, step=1) {
	let temp;
	if (start > end) {
		temp = start;
		start = end;
		end = temp;
		step *= -1;
	}

	const arr = [];
	for (let i=start; i<=end; i+= step) {
		arr.push(i);
	}
	return arr;
};

function sum(arr) {
	let result = 0;
	for (let n of arr) {
		result += n;
	}
	return result;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10)));
// → 55

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(5, 2, -1)));

console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));


/*
	Reversing an array

	Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
	For this exercise, write two functions, reverseArray and reverseArrayInPlace. 

	The first, reverseArray, takes an array as argument and produces a new array that 
	has the same elements in the inverse order. 

	The second, reverseArrayInPlace, does what the reverse method does: 
	it modifies the array given as argument by reversing its elements. 

	Neither may use the standard reverse method.

	Thinking back to the notes about side effects and pure functions in the previous chapter, 
	which variant do you expect to be useful in more situations? Which one runs faster?
*/

console.log('='.repeat(5)+' Reversing an array '+'='.repeat(5));

function reverseArray(arr) {
	const reversedArr = [];
	for (let i=arr.length-1; i>-1; i--) {
		reversedArr.push(arr[i]);
	}
	return reversedArr;
};

function reverseArrayInPlace(arr) {
	const len = arr.length;
	let temp;
	for (let i=0; i<len/2; i++) {
		temp = arr[i];
		arr[i] = arr[len-i-1];
		arr[len-i-1] = temp;
	}
	return arr;
};

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray([1, 5, 10]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

arrayValue = ['Apple', 'Banana', 'Cyder', 'Drink'];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// // in-place operation would be faster
// for (let i=0; i<10; i++) {
// 	let start = Date.now();
// 	let res = reverseArray(range(1, 10000));
// 	console.log(`Not in place: ${Date.now()-start}`);

// 	start = Date.now();
// 	res = reverseArrayInPlace(range(1, 10000));
// 	console.log(`In place    : ${Date.now()-start}`);	
// 	console.log();
// }


/*
	A list

	Objects, as generic blobs of values, can be used to build all sorts of data structures. 
	A common data structure is the list (not to be confused with array). 

	A list is a nested set of objects, with the first object holding a reference to the second, 
	the second to the third, and so on.

	let list = {
	  value: 1,
	  rest: {
	    value: 2,
	    rest: {
	      value: 3,
	      rest: null
	    }
	  }
	};
	The resulting objects form a chain.

	A linked list
	A nice thing about lists is that they can share parts of their structure. 
	For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} 
	(with list referring to the binding defined earlier), they are both independent lists, 
	but they share the structure that makes up their last three elements. 
	The original list is also still a valid three-element list.

	Write a function arrayToList that builds up a list structure like the one shown 
	when given [1, 2, 3] as argument. 

	Also write a listToArray function that produces an array from a list. 
	Then add a helper function prepend, which takes an element and a list and 
	creates a new list that adds the element to the front of the input list, 
	and nth, which takes a list and a number and returns the element at the given position in the list 
	(with zero referring to the first element) or undefined when there is no such element.

	If you haven’t already, also write a recursive version of nth.
*/

console.log('='.repeat(5)+' A list '+'='.repeat(5));

// List structure = Linked list
function arrayToList(arr) {
	// assume there are at least 1 element in arr
	const head = {
		value: arr[0],
		next: null
	};
	let pointer = head;

	for (let i=1; i<arr.length; i++) {
		pointer.next = {
			value: arr[i],
			next: null
		};
		pointer = pointer.next;
	}
	return head;
};

function listToArray(list) {
	const arr = [];
	let pointer = list;
	while (pointer !== null) {
		arr.push(pointer.value);
		pointer = pointer.next;
	}
	return arr;
};

function prepend(elem, list) {
	return {
		value: elem,
		next: list
	};
};

// function nth(list, n) {
// 	if (!list) return undefined;
// 	let i = 0;
// 	let pointer = list;
// 	while(i < n) {
// 		pointer = pointer.next;
// 		i++;
// 	}
// 	return pointer.value;
// };

// recursive version
function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.next, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


/*
	Deep comparison

	The == operator compares objects by identity. 
	But sometimes you’d prefer to compare the values of their actual properties.

	Write a function deepEqual that takes two values and returns true 
	only if they are the same value or are objects with the same properties, 
	where the values of the properties are equal when compared with a recursive call to deepEqual.

	To find out whether values should be compared directly (use the === operator for that) 
	or have their properties compared, you can use the typeof operator. 

	If it produces "object" for both values, you should do a deep comparison. 
	But you have to take one silly exception into account: 
	because of a historical accident, typeof null also produces "object".

	The Object.keys function will be useful when you need to go over the properties of objects 
	to compare them.
*/

console.log('='.repeat(5)+' Deep comparison '+'='.repeat(5));

function deepEqual(val1, val2) {
	if (val1 === null && val2 === null) return true;
	if (typeof val1 !== 'object') return val1 === val2;
	if (typeof val2 !== 'object') return false;

	// both are objects
	for (let k of Object.keys(val1)) {
		if (!Object.keys(val2).includes(k)) return false;
		return deepEqual(val1[k], val2[k]);
	}

	// const keysA = Object.keys(val1);
	// const keysB = Object.keys(val2);
	// for (let key of keysA) {
 //    if (!keysB.includes(key) || !deepEqual(val1[key], val2[key])) return false;
 //  }

	return true;
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
