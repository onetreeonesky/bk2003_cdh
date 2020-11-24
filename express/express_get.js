var expre=require('express');
var app=expre();

app.get('/index.html',function(req,res){
    res.send('111111111111');
})
app.listen(8080,function(){
    console.log('express 运行在 http://127.0.0.1:8080 ');
})
