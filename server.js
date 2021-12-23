// require express to run server and route 
const cors =require('cors');
const express =require('express');
const bodyParser =require('body-parser');
const { response } = require('express');
const { request } = require('http');
// add number of port  this is as any number
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
//use all folder in website folder
app.use(express.static('website'));

// Setup Server
// this function is used to bind and listen the connections on the specified host and port.
//when server running this function is called
app.listen( port ,() =>{
    console.log("Hi gerges");
<<<<<<< HEAD
    console.log(`server Running : http://Localhost:${port}`);
=======
    console.log(`server Running : https://Localhost:${port}`);
>>>>>>> 00c4850b84d559c7bfa5e01796aa13541cf32cc0
    }
);
// get function to have data from server 
// get route to server as server return the data needed 
app.get('/getAll', (request , response) =>{
<<<<<<< HEAD
response.send(projectData).end();
=======
response.send(projectData);
>>>>>>> 00c4850b84d559c7bfa5e01796aa13541cf32cc0
});

// post function to post of projectData that have {temp ,date, content }
//  route to post the data from client to server  
app.post('/postData',(request, response) =>{
<<<<<<< HEAD
    projectData={
        temp:request.body.temp,
        date:request.body.date,
        content:request.body.content
    };
    response.send(projectData).end();
    // projectData={...request.body};
    // response .end();
=======
    // projectData={
        // temp:request.body.temp,
        // date:request.body.date,
        // content:request.body.content
    // };
    // response.send(projectData);
    projectData={...request.body};
    response .end();
>>>>>>> 00c4850b84d559c7bfa5e01796aa13541cf32cc0
});