const express = require('express');
const pubService = require('pub-services').services.pubServices;
const app = express();

app.get('/pubs', function (req, res) {
    const pubs = pubService.findAll();
    
    res.send(pubs);
})

var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});