const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('It Worked');
});

app.listen(process.env.PORT || 8412);
module.exports = app;