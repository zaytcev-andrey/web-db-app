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

var spare_part_schema = mongoose.Schema({
    code : String,
    name : String,
    description: String,
    photo_id : String,
    comment_voronezh : String,
    comment_rostov : String
});

var complaint_schema = mongoose.Schema({
    date : String,
    company : String,
    description: String,
    spare_part_id: String,
    photo_id : String,
    docs_id : String,
    comment_rostov : String,
    requirements: String,
    solution: String,
    result: String,
    state: String
});

var spare_part = mongoose.model( 'spare_part', spare_part_schema );
var Complaint = mongoose.model( 'Complaint', complaint_schema );

function create_spare_parts()
{
    console.log("creating initial db");
    
    spareParts = [
        { "code":"1", "name":"engine 1", "description":"diesel", "photo_id":"1", "comment_voronezh":"voronezh", "comment_rostov":"rostov" },
        { "code":"2", "name":"engine 2", "description":"diesel", "photo_id":"2", "comment_voronezh":"voronezh", "comment_rostov":"rostov" },
        { "code":"3", "name":"engine 3", "description":"diesel", "photo_id":"3", "comment_voronezh":"voronezh", "comment_rostov":"rostov" },
        { "code":"4", "name":"engine 4", "description":"diesel", "photo_id":"4", "comment_voronezh":"voronezh", "comment_rostov":"rostov" },
        { "code":"5", "name":"engine 5", "description":"diesel", "photo_id":"5", "comment_voronezh":"voronezh", "comment_rostov":"rostov" },
        { "code":"6", "name":"engine 6", "description":"diesel", "photo_id":"6", "comment_voronezh":"voronezh", "comment_rostov":"rostov" },
        { "code":"7", "name":"engine 7", "description":"diesel", "photo_id":"7", "comment_voronezh":"voronezh", "comment_rostov":"rostov" },
        { "code":"8", "name":"engine 8", "description":"diesel", "photo_id":"8", "comment_voronezh":"voronezh", "comment_rostov":"rostov" },
        { "code":"9", "name":"engine 9", "description":"diesel", "photo_id":"9", "comment_voronezh":"voronezh", "comment_rostov":"rostov" }
    ];

    for ( var i = 0; i < spareParts.length; ++i )
    {
        var engine = new spare_part( spareParts[ i ] );
        engine.save(function (err, part) {
            if (err) 
                return console.error(err);
            else
            {
                console.log( part );
            }
        });
    }
}

function create_complaints()
{
    console.log("creating complaints db");
    
    var complaints = [
        { "date":"01.01.2016", "company":"company 1", "description":"description 1", "spare_part_id":"1", "photo_id":"1", "docs_id":"1", "requirements":"requirements", "solution":"solution", "result":"result", "state":"active" },
        { "date":"02.01.2016", "company":"company 2", "description":"description 2", "spare_part_id":"2", "photo_id":"2", "docs_id":"2", "requirements":"requirements", "solution":"solution", "result":"result", "state":"active" },
        { "date":"03.01.2016", "company":"company 3", "description":"description 3", "spare_part_id":"3", "photo_id":"3", "docs_id":"3", "requirements":"requirements", "solution":"solution", "result":"result", "state":"active" },
        { "date":"04.01.2016", "company":"company 4", "description":"description 4", "spare_part_id":"4", "photo_id":"4", "docs_id":"4", "requirements":"requirements", "solution":"solution", "result":"result", "state":"active" },
        { "date":"05.01.2016", "company":"company 5", "description":"description 5", "spare_part_id":"5", "photo_id":"5", "docs_id":"5", "requirements":"requirements", "solution":"solution", "result":"result", "state":"active" },
        { "date":"06.01.2016", "company":"company 6", "description":"description 6", "spare_part_id":"6", "photo_id":"6", "docs_id":"6", "requirements":"requirements", "solution":"solution", "result":"result", "state":"active" },
        { "date":"07.01.2016", "company":"company 7", "description":"description 7", "spare_part_id":"7", "photo_id":"7", "docs_id":"7", "requirements":"requirements", "solution":"solution", "result":"result", "state":"active" },
        { "date":"08.01.2016", "company":"company 8", "description":"description 8", "spare_part_id":"8", "photo_id":"8", "docs_id":"8", "requirements":"requirements", "solution":"solution", "result":"result", "state":"active" },
        { "date":"09.01.2016", "company":"company 9", "description":"description 9", "spare_part_id":"9", "photo_id":"9", "docs_id":"9", "requirements":"requirements", "solution":"solution", "result":"result", "state":"active" }
    ];

    for ( var i = 0; i < complaints.length; ++i )
    {
        var complaint = new Complaint( complaints[ i ] );
        complaint.save(function (err, part) {
            if (err) 
                return console.error(err);
            else
            {
                console.log( part );
            }
        });
    }
}

// routes
app.get('/api/spare_parts', function(req, res) 
{
    // use mongoose to get all todos in the database
    spare_part.find(function(err, parts) 
    {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        
        console.log( "send data: " ); 
        console.log( parts );
        res.json(parts); // return all todos in JSON format
    });
});

app.get('/api/complaints', function(req, res) 
{
    // use mongoose to get all todos in the database
    Complaint.find(function(err, complaints) 
    {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        
        console.log( "send data: " ); 
        console.log( complaints );
        res.json( complaints ); // return all todos in JSON format
    });
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