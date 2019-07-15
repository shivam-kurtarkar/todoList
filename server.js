var express = require("express");
var app = express();
var path = require("path");

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.use('/src',express.static('src'))

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3000);
console.log("Server running at Port 3000");
