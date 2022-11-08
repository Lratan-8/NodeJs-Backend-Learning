//we need to require express js just like any other library

const express = require('express');

//obviously server runs on a port so 
const port = 8000;

//moving on we need to fire up express to use it functionalities
//usually the naming convention in app
//we call express as a function. Now this app has all the functionalities of express which are needed to run the express js server.
const app = express();



//returning a response from the server


app.get('/', function(req, res){
    console.log(req);
    res.send('<h1>Cool, it is running!</h1>');
})
















app.listen(port, function(err){

    if(err){
        console.log(`Error: ${err} in running the server`);
        return;
    }

    console.log(`Yup, My express server is running on port: ${port}`)

})