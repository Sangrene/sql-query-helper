# sql-query-helper
Helper to write SQL queries efficiently. Supports Typescript.

[![Coverage Status](https://coveralls.io/repos/github/Sangrene/sql-query-helper/badge.svg?branch=master)](https://coveralls.io/github/Sangrene/sql-query-helper?branch=master)
[![Build Status](https://travis-ci.org/Sangrene/sql-query-helper.svg?branch=master)](https://travis-ci.org/Sangrene/sql-query-helper)
[![npm version](https://badge.fury.io/js/sql-query-helper.svg)](https://badge.fury.io/js/sql-query-helper)

# Installation
`npm i -S sql-query-helper`

# Usage
`import sqlHelper from "sql-query-helper"`
## Select
````
sqlHelper().select({
  table: "MY_TABLE",
  fields: ["ID", "FIRST_NAME", "LAST_NAME"],
  where: {
    ID: 1
  }
});
````

## Insert
````
sqlHelper().insert({
  table: "MY_TABLE",
  fields: {
    STRING_VAL: "MY_VALUE",
    NUMBER_VAL: 1,
    DATE_VAL: new Date(2019, 5, 18, 19, 50)
  }
});
`````

## Update
````
sqlHelper().update({
  table: "MY_TABLE",
  fields: {
    STRING_UPDATED: "MY_STRING",
    NUMBER_UPDATED: 1
  },
  where: {
    ID: 1
  }
});
````

## Delete
````
sqlHelper().delete({
  table: "MY_TABLE",
  where: {
    ID: 1
  }
});
````

# License
[MIT](https://github.com/Sangrene/sql-query-helper/blob/master/LICENSE)
