const users = require('../mocks/users');

module.exports={
    listUsers(request, response){
        response.writeHead(200, { 'content-type':'application/json'} );
        response.end(JSON.stringify(users)); //usa a function json.stringfy para transformar array/objetos em string
    },
};