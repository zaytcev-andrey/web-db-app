// create our app express
var express  = require('express');
var app      = express();
var morgan = require('morgan');                          

var mongoose = require('mongoose'); 

// configuration
mongoose.connect('mongodb://localhost/test');

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

var spare_parts = mongoose.model('spare_parts', {
    name : String
});

// routes
app.get('/api/spare_parts', function(req, res) 
{
    // use mongoose to get all todos in the database
    /*spare_parts.find(function(err, parts) 
    {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(parts); // return all todos in JSON format
    });*/
    var myRowData = [
        {"name":"Ronald Bowman","country":"China","city":"Lutou","email":"rbowman0@spotify.com"} ];
    res.json( myRowData ); // return all todos in JSON format
    console.log( "send data: " ); 
    console.log( myRowData );
});

// create todo and send back all todos after creation
/*app.post('/api/spare_parts', function(req, res) {

    // create a todo, information comes from AJAX request from Angular
    spare_parts.create(
    {
        text : req.body.text,
    } , function(err, part) 
    {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        spare_parts.find( function(err, all_parts) 
        {
            if (err)
                res.send(err)

            res.json(all_parts);
        });
    });

});*/

app.listen( 8080, function () {
    console.log("App listening on port 8080");
});