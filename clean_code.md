# Clean Code

Progress: Ch.3 Functions - Common Monadic Forms (p.41)

Based on **Clean Code - A Handbook of Agile Software Craftsmanship, Robert C. Martin**

I like my code to be elegant and efficient. The logic should be straightforward to make it hard for bugs to hide, the dependencies minimal to ease maintenance, error handling complete according to an articulated strategy, and per- formance close to optimal so as not to tempt people to make the code messy with unprinci- pled optimizations. Clean code does one thing well. (Bjarne Stroustrup, inventor of C++ and author of The C++ Programming Language)

There are two parts to learning craftsmanship: knowledge and work. You must gain the knowledge of principles, patterns, practices, and heuristics that a craftsman knows, and you must also grind that knowledge into your fingers, eyes, and gut by working hard and practicing.

## Practices

* Before write actual code in Leetcode, write down To paragraphs.

## MeaningFul Names

* A class name should not be a verb.
* Methods should have verb or verb phrase names like postPayment, deletePage, or save.

## Functions

* The first rule of functions is that they should be small.
  * Functions should hardly ever be 20 lines long, and it would be better to keep it under 10 lines.
  * The blocks within if, else and while statements, and so on should be one line long. Probably that line should be a function call.
  * The indent level of a function should not be greater than one or two.
  * The ideal number of arguments for a function is zero. Next comes one. Three arguments should be avoided where possible. More than three equires very special justification -- and then shouldn’t be used anyway.

* Function should do one thing only. One way to know that a function is doing more than "one thing" is if you can extract another function from it.

* The Stepdown Rule - We want to be able to read the program as though it were a set of TO paragraphs.

    To include the setups and teardowns, we include setups, then we include the test page content, and then we include the teardowns.
        To include the setups, we include the suite setup if this is a suite, then we include the regular setup.
        To include the suite setup, we search the parent hierarchy for the “SuiteSetUp” page and add an include statement with the path of that page.
        To search the parent. . .
