//we need to require express js just like any other library

const bodyParser = require('body-parser');
const { application } = require('express');
const express = require('express');
const path = require('path'); //path is an inbuit module in node, so we do not need to require it.


//obviously server runs on a port so 
const port = 8000;


const db = require("./config/mongoose");


const Contact = require('./models/contact')

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


//middlewareA
app.use(bodyParser.urlencoded({extended: true}));
//middlewareB
app.use(bodyParser.json());




//middlewareC
/*this function by default takes in three arguments. 
Next passes on whatever the changes has been made and calls the next middleware,
if there is one, else it will go on to the next controller. */
app.use(function(req, res, next){

    req.myName = "Luv";

    // console.log("Middleware C called.");
    next();                                 //we need to call this next otherwise it will not move on to the next middleware or controller.

});


//middlewareD

app.use(function(req, res, next){
    // console.log("Middleware D called");
    // console.log(req.myName)
    next();
})


/*middlewareE - 

This middleware is provided to us by express js that helps us read the static files.
this function will now search for assets folder inside our contact list application on the same level. */

app.use(express.static('assets'));


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



//THIS IS A CONTROLLER to fetch data from the hard coded server or MongoDB 
app.get('/', function(req, res){
    // console.log(req);
    // console.log(__dirname); the folder in which our app is running
    // console.log(__filename); the entry file of our application

    //To send a data, we will create an object with key value pairs. 
    //This is kinda same as passing props in react JS

    /*contact.find is a function to lookup for data in the database.
    -By Default it takes two arguments, one is query and other one is a function.
    -Query is to filter out the data we are searching for.
    -The other argument is a function. This function by default takes in two arguments.
    -First is an error(if any). Next is the response we are getting from the request,
     sent to the server through the database.
    -Rest is same as returning a response by rendering data in the browser*/
    Contact.find({},function(err,contacts){

        if (err){
            console.log(`There is an error which is ${err}`);
            return
        };

        return res.render('index', {
            title: 'My Contacts List',
            contacts_List : contacts
        });
    });
});



//This is another controller

app.get('/playground', function(req,res){
    console.log(req.myName)


    return res.render('practice', 
    {
        title: 'Let us play with EJS',
    })
});



//getting data from the input field- The reference to get that data is the /create_contact route.

//The app.post() method routes all the HTTP POST requests to the specified path with the specified callback functions


app.post('/create_contact', function(req, res){
   //for now we are just redirecting the user to some other page.
    //    contactList= [...contactList,req.body];
   console.log(contactList);


   //now to create a contact and save it in the database, we need to do contact.create
   /*anyVariable.create() by default takes in two arguments, the first one is the data from the server
   second one is a callBack function.
   This callback function is to handle the error if any. It by default takes in two arguments again,
   The first one is the error and the second one it the just created instance of the schema*/

   Contact.create({
    name: req.body.name,
    phone: req.body.phone
   }, function(err,newContact){

    if(err){
        console.log("Error in creating a contact");
        return
    }

    console.log("******" , newContact);
    return res.redirect("back");


   });


    //after the request is completed, please redirect me to this route. "/" this homes and "back" also means home
});


//controller to delete a contact from the list

app.get('/delete-contact', function(req, res){

    //get the id from the query params in url
    let id = req.query.id
   
    /*now we have to find the contact in te database to match with this id
    //anyVariable.findByIdAndDelete is a query that is provided by ROBO 3T,
    and this query helps us to find data from the database and delete it.
    There are many such types of queries and we can know about it from the documentation.*/
    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log("Error in deleting an object in database");
        }
        return
    })

    return res.redirect("/");
});

app.listen(port, function(err){

    if(err){
        console.log(`Error: ${err} in running the server`);
        return;
    }

    console.log(`Yup, My express server is running on port: ${port}`)

})