# Database

Based on "Beginning Database Design Solutions, Rod Stephens"

Progress: Ch.9 Common Design Patterns

TODOs:

* Go through examples after BCNF in Ch.7 Normalizing Data

## Fundamentals

* **Building and maintaining an index takes the database some extra time, so you shouldn’t make indexes gratuitously.** Place indexes on the fields that you are most likely to need to search and don’t bother indexing fields such as apartment number that you are unlikely to need to search.

* 3 Basic Types of Tables: (It's important that when you design tables, think about the type of table first. If the type/purpose is unclear, the table might need to be adjusted before implementation.)
  1. Object - Stores information about objects of a particular type
  2. Link - Represents a link between two or more objects
  3. Lookup - Lookup table/ dictionary/ list

## Normalizing Data

_Normalizatoin helps to build a robust database by setting rules to avoid CRUD problems. (While designing databases/tables, it's important to follow the rules and check if there will be any CRUD problems. E.g. What if I delete 1 row?)_

The different levels of normalization in order **from weakest to strongest** are:

* First Normal Form (1NF)
* Second Normal Form (2NF)
* Third Normal Form (3NF)
* Boyce-Codd Normal Form (BCNF)
* Fourth Normal Form (4NF)
* Fifth Normal Form (5NF)
* Domain/Key Normal Form (DKNF)

### First Normal Form (1NF)

Most of the properties needed to be in 1NF are enforced automatically by any reasonable relational database. There are a couple of extra properties added on to make the database more useful, but mostly these rules are pretty basic.

1. Each column must have a unique name
2. The order of the rows and columns doesn’t matter
3. Each column must have a single data type
4. No two rows can contain identical values (Every table has a primary key)
5. Each column must contain a single value
6. Columns cannot contain repeating groups

### Second Normal Form (2NF)

A table is in 2NF if:

1. It is in 1NF
2. All of the non-key fields depend on **all** of the key fields _(Non-PK fields depends directly on the value of the whole PK field)_

### Third Normal Form (3NF)

A table is in 3NF if:

1. It is in 2NF
2. It contains no transitive dependencies. _(Non-PK fields do not depend on any value of other non-PK fields)_

A transitive dependency is when one non-key field’s value depends on another non-key field’s value.

**How to convert a table into 2NF/3NF**:
Find the fields that are causing the (CRUD) problem and pull them into a separate table. Add an extra field to contain the original field on which those were dependent so you can link back to the original table.

It’s fairly easy to convert a database to 3NF and that level of normalization prevents the most common data anomalies.

* It **stores separate data separately** so you can add and remove pieces of information without destroying unrelated data.
* It also **removes redundant data** so the database isn’t full of a zillion copies of the same information that waste space and make updating values difficult.

These greater levels of normalization are rather technical and confusing. They can also lead to unnecessarily complicated data models that are hard to implement, hard to maintain, and hard to use. In some cases, they can give worse performance than less completely normalized designs. _so you need to consider the trade-offs between robustness and performance_

### Boyce-Codd Normal Form (BCNF)

A table is in BCNF if:

1. It is in 3NF
2. Every determinant is a candidate key

### Fourth Normal Form (4NF)

A table is in 4NF if:

1. It is in BCNF
2. It does not contain an unrelated multi-valued dependency

### Fifth Normal Form (5NF)

A table is in 5NF (also called "Project-Join Normal Form") if:

1. It is in 4NF
2. It contains no related multi-valued dependencies

### Domain/Key Normal Form (DKNF)

A table is in DKNF if:

1. The table contains no constraints except domain constraints and key constraints.

In other words, a table is on DKNF if every constraint is a consequence of domain and key constraints.
