var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var resource = req.path;
  console.log('Request on root: ' + resource);

  var html = '<h1>Test</h1>';

  res.send(html);
});

router.get('/:file', function(req, res, next) {
  var resource = req.params.file;
  console.log('Request on root: ' + resource);

  fs.readFile('./dist/' + resource, function(err, html) {
    if (err) {
      console.error(err);
      next(err);
    }

    //res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });
});

module.exports = router;
