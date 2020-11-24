var fs=require('fs');
var path=require('path');

var http=require('http');
var server=http.createServer();
server.on('request',function(req,res){
    var str=req.url;
    var str2 = str=='/'?'/index.html':str;
    var str3= path.join(__dirname,'public',str2);
    fs.readFile(str3,function(err,data){
        res.end(data);
    })
})
server.listen(8080,function(){
    console.log('已经运行在 http://127.0.0.1:8080');
})