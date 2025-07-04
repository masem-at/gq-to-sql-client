# gq-to-sql-client

## Project Intro
gq-to-sql-client is a client library that allows you to convert GraphQL queries to SQL queries. This library helps you to easily integrate GraphQL with SQL databases in your projects.

## Features List
- Convert GraphQL queries to SQL queries
- Easily integrate GraphQL with SQL databases
- Simple and intuitive API

## Installations Instructions
To install gq-to-sql-client, you can use npm:

```bash
npm install gq-to-sql-client
```

## Code example
```javascript
const { convertToSQL } = require('gq-to-sql-client');

const gqlQuery = `
    {
        users {
            id
            name
            email
        }
    }
`;

const sqlQuery = convertToSQL(gqlQuery);
console.log(sqlQuery);
```

## Usage
![Usage](./assets/usage.svg)

## Links
- [masem.at](https://masem.at)
- [GitHub](https://github.com/masem-at/gq-to-sql-client)
- [Project Page](https://masem.at/projects/gq-to-sql-client)