var express= require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io').listen(server)


//h3ml 2 arrays wa7da ll users w wa7da ll connections
users = []
connections = []

server.listen(process.env.port || 3000)
console.log('Server is Running...')
// h3ml route: (awl parameter da ll path hna lma 7tet / bs kda b2olo fl home page lakn momkn a7oot path 3adiii)
// dosii 3la sendFile kda w htzhr m3lomat 
app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html')

})

// Open el connection bl socketio
io.sockets.on('connection', function(socket){
    // kool el events eli h7tag a3mlha emit h7otha hna
    connections.push(socket)
    console.log('connectes: %s sockets connected', connections.length)

    //Disconnect
    socket.on('disconnect', function(data){
      //  if(!socket.username) return;
        users.splice(users.indexOf(socket.username),1)
        updateUsernames()
        connections.splice(connections.indexOf(socket), 1)
        console.log('Disconnected: %s sockets disconnected', connections.length)
    })

    //send Messages 
    socket.on('send message', function(data){
       // console.log(data)
        io.sockets.emit('new message', {msg: data, user: socket.users})
    })

    // new User
    socket.on("new user", function(data, callback){
       // console.log('Worked!!!!!!!!!')
        callback(true)
        socket.username = data
        users.push(socket.username)
        updateUsernames()
    })

    function updateUsernames(){
        io.sockets.emit('get users', users)
    }

    socket.on('get users', function(){
        var html=''
        //h3ml loop 3l users
        for(i=0 ; i<data.length ; i++){
            html+= '<li class="list-item">'+ data[i]+'</li>'
        }
        $users.html(html)
    })
    
})