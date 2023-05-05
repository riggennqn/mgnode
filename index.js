const http = require('http');

function requestController() {

    //document.write('hola mundo');
    console.log('probando el funcioamiento');
    
    
}
const server =http.createServer(requestController);

server.listen(10000)
