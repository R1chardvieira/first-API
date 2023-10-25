const http = require('http');
const users = require('./mocks/users');

const server = http.createServer((request,response)=>{
    console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);        //retorna o metodo ex:GET e o endpoint

    if(request.url === '/users' && request.method === 'GET'){
        response.writeHead(200, { 'content-type':'application/json'} );
        response.end(JSON.stringify(users)); //usa a function json.stringfy para transformar array/objetos em string
    }else{
        response.writeHead(404,{'content-type':'text/html'});
        response.end(`Cannot ${request.method} ${request.url}`);
    }



});
''
server.listen(3000, ()=>console.log('🔥 Server started at http://localhost:3000'));