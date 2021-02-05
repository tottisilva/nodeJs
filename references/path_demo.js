// path module

const path = require('path');

// Methods

// Base file name
console.log(path.basename(__filename));

// Directory name 
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object - using parse method
console.log(path.parse(__filename))//.ext); // podemos acessar qualquer parte do objecto ".ext" por exemplo

// Concatenate paths 
console.log(path.join(__dirname, 'test', 'hello.html'));