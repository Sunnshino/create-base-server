//author : longtao
//this is example,but you can use it made do something.


var http = require('http');
var fileServer = require('fs');
//linux and windwos url , you modeifunction it do yourself something. 
var documentRoot = '/usr/nodejs/Nodejs-Server';
var server = http.createServer(function(request, response) {
    var url = request.url;
    var file = documentRoot + url;
    var curIndex = file.lastIndexOf('.');
    var mime = file.substr(curIndex + 1, file.length);
    var time = new Date();
    console.log('application type:' + mime + "\napplication url:", url+'\napplication time:'+time);
    fileServer.readFile(file, function(err, data) {
        if (err) {
            response.writeHeader(404, { 'content-type': 'text/html; charset="utf-8"' });
            response.write('<center><h1 style="color:#f00;margin-top:15%; font-size:100px;">404</h1><h2>页面找不到的</h2></center>');
            response.end()
        } else {
            response.writeHeader(200, { 'content-type': 'text/' + mime + '; charset="utf-8"' });
            response.write(data);
            response.end()
        }
    })
}).listen(8088);
console.log('Server running port is:8088!');
