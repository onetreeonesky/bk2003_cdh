var querystring=require('querystring');

var http=require('http');
var server=http.createServer();
server.on('request',function(req,res){
    var arr=[];
     req.on('data',function(buffer){
         arr.push(buffer);
     })
     req.on('end',function(){
         var buff=Buffer.concat(arr);
         var str=buff.toString();
         var obj=querystring.parse(str);
         console.log(obj);
     })

     res.end('我是 postparam 页面');


})
server.listen(8080,function(){
    console.log('postparam 已经运行在 http://127.0.0.1:8080');
})