var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = [
    { id: 1, firstname: 'Hans', lastname: 'Gruber' },
    { id: 2, firstname: 'Hercule', lastname: 'Poirot' },
    { id: 3, firstname: 'Tanja', lastname: 'Kuhlmann' }
  ];

  res.json(users);
});

module.exports = router;
