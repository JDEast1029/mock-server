var express = require('express');  
var app = express();
var APIs = require('./APIs');


for(var i=0;i<APIs.length;i++){  
    var item=APIs[0];
    app.use(item.url,function (req,res,next) {
        res.json(require('./api/'+item.moduleName))
    })
}


var server = app.listen(3000, function () {  
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});