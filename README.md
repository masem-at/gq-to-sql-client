# Project Name: gq-to-sql-client

## Project Intro
This project is a Fluent TypeScript client designed for constructing Graph-style query strings that are compatible with gq-to-sql. It provides a convenient way to build complex queries for interacting with databases using TypeScript.

## Features List
- Build query strings with fluent syntax
- Support for selecting specific fields
- Filtering data based on conditions
- Ordering query results
- Limiting the number of results with top and skip
- Expanding related tables
- Applying groupby and aggregate functions
- Generating SQL-compatible query strings

## Installation Instructions
To install the gq-to-sql-client package, you can use npm or yarn:
```bash
npm install gq-to-sql-client
# or
yarn add gq-to-sql-client
```

## Code Example
```ts
import { gqClient } from 'gq-to-sql-client';

const query = gqClient()
  .select('name, age')
  .filter('age', '>', 18)
  .orderby('name')
  .top(10)
  .toString();

console.log(query);
```

## Usage
![Usage Image](./assets/usage.svg)

## Links
- [Website](https://masem.at/projects/gq-to-sql-client)
- [Github Repository](https://github.com/masem-at/gq-to-sql-client)
- [masem.at](https://masem.at)