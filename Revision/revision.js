const http = require('http');
const port = 8000;
//now to read an index.js file, we need something to read and write this file.
const fs = require('fs'); //the 'fs' module helps us to read and write files in node js. fs = file system

function requestHandler(req, res){

    console.log(req.url);
    //The success code for a request by default is 200.
    //Here we are writing the headers for our request
    res.writeHead(200,{'content-type': 'text/html'});




    //here we will write the code to server multiple files based on different URL's


    let filePath;

    switch(req.url){
        case '/':
            filePath = './index.html'
            break;
        case '/profile':
            filePath = './profile.html'
            break;
        default: 
        filePath = './404.html'
    }




    //here we will start typing code for reading a file
    //to read only one page, we can directly put the address of the file in hte filePath's page. Such as - './index.html'

    fs.readFile(filePath, function(err, data){

        if(err){
            console.log('error: ', err);
            return res.end('<h1>Error!<h1>');
        };

        return res.end(data);

    });

   

    // res.end('Gotcha');

}



const server = http.createServer(requestHandler);

server.listen(port, function(err){

    if(err){
        console.log(err);
        return;
    }

    console.log(`Server is up and running on port ${port}`)

});


//serving a response to the browser

/* First we will create a request handler function
 *
 */

