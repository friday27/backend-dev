# JavaScript Notes

[Eloquent JavaScript](https://eloquentjavascript.net/?ref=hackr.io)

## Questions

* [Back-End Developer Interview Questions](https://github.com/arialdomartini/Back-End-Developer-Interview-Questions)

## Project Ideas

* One example would be to take this paragraph of text and return a list of alphabetized unique words. After each word tell me how many times the word appeared and in what sentance(s) the word appreared in. [link](https://softwareengineering.stackexchange.com/questions/59520/good-interview-programming-projects)

* [ICPC Past Problems](https://icpc.baylor.edu/worldfinals/problems)

* [List of Programming Challenges](https://softwareengineering.stackexchange.com/questions/756/where-can-i-find-programming-puzzles-and-challenges/764#764)

-----

## 05. Higher-order Functions

### Map method

The map method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been mapped to a new form by the function. Like **forEach** and **filter**, **map** is a standard array method.

	function map(array, transform) {
	  let mapped = [];
	  for (let element of array) {
	    mapped.push(transform(element));
	  }
	  return mapped;
	}

	let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
	console.log(map(rtlScripts, s => s.name));
	// → ["Adlam", "Arabic", "Imperial Aramaic", …]
	
### Reduce / Fold method

Reduce builds a value by repeatedly taking a single element from the array and combining it with the current value. When summing numbers, you’d start with the number zero and, for each element, add that to the sum.

The parameters to reduce are, apart from the array, a combining function and a start value. This function is a little less straightforward than filter and map, so take a close look at it:

	function reduce(array, combine, start) {
	  let current = start;
	  for (let element of array) {
	    current = combine(current, element);
	  }
	  return current;
	}
	
	console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
	// → 10

The standard array method reduce, which of course corresponds to this function, has an added convenience. If your array **contains at least one element**, you are allowed to leave off the start argument. The method will take the first element of the array as its start value and start reducing at the second element.

	console.log([1, 2, 3, 4].reduce((a, b) => a + b));

## [06. Objects](https://eloquentjavascript.net/06_object.html)

### Methods

You can think of **this** as an extra parameter that is passed in a different way. If you want to pass it explicitly, you can use a function’s **call** method, which takes the this value as its first argument and treats further arguments as normal parameters.

	method.call(obj, paramaters);

### Prototype

* [Javascript继承机制的设计思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)
* [該來理解 JavaScript 的原型鍊了](https://blog.techbridge.cc/2017/04/22/javascript-prototype/)
* [06 Exericses](./exercises/06-advanced-objects.js)

### Class

	class Rabbit {
		constructor(type) {
			this.type = type;
		}
		
		speak(line) {
			console.log(`The ${this.type} rabbit says '${line}'!`);
		}
	}
	
	let killerRabbit = new Rabbit("killer");
	let blackRabbit = new Rabbit("black");

### Symbols - Help avoid name duplications

When I claimed that property names are strings, that wasn’t entirely accurate. They usually are, but they can also be **symbols**. Symbols are values created with the Symbol function. Unlike strings, newly created symbols are unique—you cannot create the same symbol twice.

	const toStringSymbol = Symbol("toString");
	Array.prototype[toStringSymbol] = function() {
	  return `${this.length} cm of blue yarn`;
	};
	
	console.log([1, 2].toString());
	// → 1,2
	console.log([1, 2][toStringSymbol]());
	// → 2 cm of blue yarn