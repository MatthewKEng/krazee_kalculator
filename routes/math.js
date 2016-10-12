var router = require('express').Router();

router.post('/', function(req,res){
  console.log(req.body);
  var operation = req.body.operation;
  var x = parseFloat(req.body.x);
  var y = parseFloat(req.body.y);

  switch (operation) {
    case 'add':
    res.send({result: x+y});
    break;
    case 'subtract':
    res.send({result: x-y});
    break;
    case 'multiply':
    res.send({result: x*y});
    break;
    case 'divide':
    res.send({result: x/y});
    break;
    default:
    res.status(400).send('unkown operation');
  }
});

module.exports = router;
