# gq-to-sql-client

## Project Intro
gq-to-sql-client is a client library that allows you to convert GraphQL queries to SQL queries for interacting with a SQL database. This library simplifies the process of executing GraphQL queries on a SQL database by handling the translation of GraphQL queries to SQL queries.

## Features List
- Convert GraphQL queries to SQL queries
- Simplify interaction with SQL databases using GraphQL syntax
- Easy to use client library

## Installations Instructions
To install gq-to-sql-client, you can use npm:

```bash
npm install gq-to-sql-client
```

## Code example
```javascript
const { Client } = require('gq-to-sql-client');

const client = new Client({
  database: 'mydatabase',
  user: 'myuser',
  password: 'mypassword',
  host: 'localhost',
  port: 5432,
});

const query = `
  query {
    users {
      id
      name
    }
  }
`;

client.query(query)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Usage
![Usage Image](./assets/usage.svg)

## Links
- [masem.at](https://masem.at)
- [GitHub Repository](https://github.com/masem-at/gq-to-sql-client)
- [Project Page](https://masem.at/projects/gq-to-sql-client)