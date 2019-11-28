// Strings represent text in javascript

// Declaring strings
"Double quotes"
'Single quotes' // use \ to escape 
`Backticks`

// String concatenation
// adding strings together
"hello " + "world" // 'hello world'
55 + "world" // '55world' (55 will be converted into a string)

// String interpolation
// Using backticks to define a string
`${1 + 1 + 1} rings...` // "3 rings..."

// .length used to get the length of a string
// can only be used on a string
"Dark Lord". length // 9

// Accessing Index

// Indexes are positions within a thing
"dark throne"[0] // d
"dark throne"[3] // k
"dark throne"[50] // undefined

// Converting strings to numbers

// parseInt()
parseInt("500"); // 500
parseInt("3.14"); // 3

// parseFloat()
parseFloat("3.14"); // 3.14