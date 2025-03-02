// Import Express
const express = require('express');

// Initialize the Express app
const app = express();

//Importing router

const bookRouter= require('./routes/books')




// Define routes

//Integrating order router
app.use('/books', bookRouter);



  
// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
