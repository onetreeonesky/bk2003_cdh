var url=require('url');

var http=require('http');
var server=http.createServer();
server.on('request',function(req,res){
    var obj = url.parse( req.url ,true);
    console.log(obj.query);
    res.end('我是getparam程序');
})
server.listen(8080,function(){
    console.log('getparam 已经运行在 http://127.0.0.1:8080');
})