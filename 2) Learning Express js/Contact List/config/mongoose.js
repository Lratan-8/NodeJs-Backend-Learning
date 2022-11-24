
// require the library - This code is from mongoose documentation of quick start guide.
const mongoose = require('mongoose');

//connect to the database
async function main() {

  await mongoose.connect('mongodb://localhost:27017/contact_list_db');  
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

//check if the connection is succesfull
main().catch(err => console.log(err)); //this line is to catch the error if there is any in the connection