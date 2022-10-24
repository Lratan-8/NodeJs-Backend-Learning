







//Creating our own server


const http = require('http');  // we are importing createServer and all the functionalities from the http module
const port = 8000;  
const fs = require('fs');
/*Port is a logical term, instead of physically defined as in USB ports.
Whenever a service is running on a system, it is running on a specific system.
These are uniquely identifying logical numbers. That are assigned to different tools which are running.
One port can usually run one port at a time.*/ 

//----------------------------------------------------------------------------------------------------------------------------------------------

//now let us create a request handler
//req and res corresponds to request and response

function requestHandler(req, res) {

    console.log(req.url); //this is giving us the requested url - example /home or /about etc
    res.writeHead(200, {'content-type': 'text/html'}); //Here we are defining the head of the request

    let filePath;

    switch (req.url) {
        case '/': filePath = './index.html'
            break;
        case '/profile': filePath = './_profilePage.html'
            break;
        default: filePath = './_404.html'
    }

    fs.readFile(filePath, function(err, data){

        if(err){
            console.log("Error");
            return res.end('<h1>There is some error</h1>')
        }

        return res.end(data)

    })


    
    //----------------------------------------------------------------------------------------------------------------------------------------------

    // fs.readFile('./index.html', function(err,data){ 
    //     //the first argument is the html file that need to be served for this request. the second argument is to handle error

    //     if(err){
    //         console.log('error ', err);
    //         return res.end('<h1>Error!</h1>')
    //     }

    //     return res.end(data);

    // });

    //----------------------------------------------------------------------------------------------------------------------------------------------

   
    
};


const server = http.createServer(requestHandler); //now we can use every functionality of http


//Now the server should listen on this port that we have created.
//And once this listen commmand is run, we will call a function which will give us an error(if any).
//This port argument corresponds to 8000.
//Now if this does not run, the other argument, which is a function is called by default.
//This function takes in an argument, this argument can have any name, for the sake of simplicity we will call it err.

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on port "  + port);
   
});



//================================================================================================================================








