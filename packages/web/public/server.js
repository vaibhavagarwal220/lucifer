var express = require('express');
var server = express();
var options = {
    index: 'index.html'
};
//Catch All Route for URL
server.use('/', express.static('/home/site/wwwroot', options));

server.get('/*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
  
server.listen(process.env.PORT);
console.log('Started server on Port', process.env.PORT);