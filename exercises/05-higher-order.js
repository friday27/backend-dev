/*
	Use the reduce method in combination with the concat method to “flatten” an array of arrays 
	into a single array that has all the elements of the original arrays.

*/

console.log('='.repeat(5)+' Flattening '+'='.repeat(5));

let arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]

console.log(arrays.reduce((a, b) => a.concat(b), []));


/*
	Your own loop

	Write a higher-order function loop that provides something like a for loop statement. 
	It takes a value, a test function, an update function, and a body function. 
	Each iteration, it first runs the test function on the current loop value and 
	stops if that returns false. 
	Then it calls the body function, giving it the current value. 
	Finally, it calls the update function to create a new value and starts from the beginning.

	When defining the function, you can use a regular loop to do the actual looping.
*/

console.log('='.repeat(5)+' Your own loop '+'='.repeat(5));

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
	 }
};

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


/*
	Everything

	Analogous to the some method, arrays also have an every method. 
	This one returns true when the given function returns true for every element in the array. 
	In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

	Implement every as a function that takes an array and a predicate function as parameters. 
	Write two versions, one using a loop and one using the some method.
*/

console.log('='.repeat(5)+' Everything '+'='.repeat(5));

// loop
function every(arr, test) {
	let res = true;
	for (let val of arr) {
		if (!test(val)) {
			return false;
		}
	}
	return true;
};

console.log('every1');
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


/*
	Dominant writing direction

	Write a function that computes the dominant writing direction in a string of text. 
	Remember that each script object has a direction property that can be "ltr" (left to right), 
	"rtl" (right to left), or "ttb" (top to bottom).

	The dominant direction is the direction of a majority of the characters that have a 
	script associated with them. 
	The characterScript and countBy functions defined earlier in the chapter are probably useful here.
*/

console.log('='.repeat(5)+' Dominant writing direction '+'='.repeat(5));
console.log('skip...');
