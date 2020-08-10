# PostgreSQL Notes

* ` initdb -d <path>` - create a new PostgreSQL database cluster

* `psql postgres` - enter into a new connection with "postgre" db
* `psql -d <db> -U <user>` - enter the command line with db and user

## Users

* `CREATE ROLE ... WITH LOGIN PASSWORD '...';` - Postgres doesn’t actually directly manage users or groups, like most standard permission models do. Instead, it directly manages what it calls roles.

* `ALTER ROLE ... CREATEDB;` - add the CREATEDB permission to the user

## Databases

* `\list` - show databases
* `\c <db>` - connect to db

* `CREATE DATABASE taskmanager;`

## Tables

* `SELECT * FROM pg_catalog.pg_tables;`
