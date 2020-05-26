# JavaScript OOP

Progress: p.3

## References

* [A Guide to Object-Oriented Programming in JavaScript
](https://medium.com/better-programming/object-oriented-programming-in-javascript-b3bda28d3e81)
* The Principles of Object-Oriented JavaScript 1st Edition, Kindle Edition by Nicholas C. Zakas

## Data Types

* JavaScript uses two kinds of types: primitive and reference. Primitive types are stored as simple data types. Reference types are stored as objects, which are really just references to locations in memory. The tricky thing is that JavaScript lets you treat primitive types like reference types in order to make the language more consistent for the developer.
* 5 primitive types in JavaScript:
  1. Boolean
  2. Number (int or float)
  3. String (string or char)
  4. Null
  5. Undefined

## Object, property, and method

### Object constructor

Object constructor is the same as a regular function. It will be called each time an object is created. We can use them with the new keyword. Object constructor is useful when we want to create multiple objects with the same properties and methods.

## Class

Classes are functions, and functions are objects in JavaScript.

    //  ES6 class syntax
    class Book {
      constructor(name) {
          this.name = name
      }
    }

    class newBook extends Book { 
      constructor(name) {
          super(name);
      }
    }

    const book1 = new newBook("The Alchemist");

## Encapsulation

Encapsulation means hiding information or data. It refers to the ability of the object to execute its functionality without revealing any execution details to the caller. In other words, the private variable is only visible to the current function and is not accessible to the global scope or other functions.

    // The title and the author are encapsulated inside Book
    const Book = function(t, a) {
      let title = t; 
      let author = a; 
      
      return {
          summary : function() { 
            console.log(`${title} written by ${author}.`);
          } 
      }
    }
    const book1 = new Book('Hippie', 'Paulo Coelho');
    book1.summary();
    // > Hippie written by Paulo Coelho.

## Abstraction

Abstraction means implementation hiding. It is a way of hiding the implementation details and only showing the essential features to the caller. In other words, it hides irrelevant details and shows only what’s necessary to the outer world. A lack of abstraction will lead to problems of code maintainability.

    const Book = function(getTitle, getAuthor) { 
      // Private variables / properties  
      let title = getTitle; 
      let author = getAuthor;

      // Public method 
      this.giveTitle = function() {
          return title;
      }
      
      // Private method
      const summary = function() {
          return `${title} written by ${author}.`
      }

      // Public method that has access to private method.
      this.giveSummary = function() {
          return summary()
      } 
    }

    const book1 = new Book('Hippie', 'Paulo Coelho');
    book1.giveTitle();
    > "Hippie"

    book1.summary();
    > Uncaught TypeError: book1.summary is not a function

    book1.giveSummary();
    > "Hippie written by Paulo Coelho."

## Inheritance/Reusability

Generally, JavaScript is not a class-based language. The keyword class was introduced in ES6 but is syntactical sugar, JavaScript remains prototype-based. In JavaScript inheritance is achieved by using the prototype. This pattern is called Behavior Delegation Pattern or prototypal inheritance.

Some methods must be **shared across all instances** — they should not be specific to the instance. Here the prototype comes into the picture:

    let Corebook = function(title) {
      this.title = title
    }

    Corebook.prototype.title = function() {
      console.log(`name of the book is ${this.title}`);
    }

    Corebook.prototype.summary = function(author) {
      console.log(`${this.title} is written by ${this.author}`);
    }

    let Book = function(title, author) {
      Corebook.call(this, title, author)
    }

    Book.prototype = Object.create(Corebook.prototype);
    let book1 = new Book('The Alchemist', 'Paulo Coelho');
    
    book1.title();
    // > name of the book is The Alchemist
    
    book1.summary();
    // > The Alchemist is written by Paulo Coelho

## Polymorphism

The ability to call the same method on different objects and have each of them respond in their own way is called polymorphism.

    let book1 = function () {}
    book1.prototype.summary = function() {
      return "summary of book1"
    }
    let book2 = function() {}
    book2.prototype = Object.create(book1.prototype);
    book2.prototype.summary = function() {                 
      return "summary of book2"
    }
    let book3 = function() {}
    book3.prototype = Object.create(book1.prototype);
    book3.prototype.summary = function() {
      return "summary of book3"
    }
      
    var books = [new book1(), new book2(), new book3()];
    books.forEach(function(book){
      console.log(book.summary());
    });
    > summary of book1
    > summary of book2
    > summary of book3

## Association

Relationships between the objects will be defined by Association, Aggregation, and Composition.

Association is the relationship between two or more objects. Each Object is independent. In other words, association defines the multiplicity between objects: one-to-one, one-to-many, many-to-one, many-to-many.

    function Book(title, author) { 
      this.title = title; 
      this.author = author; 
    }
    const book1 = new Book ('Hippie', 'Paulo Coelho');
    const book2 = new Book ('The Alchemist', 'Paulo Coelho');

## Aggregation

Aggregation is a special case of an association. In the relationship between two objects, one object can have a more major role than the other. In other words, when an object takes more ownership than another one, that is aggregation. The owner object is often called the aggregate and the owned object is called the component. Aggregation is also called a “Has-a” relationship.

    function Book(title, author) { 
      this.title = title; 
      this.author = author; 
    }
    const book1 = new Book ('Hippie', 'Paulo Coelho');
    const book2 = new Book ('The Alchemist', 'Paulo Coelho');
    let publication = {
      "name": "new publication Inc", 
      "books": []
    }
    publication.books.push(book1);
    publication.books.push(book2);

## Composition

Composition is a special case of aggregation. Composition is when an object contains another object and the contained object can’t live without the container object.

    // If the Book object id was deleted, then the publication would also be deleted.
    let Book = {
      "title": "The Alchemist", 
      "author": "Paulo Coelho",
      "publication": {
          "name": "new publication Inc",
          "address": "chennai"
      }
    }
