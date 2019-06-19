# sql-query-helper
Helper to write SQL queries efficiently. Supports Typescript.

[![Coverage Status](https://coveralls.io/repos/github/Sangrene/sql-query-helper/badge.svg?branch=master)](https://coveralls.io/github/Sangrene/sql-query-helper?branch=master)
[![Build Status](https://travis-ci.org/Sangrene/sql-query-helper.svg?branch=master)](https://travis-ci.org/Sangrene/sql-query-helper)

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
MIT
Copyright (c) 2019 Hugo Laplace-Builhe(contact@hugo-laplace.net).

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.