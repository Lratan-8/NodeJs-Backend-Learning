//we need to require express js just like any other library

const bodyParser = require('body-parser');
const { application } = require('express');
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
//after that I need to provide with a path where I will be placing my templates(html files)
app.set('views', path.join(__dirname, 'views')); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



//we will now make a global variable which will be available to every function in this file.

let contactList = [
    {
        name: "Luv Ratan",
        phone: '8476986255'
    },
    {
        name: "John Wick",
        phone: "6666666666"
    },
    {
        name: "Naruto Uzumaki",
        phone: "1010101010"

    }
] 





//returning a response from the server



//THIS IS A CONTROLLER
app.get('/', function(req, res){
    // console.log(req);
    // console.log(__dirname); the folder in which our app is running
    // console.log(__filename); the entry file of our application


    //To send a data, we will create an object with key value pairs. 
    //This is kinda same as passing props in react JS
    return res.render('index', {
        title: 'My Contacts List',
        contacts_List : contactList
    });
});



//This is another controller

app.get('/playground', function(req,res){


    return res.render('practice', 
    {
        title: 'Let us play with EJS',
    })
});



//getting data from the input field- The reference to get that data is the /create_contact route.

//The app.post() method routes all the HTTP POST requests to the specified path with the specified callback functions


app.post('/create_contact', function(req, res){
   //for now we are just redirecting the user to some other page.
   console.log(req.body);
   contactList= [...contactList,req.body];
   console.log(contactList);
    return res.redirect("/"); //after the request is completed, please redirect me to this route. "/" this homes and "back" also means home
})


















app.listen(port, function(err){

    if(err){
        console.log(`Error: ${err} in running the server`);
        return;
    }

    console.log(`Yup, My express server is running on port: ${port}`)

})