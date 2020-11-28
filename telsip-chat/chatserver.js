var express = require('express');
var socket = require('socket.io');

// Constants
const PORTLOCAL = 4000;
const HOSTLOCAL = '0.0.0.0';
PROTOCOLREMOTE = process.env.PROTOCOL;
PORTREMOTE = process.env.PORT;
HOSTREMOTE = process.env.HOST;

// App setup
var app = express();
var server = app.listen(PORTLOCAL, function(){
    console.log(`Running local on http://${HOSTLOCAL}:${PORTLOCAL}`);
    console.log(`Running remote on ${PROTOCOLREMOTE}://${HOSTREMOTE}:${PORTREMOTE}`);
});


// Static files
app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    var srvurl = `${PROTOCOLREMOTE}://${HOSTREMOTE}:${PORTREMOTE}`;
    res.render('pages/index', {
        // EJS variable and server-side variable
        srvurl: srvurl
    });
});


// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('Socket Connection Enstablished', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});
