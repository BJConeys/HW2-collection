var express = require('express');
var app = express();
//Server-api config
var port = process.env.PORT || 8080;
var router = express.Router();
//standard log all methods
router.use(function(req,res,next){
  console.log(req.method  + ' ' + req.url);
  next();
});
router.route('/gotme')
  .get(function(req,res) {
    res.json({message:'GET request detected.', query: req.query, header: req.headers, parameter: req.params})
  })

  .post(function(req,res) {
    res.json({message:'POST request detected.', query: req.query, header: req.headers, parameter: req.params})
  })

  .put(function(req,res) {
    res.json({message:'PUT request detected.', query: req.query, header: req.headers, parameter: req.params})
  })

  .delete(function(req,res) {
    res.json({message:'DELETE request detected.', query: req.query, header: req.headers, parameter: req.params})
  })

  //reject unsupported HTTP methods
      .all(function(req, res) {
        res.status(405).json({message: 'Does not support this HTTP method'});
      });


//==================================================================================================================
app.use('/api/hw2', router);

//START THE SERVER
//==================================================================================================================
app.listen(port);
console.log('Server Started. Listening on port:' + port);