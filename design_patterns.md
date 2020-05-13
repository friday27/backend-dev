# Design Patterns

Progress: [Prototype Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#prototypepatternjavascript)

## TODOs

* Advantages and disadvantages
* Real coding examples

Design patterns are reusable solutions to commonly occurring problems in software design.

Design patterns could be categorized in the following way:

## Creational design patterns

These patterns deal with **object creation** mechanisms which optimize object creation compared to a basic approach. 

### Factory method
### Abstract factory
### Builder
### Prototype

The prototype pattern creates objects based on a template of an existing object through cloning.

### Singleton

The singleton pattern is used in scenarios when we need **exactly 1 instance** of a class.  
It is important to note that the access point for retrieving the singleton value needs to be only one and very well known. A downside to using this pattern is that it is rather difficult to test.

		var mySingleton = (function () {
		  // Instance stores a reference to the Singleton
		  var instance;
		 
		  function init() {
		    // Singleton
		    // Private methods and variables
		    function privateMethod(){
		        console.log( "I am private" );
		    }
		 
		    var privateVariable = "Im also private";
		 
		    var privateRandomNumber = Math.random();
		 
		    return {
		      // Public methods and variables
		      publicMethod: function () {
		        console.log( "The public can see me!" );
		      },
		      publicProperty: "I am also public",
		      getRandomNumber: function() {
		        return privateRandomNumber;
		      }
		    };
		  };
		 
		  return {
		    // Get the Singleton instance if one exists
		    // or create one if it doesn't
		    getInstance: function () {
		      if ( !instance ) {
		        instance = init();
		      }
		      return instance;
		    }
		  };
		})();

## Structural design patterns

These patterns deal with **object relationships**. They ensure that if one part of a system changes, the entire system doesn’t need to change along with it. 

### Adapter
### Bridge
### Composite
### Decorator
### Facade
### Flyweight
### Proxy

## Behavioral design patterns

These types of patterns recognize, implement, and improve communication between disparate objects in a system. They help ensure that disparate parts of a system have synchronized information.

### Chain of responsibility
### Command
### Iterator
### Mediator

A mediator pattern is a behavioral design pattern that allows us to expose a unified interface through which the different parts of a system may communicate. (e.g. airport traffic control system)

### Memento
### Observer

The observer pattern is a design pattern where an object (subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state.

When a subject needs to notify observers about something interesting happening, it broadcasts a notification to the observers. When we no longer wish for a particular observer to be notified of changes by the subject they are registered with, the subject can remove them from the list of observers.

		// model the list of dependent Observers a subject may have
		function ObserverList(){
			this.observerList = [];
		}

		ObserverList.prototype.add = function( obj ){
			return this.observerList.push( obj );
		};

		ObserverList.prototype.count = function(){
			return this.observerList.length;
		};
		 
		ObserverList.prototype.get = function( index ){
			if( index > -1 && index < this.observerList.length ){
		    return this.observerList[ index ];
		  }
		};
		 
		ObserverList.prototype.indexOf = function( obj, startIndex ){
		  var i = startIndex;
		 
		  while( i < this.observerList.length ){
		    if( this.observerList[i] === obj ){
		      return i;
		    }
		    i++;
		  }
		 
		  return -1;
		};
		 
		ObserverList.prototype.removeAt = function( index ){
		  this.observerList.splice( index, 1 );
		};

		// model the Subject
		function Subject(){
		  this.observers = new ObserverList();
		}
		 
		Subject.prototype.addObserver = function( observer ){
		  this.observers.add( observer );
		};
		 
		Subject.prototype.removeObserver = function( observer ){
		  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
		};
		 
		Subject.prototype.notify = function( context ){
		  var observerCount = this.observers.count();
		  for(var i=0; i < observerCount; i++){
		    this.observers.get(i).update( context );
		  }
		};

		// The Observer
		function Observer(){
		  this.update = function(){
		    // ...
		  };
		}

#### Observer v.s. Publish/Subscribe

This differs from the Observer pattern as it allows any subscriber implementing an appropriate event handler to register for and receive topic notifications broadcast by the publisher.

### State
### Strategy
### Visitor

## Concurrency design patterns

These types of design patterns deal with multi-threaded programming paradigms.

### Active object
### Nuclear reaction
### Scheduler

## Architectural design patterns

Design patterns which are used for architectural purposes.

### MVC (Model-View-Controller)
### MVP (Model-View-Presenter)
### MVVM (Model-View-ViewModel)

## Other patterns

### Constructor Pattern

A constructor is a special function in a class which **initializes** an object with some set of default values.

3 ways to create objects in JavaScript:

		const instance = {};
		const instance = new Object();
		const instance = Object.create(Object.prototype);

4 ways to add properties to these objects:

		// the dot notation
		instance.key = "A key's value";

		// the square brackets notation
		instance["key"] = "A key's value";

		// setting a single property using Object.defineProperty
		Object.defineProperty(instance, "key", {
	    value: "A key's value",
	    writable: true,
	    enumerable: true,
	    configurable: true
		});

		// setting multiple properties using Object.defineProperties
		Object.defineProperties(instance, {
		  "firstKey": {
		    value: "First key's value",
		    writable: true
		  },
		  "secondKey": {
		    value: "Second key's value",
		    writable: false
		  }
		});

JavaScript doesn’t support native classes, but it does support constructors through the use of a **new** keyword prefixed to a function call. This way, we can use the function as a constructor and initialize its properties the same way we would with a classic language constructor.

		// we define a constructor for Person objects
		function Person(name, age, isDeveloper) {
	    this.name = name;
	    this.age = age;
	    this.isDeveloper = isDeveloper || false;
		}

		// we extend the function's prototype
		// JavaScript uses prototype-based inheritance.
		Person.prototype.writesCode = function() {
		    console.log(this.isDeveloper? "This person does write code" : "This person does not write code");
		}

### Module Pattern (to mimic access modifier)

In JavaScript, there are several options for implementing modules. These include (the latter 3 will be introduced in the later chapters):

* Object literal notation
* The Module pattern
* AMD modules
* CommonJS modules
* ECMAScript Harmony modules

#### Object Literal Notation

		var myModule = {
		  myProperty: "someValue",
		 
		  // object literals can contain properties and methods.
		  // e.g we can define a further object for module configuration:
		  myConfig: {
		    useCaching: true,
		    language: "en"
		  },
		 
		  // a very basic method
		  saySomething: function () {
		    console.log( "Where in the world is Paul Irish today?" );
		  },
		 
		  // output a value based on the current configuration
		  reportMyConfig: function () {
		    console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
		  },
		 
		  // override the current configuration
		  updateMyConfig: function( newConfig ) {
		 
		    if ( typeof newConfig === "object" ) {
		      this.myConfig = newConfig;
		      console.log( this.myConfig.language );
		    }
		  }
		};
		 
		// Outputs: Where in the world is Paul Irish today?
		myModule.saySomething();
		 
		// Outputs: Caching is: enabled
		myModule.reportMyConfig();
		 
		// Outputs: fr
		myModule.updateMyConfig({
		  language: "fr",
		  useCaching: false
		});
		 
		// Outputs: Caching is: disabled
		myModule.reportMyConfig();

#### The Module Pattern

The module pattern uses object literals notation but only as the return value from a scoping function.

		var testModule = (function () {
 
		  var counter = 0;
		 
		  return {
		    incrementCounter: function () {
		      return counter++;
		    },
		 
		    resetCounter: function () {
		      console.log( "counter value prior to reset: " + counter );
		      counter = 0;
		    }
		  };
		})();
		 
		// Usage:
		// Increment our counter
		testModule.incrementCounter();
		 
		// Check the counter value and reset
		// Outputs: counter value prior to reset: 1
		testModule.resetCounter();

### Revealing Module Pattern 

We could simply define all of our functions and variables in the private scope and return an anonymous object with pointers to the private functionality we wished to reveal as public.

		var myRevealingModule = (function () {
 
      var privateVar = "Ben Cherry",
          publicVar = "Hey there!";
 
      function privateFunction() {
        console.log( "Name:" + privateVar );
      }

      function publicSetName( strName ) {
      	privateVar = strName;
      }

      function publicGetName() {
        privateFunction();
      }


      // Reveal public pointers to
      // private functions and properties
      return {
        setName: publicSetName,
        greeting: publicVar,
  		  getName: publicGetName
      };
    })();
 
		myRevealingModule.setName( "Paul Kinlan" );


## References

* [The Comprehensive Guide to JavaScript Design Patterns](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)