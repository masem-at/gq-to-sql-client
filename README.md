# Fluent TypeScript Client for Graph-style Query Strings

This TypeScript project provides a fluent client for building Graph-style query strings that are compatible with gq-to-sql.

## Features

- Build query strings with fluent API methods
- Support for selecting, filtering, ordering, pagination, expansion, and aggregation
- Easily convert the query object to a query string
- Compatible with gq-to-sql for seamless integration

## Installation

To use this TypeScript client in your project, you can install it via npm:

```bash
npm install <package-name>
```

## Code Example

You can use the provided functions to construct complex query strings in a fluent manner. Here's an example of how you can use this client:

```typescript
import { gqClient } from './index';

const query = gqClient()
  .select('name, age')
  .filter('age', '>', 18)
  .and()
  .filter('city', '=', 'New York')
  .orderby('name')
  .top(10)
  .toString();

console.log(query);
```

## Usage

![Usage Image](./assets/usage.svg)

## Links

- [masem.at](https://masem.at)
- [GitHub Repository](https://github.com)
- [Project Page](https://projectWebsite)