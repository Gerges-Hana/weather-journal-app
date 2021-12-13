// require express to run server and route 
const cors =require('cors');
const express =require('express');
const bodyParser =require('body-parser');
const { response } = require('express');
const { request } = require('http');
const port = 1111;

// Setup empty JS object to act as endpoint for all routes
projectData = {};



// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
// this function is used to bind and listen the connections on the specified host and port.
//when server running this function is called
app.listen( port ,() =>{
    console.log(`server Running : http://Localhost:${port}`);
    console.log("hellow gerges");
    }
);
// get function to have data from server 
app.get('/getAll ', (request , response) =>{
response.send(projectData);
}
);

// post function to post of projectData that have {temp ,date, content }
app.post('/postData',(request, response) =>{

    projectData={

        temp:request.body.temp,
        date:request.body.date,
        content:request.body.content
    };
    response.send(projectData);
});