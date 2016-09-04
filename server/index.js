const express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    app = express(),
    router = require('./router'),
    rethink = require('rethinkdb'),
    cors = require('cors');

let whitelist = ['http://localhost:8080', 'http://www.nikz.se', 'http://nikz.se'],
    corsOptions = {
      origin: function(origin, callback) {
          var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
            callback(null, originIsWhitelisted);
        }
    };

app.use(cors(corsOptions));
app.use(bodyParser.json({type: '*/*'}));
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);