const express = require("express");
const app = express();

// Task 0: Create the public and views folders and move the correct files into place
// Task 1: Set up the static files middleware


// Task 2: Set up a route handler for / that sends back index.html




// Task 3: Set the view engine to EJS. 


// Task 4: Set up a route handler for /student/1 that...

  // ...creates an object called student with the following properties
  // "name" (string)
  // "advisory" (string)
  // "imageUrl" (string)
  // "funFact" (string)
  

  // ...and sends back student.ejs with the data object


// Task 5: Set up a route handler for /student/2 that serves a DIFFERENT student using the same template


// EXTRA CREDIT
// Task 6: Try to write your own teacher.ejs template that sends back a slightly different info for a teacher (e.g. classes, department)
// Task 7: Set up a route handlers for /teacher/1 and /teacher/2 that use your new template!




app.listen(3000, ()=>{
  console.log("Server is running")
});