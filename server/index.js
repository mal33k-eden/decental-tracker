var express = require('express')
const requestIp = require('request-ip'); 
const path = require('path')
const app = express(); 


// Add headers before the routes are defined
app.use(function (req, res, next) {

    // frontend
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3002');

    // methods allowed
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // ex headers
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 

    // Pass to next layer of middleware
    next();
});
app.use(express.static(path.join(__dirname, 'build')))

app.get('/',function(req, res) {
    return res.sendFile(path.join(__dirname,'build','index.html'))
});

app.get('/get-ip/',function(req, res) {
    var clientIp = requestIp.getClientIp(req);
    // on localhost you'll see 127.0.0.1 if you're using IPv4 
    // or ::1, ::ffff:127.0.0.1 if you're using IPv6
    return res.json(clientIp)
});
   
app.listen(3001, () => console.log(`App listening on port 3001`))
