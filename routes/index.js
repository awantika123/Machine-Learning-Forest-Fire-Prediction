const express = require('express');
const router = express.Router();
var spawn = require("child_process").spawn; 

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/predict', (req, res) => {
    var temperature = req.query.temperature;
    var oxygen = req.query.oxygen;
    var humidity = req.query.humidity;

    var process = spawn('python',["./forest_fire.py", 
    req.query.temperature, 
    req.query.oxygen,
    req.query.humidity] ); 
    process.stdout.on('data', function (data) {
        console.log(data.toString());
        
        res.send(data.toString());
      });
      process.stderr.on('data', (data) => {
        console.log(`error:${data}`);
      });
      process.on('close', () => {
        console.log("Closed");
      });
});




module.exports = router;