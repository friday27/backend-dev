# PostgreSQL Notes

* `psql postgres` - enter PostgreSQL command line
* `psql postgres -U ...` - enter the command line with the user account

## Users

* `CREATE ROLE ... WITH LOGIN PASSWORD '...';` - Postgres doesn’t actually directly manage users or groups, like most standard permission models do. Instead, it directly manages what it calls roles.

* `ALTER ROLE ... CREATEDB;` - add the CREATEDB permission to the user

## Databases

* `CREATE DATABASE taskmanager;`
