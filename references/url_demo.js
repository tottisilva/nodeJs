const url = require('url');

const myUrl = new URL('hhtp://mywebsite.com/hello.html?id=100?status=active');

// Serialize URL 
console.log(myUrl.href);

//Host (root domain) and Hostname <-- A diferença é que o Host da a porta , o Hostname não
console.log(myUrl.host);
console.log(myUrl.hostname);

//Path name
console.log(myUrl.pathname);

//Serialized query <- os parametros query 
console.log(myUrl.search);

// Params object <-- Criação de um objecto com as query 
console.log(myUrl.searchParams);

// Add Param <- Adicionar parametros de forma dinámica
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop trhough params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));