const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    
    // Este método funciona mas não é recomendado porque teremos que usar o if sempre
    /* if(req.url === "/"){
       
       fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if(err) throw err;        
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(content)
       });
       // Para o about o processo é o mesmo 
       
        
    }
    // Trabalho com API's
    if(req.url === "/api/users"){
       // "Criação de uma DB"
       const users = [
           {name: 'Jonh Doe', age:30},
           {name: 'Jan Casper', age:34},
           {name: 'Bob Lenon', age:31},
           {name: 'Walter Doe', age:39}
       ]
       
       res.writeHead(200, {'Content-type': 'application/json'});
       res.end(JSON.stringify(users));
        
    } */

    // Build file path 
    let filePath = path.join(__dirname, 'public', path.url === "/" ? 'index.html' : req.url);

    // Extention of file <-- Aqui dará a extenção do ficheiro 
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check the extention 
    switch(extname){
        case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filePath += ".html";

  // log the filePath
  console.log(filePath);

  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //  Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
    
});

// Aqui criamos um "enviorement variable" , que primeiro irá fazer o check no process e depois na PORT
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));