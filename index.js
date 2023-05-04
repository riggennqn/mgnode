const http = require('http');

function requestController() {

    document.write('hola mundo');
    
}
const server =http.createServer(requestController);

server.listen(10000)
