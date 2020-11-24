var expr=require('express');
var app=expr();
app.post('/',function(req,res){
    res.send('我是post请求');
})
app.listen(8080,function(){
    console.log('已运行在 http://127.0.0.1:8080 上面');
});