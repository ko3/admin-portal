var express = require('express');

var app = express();
var router = express.Router();

router.get('/', function(req, res){
    res.json({message:"hello world"});
 });

 router.get('/health', function(req, res){
    res.json({message:"success"});
 });

 router.get('/:id', function(req, res){
    res.json({message:"hello", parameters:req.params.id});
 });
app.use(router);
 app.listen(3002, () => {
   console.log("Server running on port 3002");
  });