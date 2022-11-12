//we need to require express js just like any other library

const express = require('express');
const path = require('path'); //path is an inbuit module in node, so we do not need to require it.


//obviously server runs on a port so 
const port = 8000;

//moving on we need to fire up express to use it functionalities
//usually the naming convention in app
//we call express as a function. Now this app has all the functionalities of express which are needed to run the express js server.
const app = express();

//First we need to tell express that EJS will be the template engine that we will be using.


app.set('view engine', 'ejs'); //we do not need to require anything, it will find it out on it's own
//also this is setting a value to the view part of the MVC structure of our application
//view is the part that is viewed by the user and so is the template.
//we have setted up the view engine, now we will setup the view files.
//this app.set() will search for a folder name view in the contact list folder and join it with the view of our application.
app.set('views', path.join(__dirname, 'views')); 

//after that I need to provide with a path where I will be placing my templates(html files)





//returning a response from the server



//THIS IS A CONTROLLER
app.get('/', function(req, res){
    // console.log(req);
    // console.log(__dirname); the folder in which our app is running
    // console.log(__filename); the entry file of our application


    //To send a data, we will create an object with key value pairs. 
    //This is kinda same as passing props in react JS
    return res.render('index', {title: 'My Contacts List'});
});



//This is another controller

app.get('/playground', function(req,res){

    console.log(res)
    return res.render('practice', 
    {
        title: 'Let us play with EJS',
    })
})


















app.listen(port, function(err){

    if(err){
        console.log(`Error: ${err} in running the server`);
        return;
    }

    console.log(`Yup, My express server is running on port: ${port}`)

})