const express   = require('express'),
      path  	= require('path'),
      cors 		= require('cors'),
       mongoose  = require('mongoose');

const PORT = 3333,
       app = express();

// Bind express app to http server
const server = require('http').Server(app);

// Binds socketio to http server so
// both express and socketio can use the same server
const io = require('socket.io')(server);

io.on('connect', socket => {
    socket.on('connectRoom', box => {
        // when user connects, join box room
        socket.join(box);
    });
});

// Connect to database
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-fqd3x.mongodb.net/omnistack?retryWrites=true',
{
    useNewUrlParser : true
});

// Global middleware for allowring connection from everywhere
app.use(cors());

// Global middleware for injecting io reference in every request
app.use((req, res, next) => {
    req.io = io;
    return next();
});

// Useful for REST API
app.use(express.json());

// Useful for file uploading
app.use(express.urlencoded({extended:true}));

// Add static routing for files
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

// Use our routing filfe (./ relative to current file)
app.use(require('./routes'));


// Listen to port 3333
// app.listen(PORT);
server.listen(PORT); // Uses server instead of express app