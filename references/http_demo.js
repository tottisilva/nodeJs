const http = require('http');

//Create server object
http.createServer((req, res) => {
    //Write the response
    res.write('Hello Node.js')
    res.end()
}).listen(5000, () => console.log('server is running')); 

