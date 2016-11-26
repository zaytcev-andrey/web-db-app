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

var spare_part = mongoose.model( 'spare_part', spare_part_schema );

/*function create_spare_part()
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

create_spare_part();*/

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

    /*
    var myRowData = [
        { "code":"10", "name":"engine 10", "description":"diesel", "photo_id":"10", "comment_voronezh":"voronezh", "comment_rostov":"rostov" } ];
    res.json( myRowData ); // return all todos in JSON format
    console.log( "send data: " ); 
    console.log( myRowData );*/
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